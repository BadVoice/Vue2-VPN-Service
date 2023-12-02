import axios from "axios";

const state = {
  token: localStorage.getItem('token') || null,
  userProfile: null,
};

const getters = {
  token: state => state.token,
  userProfile: state => state.userProfile
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setUserProfile(state, userProfile) {
    state.userProfile = userProfile;
  },
  clearToken(state) {
    state.token = null;
  }
};

const actions = {
  async login({ commit, dispatch }, { email, password }) {
    try {
      const response = await axios.post(`http://185.125.201.105:5000/users/login`, {
        email,
        password
      });
      const token = response.data.access_token;
      commit('setToken', token);
      localStorage.setItem('token', token);
      await dispatch('fetchCurrentUser');

    } catch (error) {
      console.error("Login error:", error);
    }
  },

  async userProfile({ state, commit }) {
    if (!state.token) {
      console.error("Token is missing");
      return;
    }
    try {
      const token = state.token;
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const decodedToken = JSON.parse(atob(base64));
    
      const userId = decodedToken.id;

      const response = await axios.get(`http://185.125.201.105:5000/users/profiles/${userId}`, {
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      });

      const userProfile = response.data.profile;
      console.log(userProfile)
      commit('setUserProfile', userProfile);

    } catch (error) {
      console.error("Error while getting user information:", error);
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