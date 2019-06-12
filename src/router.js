import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Comments from './views/Comments.vue';
import Comment from './views/Comment.vue';

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
      path: '/comments',
      name: 'comments',
      component: Comments,
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
