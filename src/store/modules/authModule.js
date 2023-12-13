import { updateUserProfileService } from "@/services/user/updateUserProfileService";
import { getUserProfileService } from "@/services/user/userProfileService";
import { loginUserService } from "@/services/user/loginUserService";

const state = {
  token: localStorage.getItem('token') || null,
  userProfile: null,
  userId: localStorage.getItem('userId') || null
};

const getters = {
  token: state => state.token,
  userProfile: state => state.userProfile,
  userId: state => state.userId
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setUserId(state, userId) {
    state.userId = userId;
  },
  setUserProfile(state, updatedFields) {
    state.userProfile = updatedFields;
  },
  clearToken(state) {
    state.token = null;
  },
  updateUserProfile(state, updatedFields) {
    state.userProfile = Object.assign({}, state.userProfile, updatedFields);
  }
};

const actions = {
  async login({ commit, dispatch }, { email, password }) {
    const token = await loginUserService(email, password);
    if (token) {
      commit('setToken', token);
      localStorage.setItem('token', token);
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const decodedToken = JSON.parse(atob(base64));

      const userId = decodedToken.id;
      commit('setUserId', userId);
      localStorage.setItem('userId', userId);

      await dispatch('userProfile');
    }
  },

  async userProfile({ state, commit }) {
    if (!state.token) {
      console.error("Token is missing");
      return;
    }

    const result = await getUserProfileService(state.token);
    if (result) {
      commit('setUserProfile', result.profile);
    }
  },

  async updateUserProfile({state, commit }, updatedFields) {
    const updatedProfile = await updateUserProfileService(state.userId, state.token, updatedFields);
    if (updatedProfile) {
      commit('updateUserProfile', updatedProfile);
    }
  },

  logout({ commit }) {
    commit('clearToken');
    localStorage.removeItem('token');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};