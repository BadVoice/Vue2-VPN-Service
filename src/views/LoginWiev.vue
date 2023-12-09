<template>
    <div id="div">
        <Login />
    </div>
  </template>
  
  <script>
  import Login from '../components/auth/Login.vue';
  
  export default {
    name: 'login',
    components: {
    Login
}
  }
  </script>
  
  <style lang="scss">
  #div {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  