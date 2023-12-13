import Vue from 'vue';
import Router from 'vue-router';
import DashboardView from './views/DashboardView.vue'
import AuthLoginView from './views/AuthLoginView.vue'
import AuthRegisterView from './views/AuthRegisterView.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: DashboardView   
    },
    {
      path: '/login',
      name: 'login',
      component: AuthLoginView
    },
    {
      path: '/register',
      name: 'register',
      component: AuthRegisterView
    }
  ]
});

export default router;