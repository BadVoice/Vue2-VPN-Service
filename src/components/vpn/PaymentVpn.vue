<template>
    <div>
      <h1>Впн</h1>
      <h3>Регони: Нидерланды</h3>
      <h3>1 месяц</h3>
      <button @click="initiatePayment">Купить</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        amount: '999',  //static data for test
        currency: 'RUB' //static data for test
      }
    },
  created() {
    this.$store.dispatch('socketModule/initWebSocket');
  },

  beforeDestroy() {
    this.$store.dispatch('socketModule/disconnectWebSocket');
  },
  methods: {
    async initiatePayment() {
      const userId = this.$store.state.authModule.userId;
    if (!userId) {
      throw new Error("User not authenticated.");
    }

    try {
      const paymentData = await this.$store.dispatch('paymentModule/createPayment', {
        amount: this.amount,
        currency: this.currency
      });

      if (paymentData && paymentData.id) {
        await this.savePayment(userId, paymentData);
      }
    } catch (error) {
      console.error('Error during payment initiation:', error);
    }
  },
  savePayment(userId, paymentData) {
    try {
      this.$store.dispatch('paymentModule/recordPayment', { userId, paymentData });
    } catch (error) {
      console.error(error);
    }
  }},
  computed: {
    isReconnectError() {
      return this.$store.state.socketModule.reconnectError;
    }
  },
  watch: {
    isReconnectError() {
    console.log('reconnect errror'); 
    return this.$store.state.socketModule.reconnectError;
  },
  }
}
  </script>
  
  <style scoped>
  button {
    padding: 10px 15px;
    font-size: 18px;
  }
  </style>
  