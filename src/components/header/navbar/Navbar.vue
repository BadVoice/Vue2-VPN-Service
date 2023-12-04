<template>
  <div class="navbar">
    <LoginBtn/>
    <ProfileBtn v-if=""/>
  </div>
</template>
<script>
import LoginBtn from "@/components/header/navbar/buttons/LoginBtn";
import ProfileBtn from "@/components/header/navbar/buttons/ProfileBtn";

export default {
  name: 'Navbar',
  components: {
    LoginBtn,
    ProfileBtn
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: center;
}
</style>