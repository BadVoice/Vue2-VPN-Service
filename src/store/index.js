import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './modules/authModule';
import paymentModule from './modules/paymentModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authModule,
    paymentModule
  }
});