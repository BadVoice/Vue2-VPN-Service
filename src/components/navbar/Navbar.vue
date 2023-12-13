<template>
    <div class="navbar">
      <NavbarLoginBtn/>
      <NavbarDashboardProfileBtn />
    </div>
  </template>
  <script>
  import NavbarLoginBtn from '../navbar/NavbarLoginBtn.vue'
  import NavbarDashboardProfileBtn from  '../navbar/NavbarDashboardProfileBtn.vue'
  
  export default {
    name: 'navbar',
    components: {
        NavbarLoginBtn,
        NavbarDashboardProfileBtn
    },
    data() {
      return {
        
      }
    }
  }
  </script>
  <style lang="scss" scoped>
  .navbar {
    display: flex;
    justify-content: center;
  }
  </style>