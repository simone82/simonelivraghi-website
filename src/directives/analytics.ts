/**
 * Vue Directives for Custom Analytics Tracking
 * Provides v-track-section and v-track-button directives
 */
import type { Directive } from 'vue'
import { useCustomAnalytics } from '@/composables/useCustomAnalytics'

interface TrackingElement extends HTMLElement {
  _analyticsClickHandler?: (event: Event) => void
}

// Directive for tracking section views
export const vTrackSection: Directive = {
  mounted(el, binding) {
    const sectionId = binding.value
    if (!sectionId) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Analytics Directive] v-track-section requires a section ID')
      }
      return
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Directive] Mounting v-track-section for: ${sectionId}`, el)
    }

    const { observeSection } = useCustomAnalytics()
    observeSection(el, sectionId)
  },
  unmounted(_el) {
    // Cleanup handled by the composable
  },
}

// Directive for tracking button views and clicks
export const vTrackButton: Directive = {
  mounted(el: TrackingElement, binding) {
    const config = binding.value
    if (!config) return // Skip if no tracking config provided

    const { sectionId, buttonId, buttonText } = config

    if (!sectionId || !buttonId) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Analytics Directive] v-track-button requires sectionId and buttonId')
      }
      return
    }

    const { observeButton, trackButtonClick } = useCustomAnalytics()

    // Get button text from element if not provided
    const finalButtonText = buttonText || el.textContent?.trim() || buttonId

    // Setup view tracking
    observeButton(el, sectionId, buttonId, finalButtonText)

    // Setup click tracking
    const clickHandler = (_event: Event) => {
      trackButtonClick(sectionId, buttonId, finalButtonText)
    }

    el.addEventListener('click', clickHandler)
    el._analyticsClickHandler = clickHandler
  },
  unmounted(el: TrackingElement) {
    // Remove click listener
    if (el._analyticsClickHandler) {
      el.removeEventListener('click', el._analyticsClickHandler)
      delete el._analyticsClickHandler
    }
  },
}

// Export object for easy registration
export const analyticsDirectives = {
  'track-section': vTrackSection,
  'track-button': vTrackButton,
}
