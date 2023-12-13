<template>
  <div id="app">
  <Navbar v-if="shouldDisplayNavbar" />
  <VpnPaymentCard v-if="isHomePage" />

  <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";
import VpnPaymentCard from './components/vpn-payment/VpnPaymentCard'

export default {
  name: 'App',
  components: {
    VpnPaymentCard,
    Navbar
  },
  computed: {
    shouldDisplayNavbar() {
      const excludedRoutes = ['/login', '/register'];
      return !excludedRoutes.includes(this.$route.path);
    },
    isHomePage() {
      return this.$route.path === '/';
    }
  },
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  margin: 12px;
  width: 200px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 12px;
  cursor: pointer;
}

</style>
