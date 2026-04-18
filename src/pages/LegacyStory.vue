<template>
  <div class="page-container">
    <div class="hero-story">
      <h2>Section 3 : L'Héritage Olympique</h2>
      <p>Un quart de siècle d'histoire redéfini pour l'avenir.</p>
    </div>

    <article class="story-content">
      <header class="story-header">
        <h1>Seine-Saint-Denis : La Renaissance</h1>
        <p class="meta">Publié le 18 Avril 2026 | Temps de lecture : 5 min</p>
      </header>

      <section class="story-block text-block">
        <p class="dropcap">
          Les Jeux Olympiques de Paris 2024 n'étaient pas seulement un événement sportif de deux semaines. 
          Le véritable enjeu résidait dans l'héritage laissé aux habitants de la région parisienne, et plus particulièrement 
          à la Seine-Saint-Denis. Ce département a vu son paysage urbain métamorphosé grâce au Village Olympique, 
          devenu aujourd’hui un éco-quartier dynamique.
        </p>
      </section>

      <section class="story-block quote-block">
        <blockquote class="testimonial">
          "Avant les jeux, ce quartier était industriel, peu connecté et délaissé. Aujourd'hui, on y trouve des logements modernes, des espaces verts, et nos enfants s'entraînent dans les mêmes piscines que les champions olympiques."
          <footer>— Amadou, résident de Saint-Denis</footer>
        </blockquote>
      </section>

      <section class="story-block image-text-block reverse">
        <div class="text">
          <h2>Des infrastructures durables</h2>
          <p>
            Plutôt que de construire des cathédrales de béton éphémères, le comité d'organisation a misé sur la rénovation et les structures temporaires. 
            Le peu de constructions neuves, comme le Centre Aquatique Olympique (CAO), a été pensé pour répondre aux besoins locaux en matière d'apprentissage de la natation.
          </p>
        </div>
        <div class="image-placeholder" style="--bg: var(--jo-mint)">
          <span>Centre Aquatique</span>
        </div>
      </section>

      <section class="story-block image-text-block">
        <div class="image-placeholder" style="--bg: var(--jo-pink)">
          <span>Village Olympique</span>
        </div>
        <div class="text">
          <h2>Le Village devenu Quartier</h2>
          <p>
            Le Village des Athlètes, qui a accueilli plus de 14 000 sportifs, a été reconverti en 2 800 logements. 
            Pensé pour lutter contre les îlots de chaleur, c'est aujourd'hui un modèle d'urbanisme bioclimatique avec des toits végétalisés et une géothermie performante.
          </p>
        </div>
      </section>
      
      <section class="story-block conclusion">
        <p>
          En plaçant l'héritage au cœur des réflexions dès la phase de candidature, Paris 2024 a su réconcilier grands événements internationaux et aménagement du territoire respectueux et durable.
        </p>
      </section>
    </article>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 70px;
  background-color: var(--jo-white);
  min-height: 100vh;
}

.hero-story {
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--jo-black);
  color: var(--jo-gold);
}

.hero-story h2 {
  font-size: 3rem;
  margin: 0 0 1rem 0;
}

.hero-story p {
  font-size: 1.2rem;
  font-family: var(--font-heading);
}

.story-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.story-header {
  text-align: center;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--jo-gold);
  padding-bottom: 1rem;
}

.story-header h1 {
  font-size: 2.5rem;
  color: var(--jo-black);
  margin-bottom: 0.5rem;
}

.meta {
  color: #888;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.story-block {
  margin-bottom: 3rem;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #333;
}

.dropcap::first-letter {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: bold;
  color: var(--jo-gold);
  float: left;
  line-height: 1;
  padding-right: 0.5rem;
}

.quote-block {
  background-color: #fcfcfc;
  border-left: 5px solid var(--jo-gold);
  padding: 2rem;
  margin: 4rem 0;
  font-style: italic;
  font-size: 1.3rem;
  box-shadow: inset 0 0 20px rgba(0,0,0,0.02);
}

.quote-block footer {
  margin-top: 1rem;
  font-weight: bold;
  font-family: var(--font-heading);
  font-style: normal;
  color: var(--jo-black);
  font-size: 1rem;
}

.image-text-block {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 5rem 0;
}

.image-text-block.reverse {
  flex-direction: row-reverse;
}

.image-text-block .text {
  flex: 1;
}

.image-text-block h2 {
  color: var(--jo-black);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.image-placeholder {
  flex: 1;
  background-color: var(--bg);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--jo-border-radius);
  color: var(--jo-black);
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.conclusion {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  border-top: 2px solid var(--jo-gold);
  padding-top: 2rem;
  color: var(--jo-black);
}

@media (max-width: 768px) {
  .page-container {
    padding-top: 120px;
  }
  .image-text-block, 
  .image-text-block.reverse {
    flex-direction: column;
    gap: 1.5rem;
  }
  .image-placeholder {
    width: 100%;
  }
}
</style>
