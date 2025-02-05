<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <!-- Use the AppHeader component -->
  <AppHeader tagline="Discover the Essence of Luxury" />

  <!-- Main content area with RouterView -->
  <RouterView />
</template>

<style>
/* Global styles to ensure the header sticks to the top */
body, html {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>