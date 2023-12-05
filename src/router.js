import Vue from 'vue';
import Router from 'vue-router';
import ProfileView from './views/ProfileView.vue'
import LoginView from './views/LoginWiev.vue'
import Home from './App.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/userProfile',
      name: 'userProfile',
      component: ProfileView
    },
    {
      path: '/loginPage',
      name: 'login',
      component: LoginView
    }
  ]
});

export default router;