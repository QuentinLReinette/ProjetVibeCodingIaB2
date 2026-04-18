<template>
  <div class="sites-section">
    <div class="highlight-header">
      <div class="circular-progress">
        <svg viewBox="0 0 100 100">
          <path class="circle-bg" d="M18 50 a 32 32 0 1 1 64 0 a 32 32 0 1 1 -64 0" />
          <path class="circle-fill" stroke-dasharray="200" stroke-dashoffset="10" d="M18 50 a 32 32 0 1 1 64 0 a 32 32 0 1 1 -64 0" />
        </svg>
        <div class="percentage">95<span>%</span></div>
      </div>
      <div class="highlight-text">
        <h3>Des Sites Déjà Existants ou Temporaires</h3>
        <p>Paris 2024 s'appuie massivement sur des infrastructures déjà bâties, limitant l'impact carbone et les investissements lourds de construction.</p>
      </div>
    </div>

    <div class="sites-grid">
      <div v-for="site in sites" :key="site.name" class="flip-card">
        <div class="flip-card-inner">
          <!-- Front Side -->
          <div class="flip-card-front" :style="{ borderColor: site.color }">
            <div class="icon" :style="{ color: site.color }">{{ site.icon }}</div>
            <h4>{{ site.name }}</h4>
            <span class="tag" :style="{ backgroundColor: site.color }">{{ site.type }}</span>
          </div>
          <!-- Back Side -->
          <div class="flip-card-back" :style="{ backgroundColor: site.color, color: site.textColor }">
            <h4>Fonction :</h4>
            <p>{{ site.function }}</p>
            <div class="divider"></div>
            <h4>Particularité :</h4>
            <p>{{ site.details }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sites = ref([
  {
    name: 'Stade de France',
    icon: '🏟️',
    type: 'Existant',
    function: 'Athlétisme & Rugby à 7',
    details: 'Rénovation mineure pour l\'accueil des compétitions, sans nouvelle construction massive.',
    color: 'var(--jo-gold)',
    textColor: 'var(--jo-black)'
  },
  {
    name: 'La Seine',
    icon: '🌊',
    type: 'Naturel / Existant',
    function: 'Cérémonie d\'ouverture & Natation marathon',
    details: 'Cérémonie inédite hors stade et baignabilité historique grâce au projet de dépollution.',
    color: 'var(--jo-mint)',
    textColor: 'var(--jo-black)'
  },
  {
    name: 'Accor Arena (Bercy)',
    icon: '🏢',
    type: 'Existant',
    function: 'Basket-ball, Gymnastique',
    details: 'Infrastructures modernisées, bénéficiant d\'une desserte en transports optimale.',
    color: 'var(--jo-pink)',
    textColor: 'var(--jo-black)'
  },
  {
    name: 'Village Olympique',
    icon: '🏘️',
    type: 'Nouveau / Pérenne',
    function: 'Hébergement des 14 000 Athlètes',
    details: 'Conçu comme un éco-quartier qui deviendra un quartier mixte de plus de 2800 logements en 2025.',
    color: 'var(--jo-purple)',
    textColor: 'var(--jo-black)'
  }
])
</script>

<style scoped>
.sites-section {
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.highlight-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background: #fdfdfd;
  padding: 2.5rem;
  border-radius: var(--jo-border-radius);
  box-shadow: 0 5px 20px rgba(0,0,0,0.03);
}

.circular-progress {
  position: relative;
  width: 150px;
  height: 150px;
}

.circular-progress svg {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 6;
}

.circle-fill {
  fill: none;
  stroke: var(--jo-gold);
  stroke-width: 6;
  stroke-linecap: round;
  transition: stroke-dashoffset 2s ease-out;
}

.percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-heading);
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--jo-black);
}
.percentage span {
  font-size: 1.5rem;
}

.highlight-text {
  max-width: 600px;
}

.highlight-text h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--jo-black);
}

.highlight-text p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

/* Grille et Flip Cards */
.sites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.flip-card {
  background-color: transparent;
  height: 320px;
  perspective: 1000px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: var(--jo-border-radius);
  backface-visibility: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 15px rgba(0,0,0,0.06);
}

.flip-card-front {
  background-color: var(--jo-white);
  border-top: 6px solid;
}

.flip-card-front .icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.flip-card-front h4 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--jo-black);
}

.tag {
  color: var(--jo-black);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  font-family: var(--font-heading);
}

.flip-card-back {
  transform: rotateY(180deg);
  text-align: left;
  align-items: flex-start;
}

.flip-card-back h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.flip-card-back p {
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.5;
}

.divider {
  width: 100%;
  height: 1px;
  background: rgba(0,0,0,0.1);
  margin: 1.5rem 0;
}

@media (max-width: 900px) {
  .highlight-header {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
}
</style>
