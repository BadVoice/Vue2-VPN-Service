<template>
  <div>
    <h2>Регистрация</h2>
    <form @submit.prevent="handleRegistration">
      <div>
        <label for="email">Email</label>
        <input placeholder='E-mail' type="email" id="email" v-model="email" required />
      </div>
      <button class="btn" type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "authRegister",
  data() {
    return {
      email: ""
    };
  },

  methods: {
    async handleRegistration() {
      await this.$store.dispatch("authModule/register", {
        email: this.email,
        router: this.$router
      });
    },
  },
};
</script>

<style lang="scss" scoped>

div {
  display: flex;
  margin-top: 20px;
  align-items: center;
  flex-direction: column;
  .btn {
    margin-top: 20px;
  }
  label {
    padding-bottom: 10px;
  }
}
</style>
