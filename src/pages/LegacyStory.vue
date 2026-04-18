<template>
  <div class="legacy-page">
    <section class="hero-section">
      <div class="hero-copy">
        <h2>Héritage Olympique</h2>
        <p>Une narration immersive de l'impact durable en Seine-Saint-Denis.</p>
      </div>
      <div class="hero-tag">Scrollytelling</div>
    </section>

    <div class="story-shell">
      <aside class="story-visual">
        <div class="visual-card">
          <Transition name="fade-slide" mode="out-in">
            <div :key="activeStep" class="visual-content">
              <div v-if="activeStep === 1" class="visual-block visual-legacy">
                <div class="visual-title">Avant / Après</div>
                <div class="visual-copy">
                  <span class="label before">Avant : Palais Delaune décrépit</span>
                  <span class="label after">Après : Complexe rénové et animé</span>
                </div>
              </div>

              <div v-else-if="activeStep === 2" class="visual-block visual-map">
                <div class="visual-title">Plan Piscine</div>
                <div class="mini-map">
                  <span class="map-point point-sevran">Sevran</span>
                  <span class="map-point point-bagnolet">Bagnolet</span>
                  <span class="map-point point-cao">CAO</span>
                </div>
              </div>

              <div v-else-if="activeStep === 3" class="visual-block visual-housing">
                <div class="visual-title">Village des Athlètes</div>
                <div class="housing-gauge">
                  <div class="gauge-track"></div>
                  <div class="gauge-fill"></div>
                  <div class="gauge-label">2 807 logements</div>
                </div>
                <div class="housing-meta">
                  <span>917 sociaux</span>
                  <span>2 807 totaux</span>
                </div>
              </div>

              <div v-else-if="activeStep === 4" class="visual-block visual-split">
                <div class="visual-title">Bilan Critique</div>
                <div class="split-grid">
                  <div class="split-column benefits">
                    <h4>Bénéfices</h4>
                    <ul>
                      <li>Accélération des projets</li>
                      <li>Infrastructures réutilisables</li>
                      <li>Équipements partagés</li>
                    </ul>
                  </div>
                  <div class="split-column limits">
                    <h4>Limites</h4>
                    <ul>
                      <li>Gentrification</li>
                      <li>Prix du foncier en hausse</li>
                      <li>Mixité sociale fragile</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div v-else-if="activeStep === 5" class="visual-block visual-conclusion">
                <div class="visual-title">Conclusion</div>
                <p class="final-copy">
                  La Seine-Saint-Denis démontre que les Jeux peuvent être un levier d’héritage durable,
                  à condition d’accompagner les projets sociaux et urbains au-delà du grand spectacle.
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </aside>

      <main class="story-scroll">
        <div class="story-meta">
          <p class="meta-label">Publié le 18 avril 2026</p>
          <p class="meta-sub">Scrollytelling en 5 étapes</p>
        </div>

        <section
          v-for="step in steps"
          :key="step.id"
          :ref="el => (stepRefs[step.id] = el)"
          :data-step="step.id"
          class="scroll-step"
          :class="{ active: activeStep === step.id }"
        >
          <div class="step-number">0{{ step.id }}</div>
          <div class="step-copy">
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
            <Transition name="quote-fade" mode="out-in">
              <blockquote v-if="activeStep === step.id" class="quote-block">
                {{ step.quote }}
              </blockquote>
            </Transition>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const steps = [
  {
    id: 1,
    title: "L'Héritage Bâti",
    text: "Rénovation du Palais des sports Auguste-Delaune : passage de la décrépitude à la modernité, avec un complexe repensé pour les sports et les habitants.",
    quote: "Le Palais Delaune est devenu un symbole de renaissance urbaine et sportive.",
  },
  {
    id: 2,
    title: 'Le Plan Piscine',
    text: 'Construction du CAO et legs de bassins à Sevran et Bagnolet pour soutenir l’apprentissage aquatique au-delà des Jeux.',
    quote: 'La Seine-Saint-Denis se dote d’un réseau d’équipements aquatiques durable.',
  },
  {
    id: 3,
    title: 'Le Village des Athlètes',
    text: 'Transformation en quartier de vie : 2 807 logements, dont 917 sociaux, intégrant des espaces verts et un urbanisme bioclimatique.',
    quote: 'Le Village devient un quartier accueillant et connecté.',
  },
  {
    id: 4,
    title: 'Le Bilan Critique',
    text: 'Opposition entre bénéfices d’accélération des projets et limites liées à la gentrification et à la hausse des prix.',
    quote: 'L’équilibre entre le spectaculaire et l’utile reste la clef du succès.',
  },
  {
    id: 5,
    title: 'Conclusion Durable',
    text: 'La Seine-Saint-Denis prouve que les Jeux peuvent laisser un héritage utile si les investissements publics restent ancrés dans les besoins du territoire.',
    quote: 'La clé est de lier spectacle et services durables pour les habitants.',
  },
]

