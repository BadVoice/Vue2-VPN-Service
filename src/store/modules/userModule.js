import axios from 'axios';

const state = {
  userProfile: null
};

const getters = {
  userProfile: (state) => state.userProfile
};

const actions = {
  async GET_USER_PROFILE_BY_ID({ commit }, userId) {
    try {
      const userProfileData = await axios.get(`http://185.125.201.105:5000/users/profiles/${userId}`);
      const userProfile = userProfileData.data;
      commit('SET_USER_PROFILE', userProfile);
    } catch (error) {
      // Обработка ошибок, например, показ сообщения об ошибке пользователю
    }
  }
};

const mutations = {
  SET_USER_PROFILE(state, profile) {
    state.userProfile = profile;
  }
};

export default {  // Добавляем экспорт по умолчанию для вашего модуля Vuex
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};