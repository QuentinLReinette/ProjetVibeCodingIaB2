export const categories = [
  "Tous",
  "Sport",
  "Sécurité",
  "Spectateurs",
  "Médias / diffusion",
  "Durabilité"
];

export const innovationsData = [
  {
    id: 1,
    title: "Systèmes de suivi et analytics",
    category: "Sport",
    description: "Analyse en temps réel de milliers d'images par seconde pour un chronométrage d'une précision millimétrique.",
    impact: { efficacite: 3, acceptabilite: 2, perennite: 3 },
    scenarios: {
      A: { title: "Forte", conditions: "Adoption globale", opportunites: "Nouveaux records", obstacles: "Coût", impacts: "Révolution de l'entraînement", color: "#2ecc71" },
      B: { title: "Hybride", conditions: "Adoption des pays riches", opportunites: "Amélioration ciblée", obstacles: "Inégalités", impacts: "Fracture sportive", color: "#f1c40f" },
      C: { title: "Limitée", conditions: "Rejet par les fédérations", opportunites: "Maintien de la tradition", obstacles: "Résistance au changement", impacts: "Stagnation", color: "#e74c3c" }
    }
  },
  {
    id: 2,
    title: "Sécurité & Biométrie",
    category: "Sécurité",
    description: "Accès fluidifié par l'identification biométrique pour les athlètes et contrôle d'accès intelligent aux sites.",
    impact: { efficacite: 3, acceptabilite: 1, perennite: 2 },
    scenarios: {
      A: { title: "Optimiste", conditions: "Législation favorable", opportunites: "Sécurité maximale", obstacles: "Protection de la vie privée", impacts: "Standardisation", color: "#2ecc71" },
      B: { title: "Graduelle", conditions: "Usage restreint", opportunites: "Bénéfices ciblés", obstacles: "Complexité juridique", impacts: "Acceptation lente", color: "#f1c40f" },
      C: { title: "Pessimiste", conditions: "Rejet public", opportunites: "Respect total de la vie privée", obstacles: "Lourdeur des contrôles manuels", impacts: "Abandon", color: "#e74c3c" }
    }
  },
  {
    id: 3,
    title: "Stades Connectés (AR)",
    category: "Spectateurs",
    description: "Expériences en réalité augmentée pour le public sur place grâce à la couverture 5G+ et Wi-Fi 7.",
    impact: { efficacite: 2, acceptabilite: 3, perennite: 3 },
    scenarios: {
      A: { title: "Forte", conditions: "Équipement généralisé", opportunites: "Immersion totale", obstacles: "Connectivité", impacts: "Nouveau standard de visionnage", color: "#2ecc71" },
      B: { title: "Hybride", conditions: "Usage via apps mobiles", opportunites: "Engagement accru", obstacles: "Batterie/Réseau", impacts: "Adoption progressive", color: "#f1c40f" },
      C: { title: "Limitée", conditions: "Faible intérêt", opportunites: "Concentration sur l'action réelle", obstacles: "Ergonomie", impacts: "Niche technologique", color: "#e74c3c" }
    }
  },
  {
    id: 4,
    title: "Diffusion 8K Globale",
    category: "Médias / diffusion",
    description: "Première couverture 8K intégrale pour le broadcast international, offrant une finesse d’image incroyable.",
    impact: { efficacite: 3, acceptabilite: 3, perennite: 2 },
    scenarios: {
      A: { title: "Optimiste", conditions: "Écrans 8K démocratisés", opportunites: "Qualité inégalée", obstacles: "Bande passante", impacts: "Standard futur", color: "#2ecc71" },
      B: { title: "Graduelle", conditions: "Offre premium", opportunites: "Monétisation", obstacles: "Coût de l'équipement", impacts: "Marché de niche", color: "#f1c40f" },
      C: { title: "Pessimiste", conditions: "Saturation réseaux", opportunites: "Maintien 4K", obstacles: "Absence de ROI", impacts: "Stagnation à la 4K", color: "#e74c3c" }
    }
  },
  {
    id: 5,
    title: "Gestion Énergétique Smart",
    category: "Durabilité",
    description: "Des réseaux électriques intelligents (Smart Grids) pilotant la température et l’éclairage en fonction de l’occupation.",
    impact: { efficacite: 3, acceptabilite: 3, perennite: 3 },
    scenarios: {
      A: { title: "Forte", conditions: "Financement public massifs", opportunites: "Zéro gaspillage", obstacles: "Investissement initial", impacts: "Villes intelligentes", color: "#2ecc71" },
      B: { title: "Hybride", conditions: "Déploiement partiel", opportunites: "Réductions significatives", obstacles: "Compatibilité ancien/nouveau", impacts: "Transition douce", color: "#f1c40f" },
      C: { title: "Limitée", conditions: "Coûts maintenance élevés", opportunites: "Gestion manuelle maîtrisée", obstacles: "Complexité IT", impacts: "Retour aux systèmes classiques", color: "#e74c3c" }
    }
  },
  {
    id: 6,
    title: "Jumeaux Numériques",
    category: "Durabilité",
    description: "La réplique exacte en 3D des sites olympiques pour faciliter la logistique et simuler les flux humains.",
    impact: { efficacite: 3, acceptabilite: 2, perennite: 2 },
    scenarios: {
      A: { title: "Optimiste", conditions: "Maintien des modèles", opportunites: "Planification pérenne", obstacles: "Mises à jour", impacts: "Outil standard", color: "#2ecc71" },
      B: { title: "Graduelle", conditions: "Usage occasionnel", opportunites: "Aide à la décision", obstacles: "Silos de données", impacts: "Outil d'experts", color: "#f1c40f" },
      C: { title: "Pessimiste", conditions: "Abandon post-Jeux", opportunites: "None", obstacles: "Coût de maintenance", impacts: "Désuétude rapide", color: "#e74c3c" }
    }
  }
];