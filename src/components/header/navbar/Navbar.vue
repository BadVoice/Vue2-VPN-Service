<template>
  <div class="navbar">
    <LoginBtn/>
    <ProfileBtn/>
    <p>{{ this.token }}</p>
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
  },
  data() {
    return {
      token: $store.state.getters.token
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