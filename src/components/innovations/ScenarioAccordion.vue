<template>
  <div class="scenarios-container">
    <div class="scenarios-tabs">
      <button 
        v-for="(scenario, key) in scenarios" 
        :key="key"
        @click="activeScenario = key"
        :class="['scenario-btn', { active: activeScenario === key }]"
        :style="{ backgroundColor: activeScenario === key ? scenario.color : '#f0f0f0', color: activeScenario === key ? '#fff' : '#333' }">
        Branche {{ key }}<br>
        <small>{{ scenario.title }}</small>
      </button>
    </div>

    <transition name="fade" mode="out-in">
      <div v-if="activeData" class="scenario-details" :key="activeData.title" :style="{ borderLeftColor: activeData.color }">
        <ul class="details-list">
          <li><strong>⚡ Conditions :</strong> {{ activeData.conditions }}</li>
          <li><strong>🚀 Opportunités :</strong> {{ activeData.opportunites }}</li>
          <li><strong>🛑 Obstacles :</strong> {{ activeData.obstacles }}</li>
          <li><strong>🌍 Impacts :</strong> {{ activeData.impacts }}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  scenarios: {
    type: Object,
    required: true
  }
});

const activeScenario = ref('A');
const activeData = computed(() => props.scenarios[activeScenario.value]);
</script>

<style scoped>
.scenarios-container {
  margin-top: 1.5rem;
  background: #fdfdfd;
  border-radius: var(--jo-border-radius);
  padding: 1rem;
  box-shadow: inset 0 2px 5px rgba(0,0,0,0.02);
  border: 1px solid #f0f0f0;
}

.scenarios-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.scenario-btn {
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--font-heading);
  font-weight: bold;
  font-size: 0.85rem;
  text-transform: uppercase;
  transition: all 0.3s ease;
  line-height: 1.2;
}

.scenario-btn small {
  font-size: 0.7rem;
  text-transform: none;
  font-weight: normal;
  opacity: 0.9;
}

.scenario-btn:hover {
  filter: brightness(0.9);
}

.scenario-btn.active {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.scenario-details {
  padding: 1rem;
  background: var(--jo-white);
  border-radius: 4px;
  border-left: 4px solid;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.details-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #444;
}

.details-list li {
  margin-bottom: 0.4rem;
}

.details-list strong {
  color: var(--jo-black);
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
</style>
