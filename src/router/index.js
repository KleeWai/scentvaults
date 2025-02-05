import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CollectionsView from '../views/CollectionsView.vue';
import AboutView from '../views/AboutView.vue'; // Import the AboutView component

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
      component: CollectionsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView, // Register the AboutView
    },
  ],
});

export default router;
