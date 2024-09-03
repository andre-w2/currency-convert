import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ConvertPage from '@/pages/ConvertPage.vue';
import HomePage from '@/pages/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomePage },
  { path: '/convert', component: ConvertPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
