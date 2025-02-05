<template>
    <div class="collections">
      <h1 class="title">Our Collections</h1>
      <div class="grid">
        <div
          v-for="(cologne, index) in colognes"
          :key="index"
          class="card"
        >
          <h2 class="name">{{ cologne.name }}</h2>
          <p class="brand">Brand: {{ cologne.brand }}</p>
          <p class="retail">Retail Price: ${{ cologne.retail }}</p>
          <p class="discount">Discounted Price: ${{ cologne.discounted }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const colognes = [
  { name: "Wish You Were Here", brand: "Mémoire Archives", retail: 50, discounted: 25 },
    { name: "Legend Red", brand: "Montblac", retail: 60, discounted: 60 },
    { name: "Sugarful Sunshine", brand: "Michel Germain", retail: 51.95, discounted: 51.95 },
    { name: "Light Blue Pour Homme", brand: "Dolce & Gabbana", retail: 107, discounted: 49 },
    { name: "Voyage", brand: "Nautica", retail: 25, discounted: 23 },
    { name: "Maritime EDC", brand: "Tommy Bahama", retail: 84, discounted: 21 },
    { name: "Victory League", brand: "Adidas", retail: 11, discounted: 8 },
    { name: "Pure Game", brand: "Adidas", retail: 11, discounted: 8 },
    { name: "Le Male Le Parfum", brand: "JPG", retail: 125, discounted: 80.99 },
    { name: "Sauvage EDP (200mL)", brand: "Dior", retail: 215, discounted: 215 },
    { name: "Prada L'Homme", brand: "Prada", retail: 120, discounted: 101 },
    { name: "Bright Peach", brand: "Masion Alhambra", retail: 45, discounted: 28.77 },
    { name: "Nebula", brand: "Star Man", retail: 27, discounted: 25.85 },
    { name: "Luna Rossa Black", brand: "Prada", retail: 140, discounted: 130 },
    { name: "Bentley for Men Intense", brand: "Bentley", retail: 90, discounted: 26.08 },
    { name: "La Nuit de L'Homme Bleu Électrique", brand: "YSL", retail: 76, discounted: 64.6 },
    { name: "Luna Rossa Ocean EDP", brand: "Prada", retail: 140, discounted: 118.29 },
    { name: "1 Million", brand: "Paco Rabanne", retail: 140, discounted: 103 },
    { name: "Drakkar Noir", brand: "Guy Laroche", retail: 55, discounted: 19.59 },
    { name: "Burberry Her Elixir de Parfum", brand: "Burberry", retail: 180, discounted: 114 },
    { name: "Pegasus Exclusif", brand: "PDM", retail: 430, discounted: 369.59 },
    { name: "Althaïr", brand: "PDM", retail: 365, discounted: 315 },
    { name: "Sauvage Elixir", brand: "Dior", retail: 250, discounted: 149 },
    { name: "BR540 Oil", brand: "MFK", retail: 325, discounted: 325 },
    { name: "Ralph's Club Parfum", brand: "Ralph Lauren", retail: 105, discounted: 38.49 },
    { name: "Legend", brand: "Montblac", retail: 60, discounted: 30 },
  { name: "Black Opium Illicit Green", brand: "YSL", retail: 95, discounted: 80.75 },
  { name: "Nerolli Portifino", brand: "Tom Ford", retail: 295, discounted: 192 },
  { name: "Le Male Elixir", brand: "JPG", retail: 145, discounted: 107.23 },
  { name: "Oud Satin Mood", brand: "MFK", retail: 310, discounted: 310 },
  { name: "Black Phantom 'Memento Mori'", brand: "By Killian", retail: 295, discounted: 190 },
  { name: "Pearl Oud", brand: "By Killian", retail: 460, discounted: 230 },
  { name: "Straight to Heaven", brand: "By Killian", retail: 295, discounted: 184 },
  { name: "Tiffany & Love for Her", brand: "Tiffany", retail: 168, discounted: 128.79 },
  { name: "Purple Label", brand: "Ralph Lauren", retail: 130, discounted: 82.95 },
  { name: "Paradise Garden", brand: "JPG", retail: 145, discounted: 108 },
  { name: "Stronger With You, Intensely", brand: "Emperio Armani", retail: 110, discounted: 93.50 },
  { name: "Hypnotic Poison", brand: "Dior", retail: 145, discounted: 117.64 },
  { name: "Eternal Oud", brand: "Lattafa", retail: 60, discounted: 31 },
  { name: "Black Opium EDP", brand: "YSL", retail: 160, discounted: 110 },
  { name: "MCM EDP", brand: "MCM", retail: 110, discounted: 50 },
  { name: "MCM Crush", brand: "MCM", retail: 110, discounted: 110 },
  { name: "Interlude Black Iris", brand: "Amouage", retail: 380, discounted: 192 },
  { name: "Psychedelic Love", brand: "Initio", retail: 380, discounted: 260 },
  { name: "Oud Silk Mood Extrait de parfum", brand: "MFK", retail: 445, discounted: 325 },
  { name: "Blockade", brand: "Mind Games", retail: 375, discounted: 346 },
  { name: "Blanche", brand: "Byredo", retail: 320, discounted: 228 },
  { name: "Polo Red Parfum", brand: "Ralph Lauren", retail: 140, discounted: 71 },
  { name: "Noir Extreme", brand: "Tom Ford", retail: 240, discounted: 168 },
  { name: "Layton", brand: "PDM", retail: 365, discounted: 286 },
  { name: "Aqua Media cologne forte", brand: "MFK", retail: 245, discounted: 253 },
  { name: "Animalique", brand: "Byredo", retail: 320, discounted: null },
  { name: "Queen of Silk", brand: "Creed", retail: 445, discounted: 308 },
  { name: "Narcotic Delights", brand: "Initio", retail: 380, discounted: 305 },
  { name: "Tobacco Vanille EDP", brand: "Tom Ford", retail: 225, discounted: 173 },
  { name: "Hero Parfum", brand: "Burberry", retail: 153, discounted: 109 },
  { name: "Allure Homme Sport Eau Extreme", brand: "Chanel", retail: 157, discounted: null },
  { name: "XX Artisan Teal", brand: "John Varvatos", retail: 115, discounted: 57 },
  { name: "New York Nights", brand: "Bond No 9", retail: 460, discounted: null },
  { name: "Opus V - Woods Symphony", brand: "Amouage", retail: 380, discounted: 182 },
  { name: "Rose of No Man's Land", brand: "Byredo", retail: 320, discounted: 220 },
  { name: "Absolute Aphrodisiac", brand: "Initio", retail: 365, discounted: 280 },
  { name: "Oud For Happiness", brand: "Initio", retail: 430, discounted: 260 },
  { name: "Elysium Pour Femme", brand: "Roja Dove", retail: 315, discounted: 182 },
  { name: "Amber Aoud", brand: "Roja Dove", retail: 765, discounted: 409 },
  { name: "Sweetie Aoud", brand: "Roja Dove", retail: 380, discounted: 330 },
  { name: "Elixir Pour Femme Essence De Parfum", brand: "Roja Dove", retail: 315, discounted: 250 },
  { name: "Herod", brand: "PDM", retail: 365, discounted: 270 },
  { name: "Grand Soir", brand: "MFK", retail: 245, discounted: 317 },

  ];
  </script>
  
  <style scoped>
  .collections {
    background-color: #f9f9f9; /* Background color for the full section */
    padding: 2rem;
    width: 100%; /* Ensure full width */
    box-sizing: border-box;
  }
  
  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  .grid {
    max-width: 1200px; /* Center the grid and restrict its width */
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .card {
    background-color: #e0f7fa; /* Card background color */
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .card h2 {
    font-size: 1.25rem;
    color: #000;
    margin-bottom: 0.5rem;
  }
  
  .card p {
    margin: 0.5rem 0;
    color: #555;
  }
  
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  </style>
  