import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Comment from './views/Comment.vue';
import Test from './views/Test.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } return { x: 0, y: 0 };
  },
});
