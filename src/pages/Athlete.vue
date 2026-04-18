<template>
  <div class="page-container">
    <div class="page-header">
      <h2>Section 2 : Analyse d'Athlète</h2>
      <p>Tableau de bord de performance sportive.</p>
    </div>

    <div class="dashboard-grid">
      <div class="profile-card">
        <div class="avatar">
          <img src="https://via.placeholder.com/150/D6C27A/000000?text=Athlète" alt="Athlète" />
        </div>
        <div class="info">
          <h3>Marie-Josée Ta Lou</h3>
          <p class="sport">100m Sprint</p>
          <div class="medals">
            <span class="medal gold">Or</span>
            <span class="medal silver">Argent</span>
            <span class="medal bronze">Bronze</span>
          </div>
        </div>
      </div>

      <div class="stats-cards">
        <div class="stat-card" style="border-left: 4px solid var(--jo-pink);">
          <h4>Record Personnel</h4>
          <div class="value">10.72s</div>
          <div class="trend positive">↑ 0.05s</div>
        </div>
        <div class="stat-card" style="border-left: 4px solid var(--jo-mint);">
          <h4>Vitesse Max</h4>
          <div class="value">38.4 km/h</div>
          <div class="trend positive">↑ 1.2%</div>
        </div>
        <div class="stat-card" style="border-left: 4px solid var(--jo-purple);">
          <h4>Temps de Réaction</h4>
          <div class="value">0.142s</div>
          <div class="trend negative">↓ 0.01s</div>
        </div>
        <div class="stat-card" style="border-left: 4px solid var(--jo-gold);">
          <h4>Fréquence Cardiaque</h4>
          <div class="value">185 bpm</div>
          <div class="trend neutral">-</div>
        </div>
      </div>

      <div class="chart-section">
        <h3>Évolution de la Performance (Progression 2024)</h3>
        <div class="line-chart">
          <!-- Scalable SVG representation of a line chart -->
          <svg viewBox="0 0 800 300" class="chart">
            <rect width="100%" height="100%" fill="#f9f9f9" />
            
            <!-- Grid Lines -->
            <line x1="50" y1="50" x2="750" y2="50" stroke="#ddd" />
            <line x1="50" y1="100" x2="750" y2="100" stroke="#ddd" />
            <line x1="50" y1="150" x2="750" y2="150" stroke="#ddd" />
            <line x1="50" y1="200" x2="750" y2="200" stroke="#ddd" />
            <line x1="50" y1="250" x2="750" y2="250" stroke="#000" stroke-width="2" />
            
            <!-- Axes Labels -->
            <text x="30" y="55" font-size="12">10.70</text>
            <text x="30" y="155" font-size="12">10.85</text>
            <text x="30" y="255" font-size="12">11.00</text>
            
            <text x="150" y="270" font-size="12">Jan</text>
            <text x="300" y="270" font-size="12">Mar</text>
            <text x="450" y="270" font-size="12">Mai</text>
            <text x="600" y="270" font-size="12">Jul</text>
            
            <!-- Data Line -->
            <polyline points="50,230 150,210 300,180 450,150 600,120 700,90" fill="none" stroke="#D6C27A" stroke-width="4" />
            
            <!-- Data Points -->
            <circle cx="50" cy="230" r="5" fill="#000" />
            <circle cx="150" cy="210" r="5" fill="#000" />
            <circle cx="300" cy="180" r="5" fill="#000" />
            <circle cx="450" cy="150" r="5" fill="#000" />
            <circle cx="600" cy="120" r="5" fill="#000" />
            <circle cx="700" cy="90" r="5" fill="#000" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 100px;
  background-color: #f7f7f7;
  min-height: 100vh;
}

.page-header {
  text-align: center;
  padding: 2rem;
  background-color: var(--jo-black);
  color: var(--jo-gold);
  margin-bottom: 2rem;
}

.page-header h2 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
}

.dashboard-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto auto;
  gap: 2rem;
}

.profile-card {
  background: var(--jo-white);
  border-radius: var(--jo-border-radius);
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border-top: 5px solid var(--jo-gold);
  grid-row: 1 / 3;
}

.avatar img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid var(--jo-mint);
  margin-bottom: 1rem;
}

.profile-card h3 {
  color: var(--jo-black);
  margin-bottom: 0.5rem;
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
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--jo-black);
}

.medal.gold { background-color: #ffd700; }
.medal.silver { background-color: #c0c0c0; }
.medal.bronze { background-color: #cd7f32; }

.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: var(--jo-white);
  padding: 1.5rem;
  border-radius: var(--jo-border-radius);
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.stat-card h4 {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

.stat-card .value {
  font-size: 2rem;
  font-weight: bold;
  font-family: var(--font-heading);
  color: var(--jo-black);
  margin-bottom: 0.5rem;
}

.trend {
  font-size: 0.85rem;
  font-weight: bold;
}

.trend.positive { color: #2ecc71; }
.trend.negative { color: #e74c3c; }
.trend.neutral { color: #95a5a6; }

.chart-section {
  background: var(--jo-white);
  padding: 2rem;
  border-radius: var(--jo-border-radius);
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.chart-section h3 {
  margin-bottom: 1.5rem;
  color: var(--jo-black); border-bottom: 2px solid var(--jo-gold);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.line-chart .chart {
  width: 100%;
  height: auto;
}

@media (max-width: 992px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  .profile-card {
    grid-row: auto;
  }
}

@media (max-width: 768px) {
  .page-container {
    padding-top: 140px;
  }
}
</style>
