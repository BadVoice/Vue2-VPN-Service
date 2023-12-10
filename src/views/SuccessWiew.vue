<template>
    <div id="div">
        <ProfileBtn />
        <TestSuccess />
        
    </div>
  </template>
  
  <script>
  import TestSuccess from '@/components/info-test/Test.vue';
import ProfileBtn from '@/components/header/navbar/buttons/ProfileBtn';
  export default {
    name: 'successView',
    components: {
        TestSuccess,
        ProfileBtn
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
  