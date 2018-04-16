import Vue from 'vue';
import Router from 'vue-router';
import tabvc from '@/pages/tabvc/tabvc';
import home from '@/pages/home/home';
import category from '@/pages/category/category';
import find from '@/pages/find/find';
import shopcart from '@/pages/shopcart/shopcart';
import my from '@/pages/my/my';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'tabvc',
      component: tabvc,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/category',
          name: 'category',
          component: category
        },
        {
          path: '/find',
          name: 'find',
          component: find
        },
        {
          path: '/shopcart',
          name: 'shopcart',
          component: shopcart
        },
        {
          path: '/my',
          name: 'my',
          component: my
        }
      ]
    }
  ]
});
