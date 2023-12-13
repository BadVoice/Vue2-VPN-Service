<template>
    <div class="navbar">
      <NavbarLoginBtn/>
      <NavbarDashboardProfileBtn />
      <NavbarRegisterBtn/>
    </div>
  </template>
  <script>
  import NavbarLoginBtn from '../navbar/NavbarLoginBtn.vue'
  import NavbarDashboardProfileBtn from  '../navbar/NavbarDashboardProfileBtn.vue'
  import NavbarRegisterBtn from '../navbar/NavbarRegisterBtn.vue'
  
  export default {
    name: 'navbar',
    components: {
        NavbarLoginBtn,
        NavbarDashboardProfileBtn,
        NavbarRegisterBtn
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