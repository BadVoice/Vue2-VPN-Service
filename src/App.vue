<template>
  <div id="app">
    <Header/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

import Header from "@/components/header/Header";


export default {
  name: 'App',
  components: {
    Header
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
.btn {
  margin: 12px;
  width: 200px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 12px;
  cursor: pointer;
}

</style>
