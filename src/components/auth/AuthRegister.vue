
<template>
    <div>
      <h2>Регистрация</h2>
      <form @submit.prevent="register">
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="firstName">Имя</label>
          <input type="text" id="firstName" v-model="firstName" required>
        </div>
        <div>
          <label for="lastName">Фамилия</label>
          <input type="text" id="lastName" v-model="lastName" required>
        </div>
        <div>
          <label for="password">Пароль</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button class="btn" type="submit">Зарегистрироваться</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'authRegister',
    data() {
      return {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      };
    },
    methods: {
      register() {
        if (this.password === '') {
          alert('Введите пароль!');
          return;
        } else {

        }
  
        // Здесь будет логика отправки данные формы на сервер для регистрации
  
        // Очистить поля формы после регистрации
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.imgUrl = '';
        this.password = '';
        this.repeatPassword = '';
  
        alert('Регистрация успешна!');
      }
    }
  };
  </script>

<style lang="scss">
/**************************************************/
/***            TEMPORARY STYLES               ***/
/*************************************************/

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
  