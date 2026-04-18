<template>
  <div class="page-container">
    <div class="header-section">
      <h2>Section 4 : Innovations Technologiques</h2>
      <p>Les avancées majeures qui ont transformé l'expérience olympique.</p>
    </div>

    <div class="grid-container">
      <div v-for="(innovation, index) in innovations" :key="index" class="card" :style="{'--hover-color': innovation.color}">
        <div class="card-icon" :style="{ backgroundColor: innovation.color }">
          <span class="icon-text">{{ index + 1 }}</span>
        </div>
        <div class="card-content">
          <h3>{{ innovation.title }}</h3>
          <p>{{ innovation.description }}</p>
        </div>
        <div class="card-footer">
          <span class="tag">#Tech2024</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Innovations',
  data() {
    return {
      innovations: [
        {
          title: "Chronométrage par IA",
          description: "Analyse en temps réel de milliers d'images par seconde pour un chronométrage d'une précision millimétrique, avec IA capable d'identifier les mouvements corporels.",
          color: "var(--jo-mint)"
        },
        {
          title: "Diffusion 8K Globale",
          description: "Première couverture 8K intégrale pour le broadcast international, offrant une finesse d’image incroyable pour les spectateurs aux quatre coins du globe.",
          color: "var(--jo-pink)"
        },
        {
          title: "Stades Connectés",
          description: "Expériences en réalité augmentée pour le public sur place grâce à la couverture 5G+ et Wi-Fi 7 : statistiques en surimpression sur le terrain via smartphone.",
          color: "var(--jo-purple)"
        },
        {
          title: "Sécurité & Biométrie",
          description: "Accès fluidifié par l'identification biométrique pour les athlètes, et contrôle d'accès intelligent aux sites garantissant une sécurité optimale.",
          color: "var(--jo-gold)"
        },
        {
          title: "Jumeaux Numériques",
          description: "La réplique exacte en 3D des sites olympiques pour faciliter la logistique gérée avant même les épreuves, incluant simulation de flux humains.",
          color: "var(--jo-mint)"
        },
        {
          title: "Gestion Énergétique Smart",
          description: "Des réseaux électriques intelligents (Smart Grids) pilotant la température et l’éclairage en fonction de l’occupation et de la météo pour réduire l'empreinte carbone.",
          color: "var(--jo-pink)"
        }
      ]
    }
  }
}
</script>

<style scoped>
.page-container {
  padding-top: 100px;
  min-height: 100vh;
  background-color: #f4f6f8;
}

.header-section {
  text-align: center;
  margin-bottom: 4rem;
  background-color: var(--jo-black);
  color: var(--jo-gold);
  padding: 3rem 2rem;
}

.header-section h2 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
}

.card {
  background: var(--jo-white);
  border-radius: var(--jo-border-radius);
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 5px solid transparent;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  border-top-color: var(--hover-color);
}

.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--jo-black);
}

.card-content {
  flex-grow: 1;
}

.card h3 {
  color: var(--jo-black);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  border-bottom: 2px solid var(--jo-gold);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.card p {
  color: #555;
  line-height: 1.6;
}

.card-footer {
  margin-top: 1.5rem;
  text-align: right;
}

.tag {
  background-color: var(--jo-black);
  color: var(--jo-gold);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  font-family: var(--font-heading);
}

@media (max-width: 768px) {
  .page-container {
    padding-top: 140px;
  }
}
</style>
