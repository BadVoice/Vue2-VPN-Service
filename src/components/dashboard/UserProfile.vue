<template>
  <div>
    <PaymentVpn />
    <h2>User Profile</h2>
    <p>Имя: {{ userFirstName }}</p>
    <p>Фамилия: {{ userLastName }}</p>
    <br>
    <h2>Редактировать профиль пользователя</h2>
    <div>
      <label for="firstName">Имя:</label>
      <input id="firstName" v-model="newFirstName" />
    </div>
    <div>
      <label for="lastName">Фамилия:</label>
      <input id="lastName" v-model="newLastName" />
    </div>
    <button @click="updateProfile">Сохранить</button>
  </div>

 
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PaymentVpn from '../vpn/PaymentVpn'

export default {
  components: {
    PaymentVpn
  },
  data() {
    return {
      newFirstName: '',
      newLastName: ''
    };
  },
  computed: {
    ...mapGetters('authModule', [
      'userProfile'
    ]),
    userFirstName() {
      return this.userProfile ? this.userProfile.firstName : null; 
    },
    userLastName() {
      return this.userProfile ? this.userProfile.lastName : null;
    }
  },
  methods: {
    ...mapActions('authModule', [
      'updateUserProfile',
    ]),
    async updateProfile() {
      const newProfileData = {
        firstName: this.newFirstName || this.userFirstName,
        lastName: this.newLastName || this.userLastName,
      };
      await this.updateUserProfile(newProfileData);
        this.newFirstName = this.userFirstName;
        this.newLastName = this.userLastName;
      }
  },
  mounted() {
    this.$store.dispatch('authModule/userProfile');
    this.newFirstName = this.userFirstName;
    this.newLastName = this.userLastName;
  }
}
</script>
