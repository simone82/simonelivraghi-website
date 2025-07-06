import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import { useAnalytics } from '@/composables/useAnalytics'

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

// Track initial page view when router is ready
let initialPageTracked = false

router.afterEach(to => {
  // Always attempt to track, the analytics composable will check consent
  const { trackPageView } = useAnalytics()
  const pagePath = to.fullPath
  const pageTitle = (to.meta.title as string) || document.title

  // Track initial page view
  if (!initialPageTracked) {
    initialPageTracked = true
    // Small delay to ensure consent state is loaded
    setTimeout(() => {
      trackPageView(pagePath, pageTitle)
    }, 100)
  } else {
    trackPageView(pagePath, pageTitle)
  }
})

export default router
