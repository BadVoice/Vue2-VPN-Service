import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './modules/authModule';
import paymentModule from './modules/paymentModule';
import socketModule from './modules/socket'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authModule,
    paymentModule,
    socketModule
  }
});