const activeStep = ref(1)
const stepRefs = {}
let observer = null
let scrollRaf = null

const updateActiveStepFromScroll = () => {
  let closestStep = null
  let closestDistance = Infinity

  steps.forEach(step => {
    const element = stepRefs[step.id]
    if (!element) return

    const rect = element.getBoundingClientRect()
    const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)

    if (distance < closestDistance) {
      closestDistance = distance
      closestStep = step.id
    }
  })

  if (closestStep !== null) {
    activeStep.value = closestStep
  }
}

const createObserver = () => {
  observer = new IntersectionObserver(
    entries => {
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visibleEntries.length > 0) {
        activeStep.value = Number(visibleEntries[0].target.dataset.step)
      }
    },
    {
      root: null,
      threshold: [0.2, 0.45, 0.7],
      rootMargin: '-40% 0px -40% 0px',
    }
  )

  steps.forEach(step => {
    const element = stepRefs[step.id]
    if (element) {
      observer.observe(element)
    }
  })
}

const onScroll = () => {
  if (scrollRaf) return
  scrollRaf = requestAnimationFrame(() => {
    updateActiveStepFromScroll()
    scrollRaf = null
  })
}

onMounted(() => {
  createObserver()
  window.addEventListener('scroll', onScroll, { passive: true })
  updateActiveStepFromScroll()
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
  window.removeEventListener('scroll', onScroll)
  if (scrollRaf) {
    cancelAnimationFrame(scrollRaf)
  }
})
</script>

<style scoped>
:root {
  --bg-dark: #061a40;
  --bg-light: #f7f3ec;
  --blue-night: #10224a;
  --eco-green: #2D5A27;
  --gold: #D4AF37;
  --text-dark: #111111;
}

.legacy-page {
  background: radial-gradient(circle at top left, rgba(212,175,55,0.15), transparent 25%),
    linear-gradient(180deg, #f7f3ec 0%, #ffffff 100%);
  color: var(--text-dark);
  min-height: 100vh;
}

.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, var(--blue-night), rgba(16,34,74,0.85));
  color: #fff;
  border-bottom: 4px solid var(--gold);
}

.hero-copy h2 {
  margin: 0;
  font-size: 2.8rem;
  letter-spacing: 1px;
}

.hero-copy p {
  margin: 1rem 0 0;
  max-width: 520px;
  line-height: 1.6;
}

.hero-tag {
  padding: 1rem 1.5rem;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.22);
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.story-shell {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
  padding: 4rem 2rem 6rem;
}

.story-visual {
  position: sticky;
  top: 100px;
  align-self: start;
}

.visual-card {
  background: var(--bg-light);
  border-radius: 24px;
  min-height: 520px;
  padding: 2rem;
  box-shadow: 0 25px 80px rgba(16,34,74,0.12);
  border: 1px solid rgba(16,34,74,0.08);
}

.visual-block {
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}

.visual-title {
  margin-bottom: 1.5rem;
  color: var(--blue-night);
  font-size: 1.4rem;
  font-weight: 700;
}

.visual-copy {
  display: grid;
  row-gap: 1rem;
}

