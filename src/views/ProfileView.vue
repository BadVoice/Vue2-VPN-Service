<template>
    <div id="div">
        <UserProfile />
    </div>
  </template>
  
  <script>
  import UserProfile from '../components/dashboard/UserProfile.vue'
  
  export default {
    name: 'userProfile',
    components: {
      UserProfile,
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
  