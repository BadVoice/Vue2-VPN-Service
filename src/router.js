import Vue from 'vue';
import Router from 'vue-router';
import DashboardView from './views/DashboardView.vue'
import AuthLoginView from './views/AuthLoginView.vue'

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
    }
  ]
});

export default router;