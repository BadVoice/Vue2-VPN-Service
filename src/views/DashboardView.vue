<template>
    <div id="div">
        <DashboardProfile />
    </div>
  </template>
  
  <script>
  import DashboardProfile from '../components/dashboard/DashboardProfile.vue'
  
  export default {
    name: 'profile',
    components: {
      DashboardProfile,
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
  