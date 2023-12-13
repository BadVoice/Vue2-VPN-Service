<template>
    <div id="div">
        <AuthLogin />
    </div>
</template>
  
<script>
import AuthLogin from '../components/auth/AuthLogin.vue';
  
export default {
    name: 'login',
    components: {
        AuthLogin
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
  