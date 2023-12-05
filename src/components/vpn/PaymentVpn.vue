<template>
    <div>
      <h1>Впн</h1>
      <h3>Регони: Нидерланды</h3>
      <h3>1 месяц</h3>
      <button @click="makePayment">Купить</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  const token =  localStorage.getItem('token')
  const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedToken = JSON.parse(atob(base64));

    const userId = decodedToken.id;
  
  export default {
    methods: {
      makePayment() {
        const paymentData = {
          amount: {
            value: '111.0',
            currency: 'RUB'
          },
          confirmation: {
            type: 'redirect',
            return_url: 'http://localhost:8080/'
          }, 
          payment_method_data: {
          type: "bank_card"
            },
          capture: true,
          description: 'Описание платежа'
        };
  
        axios.post('http://localhost:5001/create-payment', paymentData)
        .then(response => {
            window.location.href = response.data.confirmation.confirmation_url;
            const createdPayment = response.data;

            axios.post('http://localhost:5001/record-payment', { 
                userId,
                paymentData: {
                paymentId: createdPayment.id,
                status: createdPayment.status,
                amount: createdPayment.amount.value
                }
            })
            .then(response => {
            return axios.get(`http://localhost:5001/payments/${response.data.paymentData.paymentId}/status`);
                })
                .catch(error => {
                    console.error(error);
                });
            }
        )}
    }
  }
  </script>
  
  <style scoped>
  button {
    padding: 10px 15px;
    font-size: 18px;
  }
  </style>
  