<template>
  <div class="page-container">
    <div class="page-header">
      <h2>L'Écosystème des Jeux Olympiques</h2>
      <p>L'immense mécanique derrière Paris 2024</p>
    </div>
    
    <!-- Internal Navigation Menu (Pills/Tabs) -->
    <nav class="internal-nav" :class="{ sticky: isSticky }" ref="navBar">
      <ul class="nav-pills">
        <li v-for="tab in tabs" :key="tab.id">
          <a :href="'#' + tab.id" @click.prevent="scrollTo(tab.id)" :class="{ active: activeSection === tab.id }">
            {{ tab.name }}
          </a>
        </li>
      </ul>
    </nav>

    <div class="ecosystem-content">
      
      <!-- Section 1 : Gouvernance -->
      <section id="gouvernance" class="eco-section" ref="secGouvernance">
        <div class="section-title">
          <h3>Gouvernance & Mouvement</h3>
          <p>L'organisation de Paris 2024 implique une galaxie d'acteurs de tous horizons œuvrant de concert.</p>
        </div>
        <GovernanceGraph />
      </section>

      <!-- Section 2 : Sites -->
      <section id="sites" class="eco-section" ref="secSites">
        <div class="section-title">
          <h3>Sites & Infrastructures</h3>
          <p>Un modèle privilégiant la rénovation et l'utilisation de structures temporaires iconiques.</p>
        </div>
        <SitesGrid />
      </section>

      <!-- Section 3 : Budget -->
      <section id="budget" class="eco-section" ref="secBudget">
        <div class="section-title">
          <h3>Financement : Un Modèle Privé</h3>
          <p>Le budget d'organisation (COJO) est financé quasi-exclusivement par des recettes privées (Billetterie, sponsors, CIO).</p>
        </div>
        <BudgetChart />
      </section>

      <!-- Section 4 : Héritage -->
      <section id="heritage-timeline" class="eco-section" ref="secHeritage">
        <div class="section-title">
          <h3>Héritage Durable & Stratégie</h3>
          <p>La promesse des Jeux : accélérer la transformation écologique et sociale du territoire.</p>
        </div>
        <LegacyTimeline />
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GovernanceGraph from '../components/ecosystem/GovernanceGraph.vue'
import SitesGrid from '../components/ecosystem/SitesGrid.vue'
import BudgetChart from '../components/ecosystem/BudgetChart.vue'
import LegacyTimeline from '../components/ecosystem/LegacyTimeline.vue'

const isSticky = ref(false)
const activeSection = ref('gouvernance')

const tabs = [
  { id: 'gouvernance', name: 'Gouvernance' },
  { id: 'sites', name: 'Sites Olympiques' },
  { id: 'budget', name: 'Budget' },
  { id: 'heritage-timeline', name: 'Héritage & Impact' }
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 140 
    const bodyRect = document.body.getBoundingClientRect().top
    const elRect = el.getBoundingClientRect().top
    const elPosition = elRect - bodyRect
    const offsetPosition = elPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  const nav = document.querySelector('.internal-nav')
  if (nav) {
    isSticky.value = window.scrollY > 300 
  }

  const sections = ['gouvernance', 'sites', 'budget', 'heritage-timeline']
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 300 && rect.bottom >= 300) {
        activeSection.value = id
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.page-container {
  padding-top: 70px;
  min-height: 100vh;
  background-color: var(--jo-white);
}

.page-header {
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--jo-black);
  color: var(--jo-gold);
}

.page-header h2 {
  font-size: 3rem;
  margin: 0 0 1rem 0;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.internal-nav {
  background: var(--jo-white);
  padding: 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 4px 10px rgba(0,0,0,0.02);
  z-index: 900;
  transition: all 0.3s ease;
}

.internal-nav.sticky {
  position: sticky;
  top: 70px;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
}

.nav-pills {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

.nav-pills a {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  color: var(--jo-black);
  font-weight: bold;
  font-family: var(--font-heading);
  text-transform: uppercase;
  font-size: 0.85rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  text-decoration: none;
}

.nav-pills a:hover {
  background: #f4f6f8;
}

.nav-pills a.active {
  background: var(--jo-black);
  color: var(--jo-gold);
  border-color: var(--jo-gold);
  box-shadow: 0 4px 10px rgba(214, 194, 122, 0.4);
}

.ecosystem-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
}

.eco-section {
  padding: 5rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.eco-section:last-child {
  border-bottom: none;
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title h3 {
  font-size: 2.2rem;
  color: var(--jo-black);
  display: inline-block;
  position: relative;
  margin-bottom: 1rem;
}

.section-title h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 4px;
  background: var(--jo-gold);
  border-radius: 2px;
}

.section-title p {
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .nav-pills { gap: 0.5rem; }
  .nav-pills a { padding: 0.5rem 1rem; font-size: 0.75rem; }
  .page-header h2 { font-size: 2rem; }
  .eco-section { padding: 3rem 0; }
  .internal-nav.sticky { top: 120px; }
}
</style>