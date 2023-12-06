import axios from 'axios';
import paymentConfig from '../../config/paymentConfig';

export default {
  namespaced: true,
  state: {},
  mutations: {},
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
        window.location.href = response.data.confirmation.confirmation_url; 

        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
}
