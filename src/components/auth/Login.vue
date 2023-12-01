<template>
    <form @submit.prevent="login">
      <input type="email" v-model="email" required placeholder="Email">
      <input type="password" v-model="password" required placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post(`http://185.125.201.105:5000/users/login`, {
            email: this.email,
            password: this.password
          });
          const token = response.data.access_token;
          localStorage.setItem('token', token);
          console.log("Вход выполнен")
          // Возможно, выполнить переадресацию на другую страницу или выполнить другие действия
        } catch (error) {
          console.error("Ошибка при входе:", error);
        }
      }
    }
  }
  </script>