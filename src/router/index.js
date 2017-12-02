import Vue from 'vue';
import Router from 'vue-router';
import tabvc from '@/pages/tabvc/tabvc';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabvc',
      component: tabvc
    }
  ]
});
