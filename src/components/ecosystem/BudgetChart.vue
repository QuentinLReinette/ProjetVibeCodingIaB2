<template>
  <div class="budget-section">
    <div class="chart-container">
      <div class="svg-wrapper">
        <svg viewBox="0 0 42 42" class="donut">
          <circle class="donut-ring" cx="21" cy="21" r="15.915" fill="transparent" stroke="#f0f0f0" stroke-width="6"></circle>
          
          <!-- Segments -->
          <!-- Ticket: 33.2% -->
          <circle class="donut-segment" cx="21" cy="21" r="15.915" fill="transparent" stroke-width="6" 
            stroke="var(--jo-gold)"
            stroke-dasharray="33.2 66.8" 
            stroke-dashoffset="25"
            @mouseenter="hoverSegment(segments[0])"
            @mouseleave="leaveSegment"
            :class="{ active: activeSegment && activeSegment.id === 'tick' }"></circle>
            
          <!-- Sponsor: 27.6% (-8.2 offset) -->
          <circle class="donut-segment" cx="21" cy="21" r="15.915" fill="transparent" stroke-width="6" 
            stroke="var(--jo-black)"
            stroke-dasharray="27.6 72.4" 
            stroke-dashoffset="-8.2"
            @mouseenter="hoverSegment(segments[1])"
            @mouseleave="leaveSegment"
            :class="{ active: activeSegment && activeSegment.id === 'spons' }"></circle>
            
          <!-- CIO: 27.3% (-35.8 offset) -->
          <circle class="donut-segment" cx="21" cy="21" r="15.915" fill="transparent" stroke-width="6" 
            stroke="var(--jo-mint)"
            stroke-dasharray="27.3 72.7" 
            stroke-dashoffset="-35.8"
            @mouseenter="hoverSegment(segments[2])"
            @mouseleave="leaveSegment"
            :class="{ active: activeSegment && activeSegment.id === 'cio' }"></circle>

          <!-- Autres: 11.9% (-63.1 offset) -->
          <circle class="donut-segment" cx="21" cy="21" r="15.915" fill="transparent" stroke-width="6" 
            stroke="var(--jo-pink)"
            stroke-dasharray="11.9 88.1" 
            stroke-dashoffset="-63.1"
            @mouseenter="hoverSegment(segments[3])"
            @mouseleave="leaveSegment"
            :class="{ active: activeSegment && activeSegment.id === 'other' }"></circle>
        </svg>
        
        <div class="chart-center">
          <transition name="fade" mode="out-in">
            <div v-if="!activeSegment" key="total" class="total-view">
              <span class="value">4,49</span>
              <span class="unit">Mds €</span>
              <span class="label">Budget Total</span>
            </div>
            
            <div v-else :key="activeSegment.id" class="detail-view">
              <span class="value" :style="{ color: activeSegment.color }">{{ activeSegment.value }}</span>
              <span class="unit">Mds €</span>
              <span class="label">{{ activeSegment.title }}</span>
              <span class="percent">{{ activeSegment.percent }}%</span>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Légende -->
    <div class="legend-panel">
      <div v-for="seg in segments" :key="seg.id" class="legend-item" @mouseenter="hoverSegment(seg)" @mouseleave="leaveSegment">
        <span class="color-box" :style="{ backgroundColor: seg.color }"></span>
        <span class="title">{{ seg.title }}</span>
        <span class="perc">{{ seg.percent }}%</span>
      </div>

      <div class="info-note">
        <strong>💡 Note Publique :</strong> 
        Le financement public direct du COJO ne représente qu'env. <strong>5%</strong> (~204 M€), principalement ciblé sur l'organisation des Jeux Paralympiques. Le reste du budget est privé.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const segments = ref([
  { id: 'tick', title: 'Billetterie & Hospitalités', value: '1,49', percent: 33.2, color: 'var(--jo-gold)' },
  { id: 'spons', title: 'Sponsoring Privé', value: '1,24', percent: 27.6, color: 'var(--jo-black)' },
  { id: 'cio', title: 'Contribution CIO', value: '1,23', percent: 27.3, color: 'var(--jo-mint)' },
  { id: 'other', title: 'Autres (Licences, etc.)', value: '0,53', percent: 11.9, color: 'var(--jo-pink)' }
])

const activeSegment = ref(null)

const hoverSegment = (seg) => {
  activeSegment.value = seg
}

const leaveSegment = () => {
  activeSegment.value = null
}
</script>

<style scoped>
.budget-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 4rem 2rem;
  background: #fdfdfd;
  border-radius: var(--jo-border-radius);
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.02);
}

.chart-container {
  flex: 1;
  max-width: 450px;
}

.svg-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
}

.donut {
  width: 100%;
  height: 100%;
  transform: rotate(0deg);
}

.donut-segment {
  cursor: pointer;
  transition: stroke-width 0.3s ease, opacity 0.3s ease;
}

.donut-segment:hover, .donut-segment.active {
  stroke-width: 8;
  opacity: 1;
  z-index: 10;
}

.chart-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 60%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  background: var(--jo-white);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.value {
  font-size: 3rem;
  font-family: var(--font-heading);
  font-weight: bold;
  line-height: 1;
  color: var(--jo-black);
}

.unit {
  font-size: 1rem;
  font-weight: bold;
  color: #777;
  margin-bottom: 0.5rem;
}

.label {
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #333;
}

.percent {
  font-size: 1.2rem;
  font-family: var(--font-heading);
  font-weight: bold;
  margin-top: 0.2rem;
  color: #888;
}

.legend-panel {
  flex: 1;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.legend-item {
  display: flex;
  align-items: center;
  background: var(--jo-white);
  padding: 1rem;
  border-radius: var(--jo-border-radius);
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.legend-item:hover {
  transform: translateX(10px);
}

.color-box {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-right: 1.5rem;
}

.title {
  flex: 1;
  font-size: 1.1rem;
  font-family: var(--font-heading);
  color: var(--jo-black);
}

.perc {
  font-weight: bold;
  font-size: 1.2rem;
  color: #555;
}

.info-note {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(214, 194, 122, 0.15);
  border-left: 5px solid var(--jo-gold);
  border-radius: 0 var(--jo-border-radius) var(--jo-border-radius) 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@media (max-width: 992px) {
  .budget-section {
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
