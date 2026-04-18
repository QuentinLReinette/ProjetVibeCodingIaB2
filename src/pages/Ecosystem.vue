<template>
  <div class="page-container">
    <div class="page-header">
      <h2>Section 1 : L'Écosystème des JO</h2>
      <p>Organisation et impact économique et écologique.</p>
    </div>
    
    <div class="ecosystem-content">
      <div class="stats-row">
        <div class="stat-box" style="--accent: var(--jo-mint)">
          <h3>Bilan Carbone</h3>
          <div class="chart-placeholder circle">
            <span>-50%</span>
          </div>
          <p>Un objectif de réduction massive des émissions.</p>
        </div>
        
        <div class="stat-box" style="--accent: var(--jo-pink)">
          <h3>Retombées Économiques</h3>
          <div class="chart-placeholder bar">
            <div class="bar-fill" style="height: 80%">10.7Md€</div>
          </div>
          <p>Impact économique estimé sur la région.</p>
        </div>
        
        <div class="stat-box" style="--accent: var(--jo-purple)">
          <h3>Emplois Créés</h3>
          <div class="chart-placeholder text">
            <span>150 000+</span>
          </div>
          <p>Mobiliés dans l'organisation et le tourisme.</p>
        </div>
      </div>
      
      <div class="interactive-map">
        <h3>Organisation Territoriale</h3>
        <div class="map-svg">
          <!-- Placeholder SVG for infographic -->
          <svg viewBox="0 0 400 200" width="100%" height="250">
            <rect x="0" y="0" width="400" height="200" fill="#f0ebda" rx="10" />
            <circle cx="200" cy="100" r="40" fill="#D6C27A" />
            <circle cx="120" cy="100" r="30" fill="#BAE9DF" />
            <circle cx="280" cy="100" r="30" fill="#F4D1DF" />
            <text x="200" y="105" text-anchor="middle" font-weight="bold" font-family="'Trebuchet MS', sans-serif">PARIS</text>
            <path d="M 120 100 Q 160 50 200 100 T 280 100" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,5" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 100px;
  min-height: 100vh;
  background-color: var(--jo-white);
}

.page-header {
  text-align: center;
  padding: 2rem;
  background-color: var(--jo-black);
  color: var(--jo-gold);
  margin-bottom: 3rem;
}

.page-header h2 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
}

.ecosystem-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
}

.stats-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 4rem;
}

.stat-box {
  flex: 1;
  min-width: 250px;
  background: var(--jo-white);
  border: 1px solid #ddd;
  border-top: 4px solid var(--accent);
  padding: 2rem;
  border-radius: var(--jo-border-radius);
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.chart-placeholder {
  height: 120px;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-placeholder.circle {
  width: 120px;
  border-radius: 50%;
  border: 10px solid var(--jo-mint);
  margin: 1.5rem auto;
  font-size: 1.5rem;
  font-weight: bold;
}

.chart-placeholder.bar {
  align-items: flex-end;
  background: #f5f5f5;
  border-radius: 4px;
}

.bar-fill {
  width: 100%;
  background: var(--jo-pink);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 4px 4px 0 0;
}

.chart-placeholder.text span {
  font-size: 2.5rem;
  color: var(--jo-purple);
  font-family: var(--font-heading);
  font-weight: bold;
}

.interactive-map {
  background: #fafafa;
  border: 1px solid var(--jo-gold);
  border-radius: var(--jo-border-radius);
  padding: 2rem;
}

.map-svg {
  margin-top: 2rem;
  /* styling for map container */
}

@media (max-width: 768px) {
  .page-container {
    padding-top: 140px;
  }
  .stats-row {
    flex-direction: column;
  }
}
</style>
