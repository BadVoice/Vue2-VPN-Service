<template>
    <div>
      <div v-if="userProfile">
            <h1>USER PROFILE</h1>
        <h3>name: {{ userProfile.profile.firstName }}</h3> <br>
        <h3>subname: {{ userProfile.profile.lastName }}</h3> <br>
      </div>
      <div v-else>Loading profile...</div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('userModule', {
        userProfile: 'userProfile'
      })
    },
    methods: {
      ...mapActions('userModule', [
        'GET_USER_PROFILE_BY_ID' 
      ]),
      async fetchUserProfile(userId) {
        await this.GET_USER_PROFILE_BY_ID(userId);
      }
    },
    async created() {
      await this.fetchUserProfile("2e9f873f-fb3c-4b7e-901a-a6ae0cfdf779");   // делаем логику по перехвату id пользователя
    }
  };
  </script>