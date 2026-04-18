<template>
  <div class="home">
    <div class="hero">
      <div class="hero-content">
        <h1 class="bounce">Bienvenue aux JO de Paris 2024</h1>
        <p>Découvrez les 4 exercices interactifs de la Session 1.</p>
      </div>
    </div>
    <div class="exercises-container">
      <div class="exercise-card">
        <h3>Section 1</h3>
        <p>Infographie de l'écosystème</p>
        <router-link to="/ecosysteme" class="btn">Découvrir</router-link>
      </div>
      <div class="exercise-card">
        <h3>Section 2</h3>
        <p>Analyse d'athlète</p>
        <router-link to="/athlete" class="btn">Analyser</router-link>
      </div>
      <div class="exercise-card">
        <h3>Section 3</h3>
        <p>L'héritage olympique</p>
        <router-link to="/heritage" class="btn">Lire</router-link>
      </div>
      <div class="exercise-card">
        <h3>Section 4</h3>
        <p>Innovations technologiques</p>
        <router-link to="/innovations" class="btn">Explorer</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding-top: 70px;
}
.hero {
  background-color: var(--jo-black);
  color: var(--jo-gold);
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-image: radial-gradient(circle at center, rgba(214, 194, 122, 0.1) 0%, rgba(0,0,0,1) 70%);
}
.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
.hero-content p {
  font-size: 1.5rem;
  color: var(--jo-white);
  max-width: 600px;
  margin: 0 auto;
}

.exercises-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  background-color: var(--jo-white);
  max-width: 1200px;
  margin: 0 auto;
}

.exercise-card {
  background-color: var(--jo-white);
  border: 2px solid var(--jo-gold);
  border-radius: var(--jo-border-radius);
  padding: 2rem;
  text-align: center;
  transition: transform var(--jo-transition), box-shadow var(--jo-transition);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.exercise-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(214, 194, 122, 0.3);
}

.exercise-card h3 {
  color: var(--jo-black);
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  background-color: var(--jo-black);
  color: var(--jo-gold);
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  margin-top: 1.5rem;
  font-weight: bold;
  font-family: var(--font-heading);
  text-transform: uppercase;
  font-size: 0.9rem;
  border: 1px solid var(--jo-gold);
  transition: all var(--jo-transition);
}

.btn:hover {
  background-color: var(--jo-gold);
  color: var(--jo-black);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  .home {
    padding-top: 120px;
  }
}
</style>
