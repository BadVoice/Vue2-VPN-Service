<template>
  <div class="navbar">
    <LoginBtn/>
    <br>
    <div>
      <h1>card number: 4111111111111111</h1>
    любой пинкод и дату

    <h1>Данные для входа: </h1>
    <br>
    почта:  lala@gmail.com
    <br>
    пароль:  test123
    <br>
    кнопку регистрации еще не добавили
    </div>

  </div>
</template>
<script>
import LoginBtn from "@/components/header/navbar/buttons/LoginBtn";
import ProfileBtn from "@/components/header/navbar/buttons/ProfileBtn";

export default {
  name: 'navbar',
  components: {
    LoginBtn,
    ProfileBtn
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