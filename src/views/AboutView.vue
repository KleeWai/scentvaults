<template>
  <div class="about">
    <section class="about-content">
      <h1>About Scent Vault</h1>
      <p>
        At <strong>Scent Vault</strong>, we are a team of passionate fragrance enthusiasts with a vision to redefine the world of colognes and scents. 
        What started as a shared passion during our days at the University of California, Riverside has now blossomed into a mission to innovate, create, and inspire.
      </p>
      <p>
        From crafting custom-made layering scents to sourcing the finest designer colognes, 
        we blend art, science, and technology to deliver a unique fragrance experience for everyone.
      </p>
      <h2>Meet the Founders</h2>
      <p>Behind Scent Vault are three dedicated individuals, each bringing their unique expertise to the table:</p>
      <ul>
        <li>
          <strong>Ram:</strong> The tech guru and mastermind behind our website and online presence. 
          Ram ensures that our digital storefront is as seamless and elegant as our fragrances.
        </li>
        <li>
          <strong>Aaron:</strong> The chemist and business strategist, Aaron combines his knowledge of chemistry 
          with sharp business acumen to develop innovative blends and steer the company forward.
        </li>
        <li>
          <strong>Trung:</strong> The fragrance expert and cologne connoisseur. Trung’s extensive knowledge and passion 
          for scents ensure that every fragrance we offer is curated to perfection.
        </li>
      </ul>
      <p>
        Together, we are united by a single goal: to bring you the best in fragrances, from luxurious designer colognes to custom layering scents that make a statement.
      </p>
    </section>
  </div>
</template>

<style scoped>
.about {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  padding: 2rem;
  text-align: center;
  line-height: 1.8;
  width: 100%; /* Full width */
  box-sizing: border-box; /* Include padding in width */
}

.about-content {
  max-width: 1200px; /* Same max-width as the HomeView */
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #000;
}

h2 {
  font-size: 1.75rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #444;
}

p {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #555;
}

ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

li {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #444;
}

li strong {
  color: #000;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

