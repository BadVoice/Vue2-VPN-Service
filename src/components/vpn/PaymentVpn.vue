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
        amount: '100',  //static data for test
        currency: 'RUB' //static data for test
      }
    },
    methods: {
    async initiatePayment() {
      return await this.$store.dispatch('paymentModule/createPayment', {
        amount: this.amount,
        currency: this.currency
      })
      .then(response => console.log(response))
      .catch(error => console.error(error));
    }
  }
}
  </script>
  
  <style scoped>
  button {
    padding: 10px 15px;
    font-size: 18px;
  }
  </style>
  