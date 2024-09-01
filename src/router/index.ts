import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/HomePage.vue';
import Convert from '../views/ConvertPage.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/convert', component: Convert }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
