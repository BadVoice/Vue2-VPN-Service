import axios from "axios";

const state = {
  token: localStorage.getItem('token') || null,
  userProfile: null,
  userId: ''
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
    try {
      const response = await axios.post(`http://185.125.201.105:5000/users/login`, {
        email,
        password
      });
      const token = response.data.access_token;
      commit('setToken', token);
      localStorage.setItem('token', token);
      await dispatch('userProfile');
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

      if (response.status === 200) {
        commit('setUserProfile', response.data.profile);
        commit('setUserId', userId);
      } else {
        console.error('Failed to retrieve user profile');
      }

    } catch (error) {
      console.error("Error while getting user information:", error);
    }
  },

  async updateUserProfile({state, commit }, updatedFields) {
    try {
      const response = await axios.patch(`http://185.125.201.105:5000/users/profiles/${state.userId}`, updatedFields, {
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      });

      if (response.status === 200) {
        console.log(response.data)
        commit('updateUserProfile', response.data.profile);
      } else {
        console.error('Failed to update user profile');
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
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