import axios from 'axios';
import paymentConfig from '../../config/paymentConfig';

export default {
  namespaced: true,
  getters: {
  },
  state: {  
  },
  mutations: {
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
        const response = await axios.post(process.env.GENERATE_PAY, paymentData);
        console.log(response.data.id)
        window.location.href = response.data.confirmation.confirmation_url; 
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },


    async recordPayment({ commit }, { userId, paymentData }) {
        try {
          const response = await axios.post(process.env.COMMIT_PAY, {
            userId,
            paymentData: {
              paymentId: paymentData.id,
              status: paymentData.status,
              amount: paymentData.amount.value
            }})
          return response
        } catch (error) {
          console.error(error);
        }
    },
  },
}
