import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CollectionsView from '../views/CollectionsView.vue'; // Import the CollectionsView component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/collections',
      name: 'collections',
      component: CollectionsView, // Register the CollectionsView
    },
  ],
});

export default router;
