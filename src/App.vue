<template>
  <div id="app">
    <Authorization msg="Здесь будет страница авторизации"/>
  </div>
</template>

<script>
import Authorization from "@/components/Authorization";

export default {
  name: 'App',
  components: {
    Authorization
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
