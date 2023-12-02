<template>
  <div>
    <h2>User Profile</h2>
    <p>name: {{ userFirstName }}</p>
    <p>subname: {{ userLastName }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
  mounted() {
    this.$store.dispatch('authModule/userProfile');
  }
}
</script>