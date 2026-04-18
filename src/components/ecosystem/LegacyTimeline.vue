<template>
  <div class="legacy-section">
    <div class="timeline">
      
      <div v-for="(item, index) in items" :key="index" class="timeline-item" :class="[index % 2 === 0 ? 'left' : 'right']">
        <div class="timeline-content" ref="timelineItems">
          <div class="icon-block" :style="{ backgroundColor: item.color }">
            <span class="icon">{{ item.icon }}</span>
          </div>
          <div class="text-block">
            <h3 :style="{ color: item.color }">{{ item.title }}</h3>
            <h4>{{ item.subtitle }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const timelineItems = ref([])

const items = ref([
  {
    icon: '🌱',
    title: 'Environnemental',
    subtitle: '-50% d\'émissions CO2',
    desc: 'L\'objectif le plus ambitieux jamais fixé pour un méga-événement sportif. Recours aux énergies renouvelables et alimentation végétale massive sur les sites.',
    color: 'var(--jo-mint)'
  },
  {
    icon: '🏘️',
    title: 'Social & Logement',
    subtitle: 'Nouveaux quartiers mixtes',
    desc: 'Le Village Olympique converti en 2800 logements (dont une part importante de logements sociaux) et de nouveaux équipements sportifs de proximité.',
    color: 'var(--jo-purple)'
  },
  {
    icon: '💼',
    title: 'Économique',
    subtitle: '+150 000 Emplois Mobilisés',
    desc: 'Forte implication des très petites entreprises locales et dynamisation économique spectaculaire de la Seine-Saint-Denis.',
    color: 'var(--jo-gold)'
  }
])

let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })

  if (timelineItems.value) {
    timelineItems.value.forEach(el => observer.observe(el))
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.legacy-section {
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: var(--jo-black);
  transform: translateX(-50%);
  border-radius: 4px;
}

.timeline-item {
  display: flex;
  justify-content: flex-end;
  padding-right: 50%;
  position: relative;
  margin-bottom: 5rem;
  width: 100%;
}

.timeline-item.right {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: 50%;
}

.timeline-content {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: var(--jo-white);
  border-radius: var(--jo-border-radius);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  margin: 0 3rem;
  border-top: 4px solid var(--jo-black);
  /* Animation Start State */
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.timeline-item.right .timeline-content {
  flex-direction: row-reverse;
  text-align: right;
}

/* Intersect Observer Trigger Class */
.timeline-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline-content::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 25px;
  height: 25px;
  background: var(--jo-gold);
  border: 4px solid var(--jo-black);
  border-radius: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.timeline-item.left .timeline-content::after {
  right: -3rem; /* Position exact sur la ligne du milieu */
  transform: translate(50%, -50%);
}

.timeline-item.right .timeline-content::after {
  left: -3rem;
  transform: translate(-50%, -50%);
}

.icon-block {
  width: 80px;
  height: 80px;
  min-width: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--jo-black);
}

.icon {
  font-size: 2.5rem;
}

.text-block {
  flex: 1;
}

.text-block h3 {
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
}

.text-block h4 {
  font-size: 1.4rem;
  color: var(--jo-black);
  margin-bottom: 1rem;
  font-family: var(--font-heading);
}

.text-block p {
  color: #555;
  line-height: 1.6;
  font-size: 1.05rem;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }
  .timeline-item {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 20px;
    margin-bottom: 3rem;
  }
  .timeline-item.right {
    padding-left: 20px;
  }
  .timeline-content, .timeline-item.right .timeline-content {
    flex-direction: column;
    text-align: left;
    margin: 0 0 0 2rem;
    align-items: flex-start;
  }
  .timeline-item.left .timeline-content::after, 
  .timeline-item.right .timeline-content::after {
    left: -2rem;
    right: auto;
    transform: translate(-50%, -50%);
  }
  .text-block h3 { font-size: 1rem; }
  .text-block h4 { font-size: 1.2rem; }
}
</style>
