import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import PostPage from '../pages/PostPage.vue';
import PostIdPage from '../pages/PostIdPage.vue';
import About from '../pages/About.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/posts/:id',
    component: PostIdPage,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
