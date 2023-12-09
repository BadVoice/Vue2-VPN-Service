import Vue from 'vue';
import Router from 'vue-router';
import ProfileView from './views/ProfileView.vue'
import LoginView from './views/LoginWiev.vue'

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
    }
  ]
});


export default router;