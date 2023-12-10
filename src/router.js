import Vue from 'vue';
import Router from 'vue-router';
import ProfileView from './views/ProfileView.vue'
import LoginView from './views/LoginWiev.vue'
import SuccessView from './views/SuccessWiew.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView   
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/success',
      name: 'successView',
      component: SuccessView
    },
  ]
});


export default router;