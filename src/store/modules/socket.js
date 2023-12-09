import io from 'socket.io-client';
import axios from 'axios'

const SOCKET_URL = 'http://185.125.201.105:5000';

export default {
    namespaced: true,
    state: {
      socket: null,
      paymentStatus: null,
      reconnectError: false, 
    },
    mutations: {
      SET_SOCKET(state, socket) {
        state.socket = socket;
      },
      SET_PAYMENT_STATUS(state, status) {
        state.paymentStatus = status;
      },
      SET_RECONNECT_ERROR(state, status) {
        state.reconnectError = status;
      },
    },
    actions: {
      initWebSocket({ commit, state, dispatch }) {
        const token = localStorage.getItem('token'); 
        const socket = io(SOCKET_URL, {
        query: {
            token: token,
            autoConnect: false
        }
        });

        socket.on('connect', () => {
            console.log('WebSocket connected');
            commit('SET_RECONNECT_ERROR', false); 
          });

        socket.on('disconnect', () => {
            console.log('WebSocket disconnected');
        });

        socket.on('connect_error', (error) => {
            console.error('Connection Error', error);
        });

        socket.io.on('close', () => {
            dispatch('reconnectWebSocket');
        });

        socket.on('paymentCreated', (paymentId) => {
            if (paymentId || data.paymentId) {
              dispatch('fetchPaymentStatus', paymentId);
            } else {
              console.error('Payment ID was not provided with payment confirmation.');
            }
        });

        commit('SET_SOCKET', socket);
        socket.connect();
      },
    fetchPaymentStatus({ commit }, paymentId) {
        try {
          return axios.get(`${SOCKET_URL}/payments/${paymentId}/status`);
        } catch (error) {
          console.error('Ошибка при получении статуса платежа', error);
        }
      },
      initializeWebSocketListeners({ dispatch }) {
        const socket = this.$socket; // или получите ваш Socket.io клиентское подключение откуда-либо
    
        socket.on('paymentCreated', (paymentId) => {
          if (paymentId) {
            dispatch('fetchPaymentStatus', paymentId);
          } else {
            console.error('Payment ID was not provided with payment confirmation');
          }
        });
      },
      disconnectWebSocket({ state }) {
        if (state.socket) {
          state.socket.disconnect();
        }
      },
      reconnectWebSocket({ commit, state, dispatch }) {
        if (state.socket && !state.socket.connected) {
          setTimeout(() => {
            state.socket.connect();
          }, 5000); 
          commit('SET_RECONNECT_ERROR', true); 
        }
    },
  },
  getters: {
    paymentStatus: state => state.paymentStatus,
  }
}
  