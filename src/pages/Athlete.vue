<template>
  <div class="page-container">
    <div class="page-header">
      <h2>Teddy Riner - Road to Paris 2024</h2>
      <p>Analyse de la saison 2024</p>
    </div>

    <div class="dashboard-grid">
      <!-- Profile Card -->
      <div class="profile-card">
        <div class="avatar">
          <img src="https://via.placeholder.com/150/1a1a1a/D4AF37?text=Teddy+Riner" alt="Teddy Riner" />
        </div>
        <div class="info">
          <h3>Teddy Riner</h3>
          <p class="sport">Judo - Poids Lourds</p>
          <div class="medals">
            <span class="medal gold">Or JO</span>
            <span class="medal gold">Or GS</span>
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <Transition name="stats-fade" appear>
        <div class="stats-cards">
          <div class="stat-card">
            <h4>Taux de Victoire en Finale</h4>
            <div class="value">100%</div>
          </div>
          <div class="stat-card">
            <h4>Évolution du Rang Mondial</h4>
            <div class="value">9e → 2e</div>
          </div>
          <div class="stat-card">
            <h4>Efficacité Compétitive</h4>
            <div class="value">+35%</div>
          </div>
        </div>
      </Transition>

      <!-- Filters -->
      <div class="filters">
        <button
          v-for="filter in filters"
          :key="filter.key"
          @click="activeFilter = filter.key"
          :class="['filter-btn', { active: activeFilter === filter.key }]"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Chart Section -->
      <div class="chart-section">
        <h3>Évolution de la Performance (2024)</h3>
        <div class="chart-container">
          <Line :data="chartData" :options="chartOptions" @click="onChartClick" />
        </div>
      </div>

      <!-- Details Section -->
      <Transition name="details-slide" mode="out-in">
        <div v-if="selectedCompetition" class="details-card" key="details">
          <h4>{{ selectedCompetition.month }} - {{ selectedCompetition.name }}</h4>
          <p>{{ selectedCompetition.result }}</p>
          <div v-if="selectedCompetition.opponent" class="detail-item">
            <strong>Adversaire Battu:</strong> {{ selectedCompetition.opponent }}
          </div>
          <div v-if="selectedCompetition.points" class="detail-item">
            <strong>Points Gagnés:</strong> {{ selectedCompetition.points }}
          </div>
        </div>
        <div v-else class="details-placeholder" key="placeholder">
          Cliquez sur un point du graphique pour voir les détails
        </div>
      </Transition>

      <!-- Team Section -->
      <div v-if="activeFilter === 'team'" class="team-section">
        <div class="team-header">
          <h3>Performance par Équipe - JO Paris 2024</h3>
          <div class="team-switch">
            <button
              @click="teamView = 'stats'"
              :class="['switch-btn', { active: teamView === 'stats' }]"
            >
              Stats Équipe
            </button>
            <button
              @click="teamView = 'impact'"
              :class="['switch-btn', { active: teamView === 'impact' }]"
            >
              Impact Carrière
            </button>
          </div>
        </div>

        <Transition name="slide-fade" mode="out-in">
          <div v-if="teamView === 'stats'" key="stats" class="team-stats">
            <div class="progress-ring-container">
              <svg class="progress-ring" width="120" height="120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#e0e0e0"
                  stroke-width="8"
                  fill="transparent"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#D4AF37"
                  stroke-width="8"
                  fill="transparent"
                  :stroke-dasharray="`${2 * Math.PI * 50 * 1} ${2 * Math.PI * 50 * 0}`"
                  stroke-dashoffset="0"
                  transform="rotate(-90 60 60)"
                />
              </svg>
              <div class="progress-text">
                <div class="progress-value">100%</div>
                <div class="progress-label">Taux de Réussite</div>
              </div>
            </div>
            <div class="team-details">
              <div class="detail-item">
                <strong>Épreuve:</strong> Équipes Mixtes
              </div>
              <div class="detail-item">
                <strong>Date:</strong> 3 août 2024
              </div>
              <div class="detail-item">
                <strong>Résultat:</strong> Médaille d'Or
              </div>
              <div class="detail-item">
                <strong>Performance:</strong> 2ème titre olympique par équipes
              </div>
            </div>
          </div>

          <div v-else key="impact" class="team-impact">
            <div class="impact-card">
              <h4>Record Historique - 5 Titres Olympiques</h4>
              <div class="impact-stats">
                <div class="impact-stat">
                  <div class="stat-number">5</div>
                  <div class="stat-label">Titres Olympiques</div>
                </div>
                <div class="impact-stat">
                  <div class="stat-number">48h</div>
                  <div class="stat-label">Double Titre</div>
                </div>
                <div class="impact-stat">
                  <div class="stat-number">100%</div>
                  <div class="stat-label">Victoires</div>
                </div>
              </div>
              <p class="impact-description">
                Teddy Riner devient le judoka le plus titré de l'histoire olympique avec 5 médailles d'or,
                dont 2 remportées en seulement 48 heures aux JO Paris 2024.
              </p>
            </div>
          </div>
        </Transition>

        <!-- Team Timeline -->
        <div class="team-timeline">
          <h4>Parcours de l'Épreuve par Équipes</h4>
          <div class="timeline">
            <div
              v-for="(stage, index) in teamStages"
              :key="stage.name"
              class="timeline-item"
              @click="selectStage(stage)"
            >
              <div class="timeline-marker" :class="{ active: selectedStage?.name === stage.name }">
                <div class="marker-circle"></div>
              </div>
              <div class="timeline-content">
                <h5>{{ stage.name }}</h5>
                <p>{{ stage.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage Details -->
        <Transition name="slide-fade">
          <div v-if="selectedStage" class="stage-details">
            <h4>{{ selectedStage.name }}</h4>
            <p>{{ selectedStage.details }}</p>
            <div v-if="selectedStage.result" class="stage-result">
              <strong>Résultat:</strong> {{ selectedStage.result }}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const activeFilter = ref('all')
const teamView = ref('stats')
const selectedStage = ref(null)

const filters = [
  { key: 'all', label: 'Toute la saison' },
  { key: 'individual', label: 'Individuel' },
  { key: 'team', label: 'Équipe' },
]

const competitions = [
  {
    month: 'Fév',
    name: 'Paris Grand Slam',
    result: 'Or - 8e titre',
    opponent: null,
    points: null,
    type: 'individual',
    performance: 50,
  },
  {
    month: 'Mar',
    name: 'Antalya GS',
    result: 'Or vs Saito',
    opponent: 'Saito',
    points: null,
    type: 'individual',
    performance: 65,
  },
  {
    month: 'Mai',
    name: 'Douchanbé GS',
    result: 'Or vs Rakhimov, +1000 pts',
    opponent: 'Rakhimov',
    points: '+1000 pts',
    type: 'individual',
    performance: 80,
  },
  {
    month: 'Août',
    name: 'JO Paris 2024',
    result: 'Or Individuel vs Kim Min-jong + Or par Équipes',
    opponent: 'Kim Min-jong',
    points: null,
    type: 'individual',
    performance: 100,
  },
  {
    month: 'Août',
    name: 'JO Paris 2024 - Équipes',
    result: 'Or par Équipes Mixtes',
    opponent: null,
    points: null,
    type: 'team',
    performance: 100,
  },
]

const teamStages = [
  {
    name: 'Poules',
    description: 'Phase de groupes - Invaincu',
    details: 'Teddy Riner remporte tous ses combats de poule sans difficulté.',
    result: 'Victoires 100%'
  },
  {
    name: 'Demi-finale',
    description: 'Épreuve décisive contre un adversaire de haut niveau',
    details: 'Performance dominante menant à la qualification pour la finale.',
    result: 'Victoire'
  },
  {
    name: 'Finale',
    description: 'Combat pour la médaille d\'or',
    details: 'Victoire décisive contribuant au record historique de 5 médailles d\'or olympiques. Cette performance couronne une carrière exceptionnelle.',
    result: 'Médaille d\'Or'
  }
]

const selectedCompetition = ref(null)

const filteredCompetitions = computed(() => {
  if (activeFilter.value === 'all') return competitions
  if (activeFilter.value === 'individual') return competitions.filter(c => c.type === 'individual')
  if (activeFilter.value === 'team') return competitions.filter(c => c.type === 'team')
  return competitions
})

const chartData = computed(() => ({
  labels: filteredCompetitions.value.map(c => c.month),
  datasets: [
    {
      label: 'Performance',
      data: filteredCompetitions.value.map(c => c.performance),
      borderColor: '#D4AF37',
      backgroundColor: 'rgba(212, 175, 55, 0.1)',
      tension: 0.4,
      pointBackgroundColor: '#D4AF37',
      pointBorderColor: '#D4AF37',
      pointHoverBackgroundColor: '#003366',
      pointHoverBorderColor: '#003366',
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => `Performance: ${context.parsed.y}/100`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      title: {
        display: true,
        text: 'Performance /100',
        color: '#000000',
        font: {
          size: 14,
          weight: 'bold'
        }
      },
      ticks: {
        color: '#000000',
      },
      grid: {
        color: '#444444',
      },
    },
    x: {
      title: {
        display: true,
        text: 'Mois',
        color: '#000000',
        font: {
          size: 14,
          weight: 'bold'
        }
      },
      ticks: {
        color: '#000000',
      },
      grid: {
        color: '#444444',
      },
    },
  },
  onClick: (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index
      selectedCompetition.value = filteredCompetitions.value[index]
    }
  },
}

const onChartClick = (event, elements) => {
  if (elements.length > 0) {
    const index = elements[0].index
    selectedCompetition.value = filteredCompetitions.value[index]
  }
}

const selectStage = (stage) => {
  selectedStage.value = stage
}
</script>

<style scoped>
.page-container {
  padding-top: 100px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  min-height: 100vh;
  color: #ffffff;
}

.page-header {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #003366 0%, #1a1a1a 100%);
  color: #D4AF37;
  margin-bottom: 2rem;
  border-bottom: 3px solid #D4AF37;
}

.page-header h2 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  font-weight: bold;
}

.dashboard-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto auto auto;
  gap: 2rem;
}

.profile-card {
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  border-top: 5px solid #D4AF37;
  grid-row: 1 / 4;
}

.avatar img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid #003366;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.profile-card h3 {
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.sport {
  color: #666;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.medals {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.medal {
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #1a1a1a;
  background: linear-gradient(135deg, #D4AF37 0%, #ffd700 100%);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  grid-column: 2;
}

.stat-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 4px solid #D4AF37;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.stat-card h4 {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  font-weight: 600;
}

.stat-card .value {
  font-size: 2rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  grid-column: 1 / 3;
  margin: 1rem 0;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #D4AF37;
  background: transparent;
  color: #D4AF37;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: #D4AF37;
  color: #1a1a1a;
}

.filter-btn.active {
  background: #D4AF37;
  color: #1a1a1a;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.chart-section {
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  grid-column: 2;
}

.chart-section h3 {
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  border-bottom: 2px solid #D4AF37;
  padding-bottom: 0.5rem;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
}

.chart-container {
  height: 300px;
  position: relative;
}

.details-card, .details-placeholder {
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  grid-column: 1 / 3;
  margin-top: 1rem;
}

.details-card h4 {
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
}

.details-card p {
  color: #666;
  margin-bottom: 1rem;
}

.detail-item {
  margin: 0.5rem 0;
  color: #1a1a1a;
}

.detail-item strong {
  color: #003366;
}

.details-placeholder {
  text-align: center;
  color: #999;
  font-style: italic;
}

/* Team Section Styles */
.team-section {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  margin-top: 2rem;
}

.team-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid #D4AF37;
  padding-bottom: 1rem;
}

