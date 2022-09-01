import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/PublicLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/HomePage.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/pages/AboutPage.vue'),
        },
      ],
    },
  ],
});

export default router;
