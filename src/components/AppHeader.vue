<script setup>
import logo from '../assets/Slogo.jpg'; // Correct import of the logo

defineProps({
  tagline: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="header">
    <div class="logo-container">
      <img :src="logo" alt="Scent Vault Logo" class="logo" /> <!-- Correct binding of the imported logo -->
      <div>
        <h1 class="brand">Scent Vault</h1>
        <p class="slogan">{{ tagline }}</p>
      </div>
    </div>
    <nav class="nav">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
      <RouterLink to="/collections" class="nav-link">Collections</RouterLink>
      <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem; /* Reduced padding for a thinner header */
  background-color: #e5e5e5; /* Light beige-like background */
  color: #000; /* Black for text contrast */
  border-bottom: 2px solid #000; /* Black border resembling logo details */
  position: sticky;
  top: 0;
  z-index: 1000;
  left: 0; /* Align header to the left edge of the page */
  right: 0; /* Align header to the right edge of the page */
  width: 100%; /* Full width of the viewport */
  box-sizing: border-box; /* Includes padding and border in width calculation */
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Space between logo and text */
}

.logo {
  height: 40px; /* Adjust logo size for a thinner header */
  width: auto;
  border-radius: 4px;
}

.brand {
  font-size: 1.5rem; /* Slightly smaller font size */
  font-weight: 700;
  color: #000; /* Black text for strong branding */
  margin: 0;
}

.slogan {
  font-size: 0.9rem; /* Smaller font size for tagline */
  color: #666; /* Subtle grey for tagline */
  margin: 0;
}

.nav {
  display: flex;
  gap: 1rem; /* Reduced gap between nav links */
}

.nav-link {
  text-decoration: none;
  color: #000; /* Black for navigation links */
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #444; /* Slightly darker hover effect */
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    text-align: center;
    padding: 0.5rem; /* Adjusted padding for smaller screens */
  }

  .nav {
    margin-top: 1rem;
    gap: 0.8rem; /* Adjusted gap for smaller screens */
  }

  .logo {
    height: 30px; /* Adjust logo size for smaller screens */
  }

  .brand {
    font-size: 1.25rem; /* Adjust text size for smaller screens */
  }

  .slogan {
    font-size: 0.8rem; /* Adjust text size for smaller screens */
  }
}
</style>
