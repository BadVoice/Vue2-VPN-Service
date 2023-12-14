import { updateUserProfileService } from "@/services/user/updateUserProfileService";
import { getUserProfileService } from "@/services/user/userProfileService";
import { loginUserService } from "@/services/user/loginUserService";
import { registerUserService } from "@/services/user/registerUserService";

const state = {
  token: localStorage.getItem('token') || null,
  userProfile: null,
  userId: localStorage.getItem('userId') || null,
  email: '',
  firstName: '',
  lastName: '',
  password: ''
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
  },
  setUser(state, user) {
    state.email = user.email;
    state.firstName = user.firstName;
    state.lastName = user.lastName;
    state.password = user.password;
  },
  clearUser(state) {
    state.email = '';
    state.firstName = '';
    state.lastName = '';
    state.password = '';
  }
};

const actions = {
async register({ commit }, {email, firstName, lastName, password}) {
  try {
    const user = await registerUserService(email, firstName, lastName, password);
    console.log(user);

    commit('clearUser');

    console.log('Регистрация успешна!');
    console.log(user);
  } catch (error) {
    console.log('Ошибка при регистрации!');
    console.error(error);
  }
},

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