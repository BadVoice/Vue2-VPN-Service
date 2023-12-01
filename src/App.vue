<template>
  <div id="app">
    <Login />
      <!-- <UserProfile /> -->
  </div>
</template>

<script>
import UserProfile from '../src/components/dashboard/UserProfile'
import Login from '../src/components/auth/Login'

export default {
  name: 'App',
  components: {
    UserProfile,
    Login
  }
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
</style>
