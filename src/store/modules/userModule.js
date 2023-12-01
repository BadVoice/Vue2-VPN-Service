import profileService from "@/services/profileService";

const state = {
  userProfile: null
};

const getters = {
  userProfile: (state) => state.userProfile
};

const actions = {
  async GET_USER_PROFILE_BY_ID({ commit }, userId) {
    try {
      const userProfile = await profileService.getUserProfileById(userId)
      commit('SET_USER_PROFILE', userProfile);
    } catch (error) {
      console.error('Error to fetch user profile:', error.message);
    }
  }
};

const mutations = {
  SET_USER_PROFILE(state, profile) {
    state.userProfile = profile;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};