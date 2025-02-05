<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to Scent Vault</h1>
        <p class="hero-subtitle">
          Discover the art of layering scents and indulge in luxury designer colognes at unbeatable prices.
        </p>
      </div>
    </section>

    <!-- Section 1: Top-Tier Designer Colognes -->
    <section class="designer-colognes">
      <div class="content">
        <h2>Top-Tier Designer Colognes</h2>
        <p>
          Indulge in luxury without breaking the bank. At Scent Vault, we bring you top-tier designer colognes at half the retail price or even greater discounts. Elevate your collection with timeless scents from the world’s most iconic brands.
        </p>
        <p>
          Why choose Scent Vault for designer colognes?
        </p>
        <ul>
          <li>Unmatched discounts</li>
          <li>Authentic products</li>
          <li>Curated selection of premium brands</li>
        </ul>
      </div>
      <div class="images">
        <img :src="designerImage1" alt="Designer Cologne">
        <img :src="designerImage2" alt="Luxury Cologne Bottles">
      </div>
    </section>

    <!-- Section 2: Custom Handmade Layering Scents -->
    <section class="layering-scents">
      <div class="content">
        <h2>Custom Handmade Layering Scents</h2>
        <p>
          Unleash your creativity with our custom handmade layering scents. Mix and match unique fragrances to craft a scent that's truly your own. Layering scents allows you to create a personalized aroma that evolves with you throughout the day, ensuring a signature fragrance that stands out.
        </p>
        <p>
          Benefits of layering scents:
        </p>
        <ul>
          <li>Enhance fragrance longevity</li>
          <li>Create unique and personal combinations</li>
          <li>Adapt scents to different occasions</li>
        </ul>
      </div>
      <div class="images">
        <img :src="layeringImage1" alt="Handmade Layering Scents">
        <img :src="layeringImage2" alt="Layering Scents Bottles">
      </div>
    </section>
  </div>
</template>

<script setup>
import layeringImage1 from '../assets/layeringAI1.jpg';
import layeringImage2 from '../assets/layeringAI2.jpg';
import designerImage1 from '../assets/cologneAI1.jpg';
import designerImage2 from '../assets/cologneAI2.jpg';
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  padding: 2rem;
}

.hero {
  background-color: #e5e5e5;
  text-align: center;
  padding: 3rem 1rem;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #666;
}

section {
  margin-bottom: 3rem;
}

.content {
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 2rem;
  color: #000;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

ul {
  list-style: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.images {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.images img {
  max-width: 50%; /* Reduce image size to 50% of the parent container */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .images {
    flex-direction: column;
  }

  .images img {
    max-width: 80%; /* Make images smaller on smaller screens */
  }
}
</style>
