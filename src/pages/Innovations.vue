<template>
  <div class="page-container">
    <!-- Header -->
    <div class="header-section">
      <h2>Section 4 : Innovations Technologiques</h2>
      <p>Explorez les avancées majeures et leurs scénarios d'impact pour les Jeux de Paris 2024.</p>
    </div>

    <!-- Barre de Filtres -->
    <div class="filters-container">
      <div class="filter-pills">
        <button 
          v-for="cat in categories" 
          :key="cat" 
          @click="activeCategory = cat"
          :class="['filter-btn', { active: activeCategory === cat }]"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Grille des Innovations -->
    <transition-group name="list" tag="div" class="grid-container">
      <div 
        v-for="innovation in filteredInnovations" 
        :key="innovation.id" 
        class="card"
      >
        <div class="card-header">
          <h3>{{ innovation.title }}</h3>
          <span class="tag">{{ innovation.category }}</span>
        </div>
        <p class="desc">{{ innovation.description }}</p>
        
        <!-- Radar Chart d'Impact -->
        <div class="chart-wrapper">
          <RadarChart 
            :efficacite="innovation.impact.efficacite"
            :acceptabilite="innovation.impact.acceptabilite"
            :perennite="innovation.impact.perennite"
            :color="getCategoryColor(innovation.category)"
          />
        </div>

        <!-- Accordéon des Scénarios -->
        <ScenarioAccordion :scenarios="innovation.scenarios" />
      </div>
    </transition-group>

    <!-- Synthèse & Recommandations -->
    <div class="synthesis-section">
      <div class="synthesis-content">
        <h3>Synthèse & Recommandations Clés</h3>
        <p class="subtitle">Pour maximiser l'héritage technologique tout en minimisant les risques, 3 actions s'imposent :</p>
        <div class="reco-grid">
          <div class="reco-item">
            <div class="reco-number">1</div>
            <h4>Gouvernance & Transparence</h4>
            <p>Mettre en place des chartes claires sur l'utilisation des données (notamment biométriques) et des audits publics réguliers pour garantir l'acceptabilité sociale.</p>
          </div>
          <div class="reco-item">
            <div class="reco-number">2</div>
            <h4>Inclusion Numérique</h4>
            <p>Déployer des plans de transition hybrides maintenant des alternatives physiques (billets, infos) pour éviter de creuser la fracture numérique.</p>
          </div>
          <div class="reco-item">
            <div class="reco-number">3</div>
            <h4>Cadres Juridiques & Standards</h4>
            <p>Établir des protocoles éthiques stricts pour l'Intelligence Artificielle et la sécurisation des infrastructures connectées face aux cybermenaces.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { categories, innovationsData } from '../data/innovationsData';
import RadarChart from '../components/innovations/RadarChart.vue';
import ScenarioAccordion from '../components/innovations/ScenarioAccordion.vue';

const activeCategory = ref('Tous');

const filteredInnovations = computed(() => {
  if (activeCategory.value === 'Tous') return innovationsData;
  return innovationsData.filter(item => item.category === activeCategory.value);
});

const getCategoryColor = (cat) => {
  const colors = {
    "Sport": "#D6C27A", // Or
    "Sécurité": "#2c3e50", // Noir nuancé
    "Spectateurs": "#8e44ad", // Violet
    "Médias / diffusion": "#e74c3c", // Rouge
    "Durabilité": "#1abc9c" // Vert Menthe
  };
  return colors[cat] || "#000000";
};
</script>

<style scoped>
.page-container {
  padding-top: 70px;
  min-height: 100vh;
  background-color: #f7f9fa;
  font-family: var(--font-body);
}

.header-section {
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--jo-black);
  color: var(--jo-gold);
}

.header-section h2 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  font-family: var(--font-heading);
}

.header-section p {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Filtres */
.filters-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: var(--jo-white);
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  position: sticky;
  top: 70px;
  z-index: 100;
}

.filter-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.filter-btn {
  background: #f0f0f0;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-family: var(--font-heading);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: var(--jo-black);
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: #e0e0e0;
}

.filter-btn.active {
  background: var(--jo-gold);
  color: var(--jo-black);
  box-shadow: 0 4px 10px rgba(214, 194, 122, 0.4);
}

/* Grille */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.card {
  background: var(--jo-white);
  border-radius: var(--jo-border-radius);
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  border-top: 4px solid var(--jo-gold);
}

.card:hover {
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.card h3 {
  font-size: 1.3rem;
  color: var(--jo-black);
  margin: 0;
  line-height: 1.3;
}

.tag {
  background: var(--jo-black);
  color: var(--jo-gold);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
}

.desc {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.chart-wrapper {
  margin-bottom: 1.5rem;
  background: #fafafa;
  border-radius: var(--jo-border-radius);
  padding: 1rem;
  border: 1px solid #f0f0f0;
}

/* Animation de la grille */
.list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}
.list-leave-active {
  position: absolute;
}

/* Synthèse */
.synthesis-section {
  background: var(--jo-black);
  color: var(--jo-white);
  padding: 5rem 2rem;
  margin-top: 2rem;
}

.synthesis-content {
  max-width: 1200px;
  margin: 0 auto;
}

.synthesis-content h3 {
  font-size: 2.2rem;
  color: var(--jo-gold);
  margin-bottom: 0.5rem;
  text-align: center;
}

.subtitle {
  text-align: center;
  font-size: 1.1rem;
  opacity: 0.85;
  margin-bottom: 4rem;
}

.reco-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.reco-item {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(214, 194, 122, 0.2);
  border-radius: var(--jo-border-radius);
  padding: 2.5rem;
  position: relative;
  transition: transform 0.3s ease, background 0.3s ease;
}

.reco-item:hover {
  transform: translateY(-5px);
  background: rgba(214, 194, 122, 0.1);
  border-color: var(--jo-gold);
}

.reco-number {
  position: absolute;
  top: -20px;
  left: 2.5rem;
  width: 40px;
  height: 40px;
  background: var(--jo-gold);
  color: var(--jo-black);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: var(--font-heading);
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
}

.reco-item h4 {
  color: var(--jo-white);
  font-size: 1.3rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.reco-item p {
  line-height: 1.6;
  opacity: 0.8;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .page-container {
    padding-top: 120px;
  }
  .filters-container {
    top: 120px;
    padding: 1rem;
  }
  .filter-pills {
    gap: 0.5rem;
  }
  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
  .reco-item {
    margin-top: 1.5rem;
  }
  .reco-number {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
