<template>
  <div class="navbar">
    <LoginBtn v-if="!userProfile"/>
    <ProfileBtn v-if="userProfile"/>
  </div>
</template>
<script>
import LoginBtn from "@/components/header/navbar/buttons/LoginBtn";
import ProfileBtn from "@/components/header/navbar/buttons/ProfileBtn";
import {mapGetters} from "vuex";

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