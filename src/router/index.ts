import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80, // Offset for fixed navigation
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

// vue-gtag handles page view tracking automatically
// No manual tracking needed

export default router
