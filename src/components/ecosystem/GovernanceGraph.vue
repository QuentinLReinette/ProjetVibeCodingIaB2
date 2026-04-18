<template>
  <div class="governance-section">
    <div class="graph-wrapper">
      <!-- Background lines (SVG) -->
      <svg class="graph-lines" preserveAspectRatio="none" viewBox="0 0 100 100">
        <!-- Connecting CIO to COJO -->
        <line x1="50" y1="15" x2="50" y2="45" />
        <polygon points="48,42 50,45 52,42" fill="var(--line-color)" />
        
        <!-- Connecting CNOSF to COJO -->
        <line x1="20" y1="50" x2="45" y2="50" />
        
        <!-- Connecting CPSF to COJO -->
        <line x1="80" y1="50" x2="55" y2="50" />
        
        <!-- Connecting Institutions to COJO -->
        <line x1="30" y1="85" x2="45" y2="55" />
        
        <!-- Connecting Privés to COJO -->
        <line x1="70" y1="85" x2="55" y2="55" />
        <polygon points="53,58 55,55 57,59" fill="var(--line-color)" />
      </svg>

      <div class="node-row top-row">
        <button class="node satellite" @click="select('CIO')" :class="{ active: selectedNode === 'CIO' }">
          <span class="icon">🏛️</span> CIO
        </button>
      </div>
      
      <div class="node-row mid-row">
        <button class="node satellite" @click="select('CNOSF')" :class="{ active: selectedNode === 'CNOSF' }">
          <span class="icon">🇫🇷</span> CNOSF
        </button>
        <button class="node main-node pulse" @click="select('COJO')" :class="{ active: selectedNode === 'COJO' }">
          COJO<br><small>Paris 2024</small>
        </button>
        <button class="node satellite" @click="select('CPSF')" :class="{ active: selectedNode === 'CPSF' }">
          <span class="icon">♿</span> CPSF
        </button>
      </div>

      <div class="node-row bot-row">
        <button class="node satellite" @click="select('Institutions')" :class="{ active: selectedNode === 'Institutions' }">
          <span class="icon">🏢</span> État & Ville
        </button>
        <button class="node satellite" @click="select('Privés')" :class="{ active: selectedNode === 'Privés' }">
          <span class="icon">💼</span> Partenaires Privés
        </button>
      </div>
    </div>

    <!-- Details Box / Modal style -->
    <transition name="slide-up">
      <div v-if="details" class="details-panel" :style="{ borderColor: details.color }">
        <button class="close-btn" @click="selectedNode = null">×</button>
        <h4 :style="{ color: details.color }">{{ details.title }}</h4>
        <p>{{ details.desc }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedNode = ref(null)

const dataMap = {
  'CIO': { title: 'Comité International Olympique', desc: 'Propriétaire des Jeux, supervise l\'ensemble de l\'organisation et apporte une contribution financière majeure.', color: 'var(--jo-gold)' },
  'COJO': { title: 'COJO Paris 2024', desc: 'Le centre névralgique : planifie, finance et livre les Jeux Olympiques et Paralympiques.', color: 'var(--jo-black)' },
  'CNOSF': { title: 'CNOSF', desc: 'Comité National Olympique et Sportif Français. Représente le mouvement sportif français.', color: 'var(--jo-mint)' },
  'CPSF': { title: 'CPSF', desc: 'Comité Paralympique et Sportif Français. Promeut le handisport et participe à l\'organisation des Jeux Paralympiques.', color: 'var(--jo-purple)' },
  'Institutions': { title: 'Partenaires Institutionnels', desc: 'L\'État, la Ville de Paris et la Région Île-de-France. Assurent les infrastructures pérennes via la SOLIDEO et la sécurité (Gouvernance publique).', color: '#3498db' },
  'Privés': { title: 'Partenaires Privés', desc: 'Sponsors (EDF, LVMH, BPCE, etc.) qui apportent recettes, expertises et participent à la livraison de l\'événement.', color: 'var(--jo-pink)' }
}

const details = computed(() => selectedNode.value ? dataMap[selectedNode.value] : null)

const select = (id) => {
  selectedNode.value = id === selectedNode.value ? null : id
}
</script>

<style scoped>
.governance-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  --line-color: #cbd5e1;
}

.graph-wrapper {
  position: relative;
  width: 100%;
  max-width: 700px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
}

.graph-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.graph-lines line {
  stroke: var(--line-color);
  stroke-width: 0.5;
  stroke-dasharray: 2;
  animation: dash 20s linear infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: -100;
  }
}

.node-row {
  display: flex;
  justify-content: center;
  width: 100%;
}

.mid-row {
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
}

.bot-row {
  justify-content: space-around;
  padding: 0 15%;
}

.node {
  background: var(--jo-white);
  border: 2px solid var(--line-color);
  border-radius: var(--jo-border-radius);
  padding: 1rem;
  font-family: var(--font-heading);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}

.node:hover, .node.active {
  transform: translateY(-5px);
  border-color: var(--jo-gold);
  box-shadow: 0 8px 15px rgba(214, 194, 122, 0.3);
}

.satellite {
  width: 130px;
  font-size: 0.85rem;
}
.satellite .icon {
  font-size: 1.5rem;
}

.main-node {
  background: var(--jo-black);
  color: var(--jo-gold);
  border-color: var(--jo-gold);
  width: 160px;
  height: 160px;
  border-radius: 50%;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 0 20px rgba(214, 194, 122, 0.4);
}

.pulse {
  animation: pulse-ring 3s infinite;
}

@keyframes pulse-ring {
  0% { box-shadow: 0 0 0 0 rgba(214, 194, 122, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(214, 194, 122, 0); }
  100% { box-shadow: 0 0 0 0 rgba(214, 194, 122, 0); }
}

.details-panel {
  margin-top: 2rem;
  background: var(--jo-white);
  padding: 1.5rem 2.5rem;
  border-radius: var(--jo-border-radius);
  border-left: 5px solid;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px;
  position: relative;
}

.details-panel h4 {
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 768px) {
  .graph-wrapper {
    min-height: 500px;
  }
  .mid-row {
    padding: 0;
    gap: 0.5rem;
  }
  .bot-row {
    padding: 0;
    gap: 0.5rem;
  }
  .satellite { width: 100px; font-size: 0.75rem; padding: 0.5rem;}
  .main-node { width: 120px; height: 120px; font-size: 1.2rem;}
}
</style>
