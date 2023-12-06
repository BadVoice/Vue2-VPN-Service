import axios from 'axios';
import paymentConfig from '../../config/paymentConfig';

export default {
  namespaced: true,
  getters: {
    paymentInfo: state => {
      return {
        paymentId: state.paymentId,
        paymentStatus: state.paymentStatus
      };
    }
  },
  state: {
    paymentStatus: null,
    paymentId: null,  
  },
  mutations: {
    setPaymentData(state, { paymentId, paymentStatus }) {
        state.paymentId = paymentId;
        state.paymentStatus = paymentStatus;
      }
  },
  actions: {
    async createPayment({ commit }, { amount, currency }) {
      const paymentData = {
        amount: {
          value: amount,
          currency: currency
        },
        confirmation: {
          type: 'redirect',
          return_url: paymentConfig.returnUrl,
        },
        payment_method_data: {
          type: paymentConfig.paymentMethod,
        },
        capture: paymentConfig.capture,
        description: paymentConfig.description,
      };

      try {
        const response = await axios.post('http://localhost:5001/create-payment', paymentData);
        
        console.log(response.data.id)
        window.location.href = response.data.confirmation.confirmation_url; 
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },


    async recordPayment({ commit }, { userId, paymentData }) {
        try {
          const response = await axios.post('http://localhost:5001/record-payment', {
            userId,
            paymentData: {
              paymentId: paymentData.id,
              status: paymentData.status,
              amount: paymentData.amount.value
            }
          });
          console.log('Response from recordPayment action:', response);
        } catch (error) {
          console.error(error);
        }
    },


    async checkPaymentStatus({ state, commit }) {
        try {
          const response = await axios.get(`http://localhost:5001/payments/${state.paymentId}/status`);
      
          commit('SET_PAYMENT_STATUS', response.data.status);
          
        } catch (error) {
          console.error("There was an error getting the payment status", error);
        }
      }
  },
}
