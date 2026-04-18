import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Ecosystem from '../pages/Ecosystem.vue'
import Athlete from '../pages/Athlete.vue'
import LegacyStory from '../pages/LegacyStory.vue'
import Innovations from '../pages/Innovations.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ecosysteme',
      name: 'ecosysteme',
      component: Ecosystem
    },
    {
      path: '/athlete',
      name: 'athlete',
      component: Athlete
    },
    {
      path: '/heritage',
      name: 'heritage',
      component: LegacyStory
    },
    {
      path: '/innovations',
      name: 'innovations',
      component: Innovations
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
