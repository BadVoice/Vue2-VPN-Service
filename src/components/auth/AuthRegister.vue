
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
  import axios from 'axios';
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
        async register() {
            if (this.password === '') {
                alert('Введите пароль!');
                return;
            }
            try {
                const response = await axios.post('https://api.tvoyvpn.com/api/users/register', {
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password
                });
                debugger
                console.log(response);
  
        // Очистить поля формы после регистрации
                this.email = '';
                this.firstName = '';
                this.lastName = '';
                this.password = '';

  
            alert('Регистрация успешна!');
            console.log(response);
        } catch (error) {
            alert('Ошибка при регистрации!');
            console.error(error);
        }
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
  