.label {
  display: inline-block;
  padding: 0.85rem 1rem;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.before {
  background: rgba(16,34,74,0.1);
  color: var(--text-dark);
}

.after {
  background: var(--gold);
  color: var(--blue-night);
}

.visual-map {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mini-map {
  width: 100%;
  height: 280px;
  position: relative;
  background: linear-gradient(180deg, #dae8ff 0%, #f7f3ec 100%);
  border-radius: 24px;
  border: 1px solid rgba(16,34,74,0.12);
}

.map-point {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background: rgba(212,175,55,0.13);
  color: var(--blue-night);
  font-weight: 700;
  text-align: center;
  padding: 0 0.75rem;
}

.point-sevran {
  top: 18%;
  left: 14%;
}

.point-bagnolet {
  top: 50%;
  right: 12%;
}

.point-cao {
  bottom: 18%;
  left: 45%;
}

.visual-housing {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.housing-gauge {
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212,175,55,0.14), transparent 68%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gauge-track,
.gauge-fill {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
}

.gauge-track {
  background: rgba(16,34,74,0.08);
}

.gauge-fill {
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
  background: linear-gradient(135deg, var(--gold), rgba(212,175,55,0.8));
  transform-origin: center center;
  transform: rotate(180deg);
}

.gauge-label {
  position: relative;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--blue-night);
  text-align: center;
}

.housing-meta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.housing-meta span {
  padding: 0.75rem 1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid rgba(16,34,74,0.1);
  color: var(--blue-night);
  font-weight: 700;
}

.visual-split {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.split-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.split-column {
  background: rgba(255,255,255,0.88);
  border-radius: 20px;
  padding: 1.4rem;
  border: 1px solid rgba(16,34,74,0.08);
}

.split-column h4 {
  margin: 0;
  color: var(--blue-night);
}

.split-column ul {
  margin: 1rem 0 0;
  padding-left: 1.15rem;
  color: #2b303d;
}

.split-column li {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.visual-conclusion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.final-copy {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2b303d;
}

.story-meta {
  background: rgba(255,255,255,0.9);
  padding: 1.25rem 1.5rem;
  border-left: 6px solid var(--eco-green);
  border-radius: 18px;
  box-shadow: 0 15px 40px rgba(16,34,74,0.08);
}

.meta-label,
.meta-sub {
  margin: 0;
}

.meta-label {
  font-weight: 700;
  color: var(--blue-night);
}

.meta-sub {
  color: var(--eco-green);
}

.scroll-step {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 1.5rem;
  min-height: 320px;
  padding: 2rem 1.5rem;
  background: rgba(255,255,255,0.92);
  border-radius: 28px;
  border: 1px solid rgba(16,34,74,0.08);
  box-shadow: 0 18px 40px rgba(16,34,74,0.08);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.scroll-step.active {
  opacity: 1;
  transform: translateY(0);
}

.step-number {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(16,34,74,0.18);
}

.step-copy h3 {
  margin: 0;
  font-size: 1.55rem;
  color: var(--blue-night);
}

.step-copy p {
  margin: 1rem 0 0;
  line-height: 1.8;
  color: #111827;
}

.visual-title,
.meta-label,
.meta-sub,
.step-number,
.final-copy {
  color: #0f172a;
}

.quote-block {
  margin-top: 1.5rem;
  padding: 1.25rem 1.5rem;
  border-left: 5px solid var(--gold);
  background: #fff8e5;
  color: #111827;
  border-radius: 16px;
  font-style: italic;
  line-height: 1.8;
}

.fade-slide-enter-active,
.fade-slide-leave-active,
.quote-fade-enter-active,
.quote-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to,
.quote-fade-enter-from,
.quote-fade-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

@media (max-width: 1180px) {
  .story-shell {
    grid-template-columns: 1fr;
  }

  .story-visual {
    position: relative;
    top: auto;
  }
}

@media (max-width: 860px) {
  .visual-card,
  .scroll-step {
    padding: 1.5rem;
  }

  .split-grid {
    grid-template-columns: 1fr;
  }

  .story-shell {
    padding: 2rem 1rem 4rem;
  }

  .story-visual {
    margin-bottom: 2rem;
  }
}

@media (max-width: 640px) {
  .hero-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .hero-copy h2 {
    font-size: 2.2rem;
  }

  .scroll-step {
    grid-template-columns: 1fr;
  }

  .step-number {
    font-size: 2.5rem;
  }
}
</style>
