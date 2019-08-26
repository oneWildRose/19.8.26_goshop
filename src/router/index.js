import Vue from 'vue';
import Router from 'vue-router';
import MSite from '@/pages/MSite.vue'
import Order from '@/pages/Order.vue'
import Profile from '@/pages/Profile.vue'
import Search from '@/pages/Search.vue'
import login from '@/pages/login.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'msite',
      meta: {
        showFooter: true
      }
    },
    { // 首页
      path: '/msite',
      name: 'MSite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    { // 搜索
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    { // 订单
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    { // 个人中心
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    { // 登陆注册
      path: '/login',
      name: 'login',
      component: login
    }
  ],
});