.team-header h3 {
  color: #1a1a1a;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.team-switch {
  display: flex;
  gap: 0.5rem;
}

.switch-btn {
  padding: 0.5rem 1rem;
  border: 2px solid #D4AF37;
  background: transparent;
  color: #D4AF37;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.switch-btn:hover {
  background: #D4AF37;
  color: #1a1a1a;
}

.switch-btn.active {
  background: #D4AF37;
  color: #1a1a1a;
}

.team-stats {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
}

.progress-ring-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-ring circle {
  transition: stroke-dasharray 1s ease-in-out;
}

.progress-text {
  position: absolute;
  text-align: center;
  color: #1a1a1a;
}

.progress-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #D4AF37;
}

.progress-label {
  font-size: 0.8rem;
  color: #666;
}

.team-details {
  flex: 1;
}

.detail-item {
  margin: 0.5rem 0;
  color: #1a1a1a;
}

.detail-item strong {
  color: #003366;
  margin-right: 0.5rem;
}

.team-impact {
  text-align: center;
  margin-bottom: 2rem;
}

.impact-card {
  background: linear-gradient(135deg, #D4AF37 0%, #ffd700 100%);
  color: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.impact-card h4 {
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  font-weight: bold;
}

.impact-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.impact-stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #1a1a1a;
}

.stat-label {
  font-size: 0.9rem;
  color: #333;
}

.impact-description {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

.team-timeline {
  margin-top: 2rem;
}

.team-timeline h4 {
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #D4AF37;
}

.timeline-item {
  position: relative;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(5px);
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
}

.marker-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #D4AF37;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px #D4AF37;
  transition: all 0.3s ease;
}

.timeline-marker.active .marker-circle {
  background: #003366;
  transform: scale(1.2);
}

.timeline-content {
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #D4AF37;
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-content {
  background: #e8e8e8;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.timeline-content h5 {
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: bold;
}

.timeline-content p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.stage-details {
  background: linear-gradient(135deg, #D4AF37 0%, #ffd700 100%);
  color: #1a1a1a;
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.stage-details h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: bold;
}

.stage-details p {
  margin: 0 0 1rem 0;
  line-height: 1.5;
}

.stage-result {
  font-weight: bold;
  color: #003366;
}

/* Animations */
.stats-fade-enter-active,
.stats-fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.stats-fade-enter-from,
.stats-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.details-slide-enter-active {
  transition: all 0.5s ease-out;
}

.details-slide-leave-active {
  transition: all 0.3s ease-in;
}

.details-slide-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

.details-slide-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Responsive */
@media (max-width: 992px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  .profile-card {
    grid-row: auto;
  }
  .stats-cards {
    grid-column: 1;
  }
  .chart-section {
    grid-column: 1;
  }
}

@media (max-width: 768px) {
  .page-container {
    padding-top: 140px;
  }
  .filters {
    flex-wrap: wrap;
  }
  .filter-btn {
    flex: 1 1 auto;
    min-width: 120px;
  }
}
</style>
