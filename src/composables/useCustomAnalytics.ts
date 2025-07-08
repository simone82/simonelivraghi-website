/**
 * Custom Analytics Tracking Composable
 * Handles section_view, button_view, and button_click events
 * Integrates with vue-gtag and respects GDPR consent
 */
import { ref, onUnmounted } from 'vue'
import { event } from 'vue-gtag'
import { useCookieConsent } from './useCookieConsent'
import { handleAnalyticsError } from '@/utils/errorHandler'

// Track which elements have already been viewed (per session)
const viewedSections = new Set<string>()
const viewedButtons = new Set<string>()

export interface CustomAnalyticsEvent {
  section_id: string
  button_id?: string
  button_text?: string
}

export const useCustomAnalytics = () => {
  const { analyticsAllowed } = useCookieConsent()
  const observers = ref<IntersectionObserver[]>([])

  // Check if analytics is available and consented
  const isAnalyticsAvailable = (): boolean => {
    return typeof window !== 'undefined' && analyticsAllowed.value
  }

  // Send custom event to vue-gtag
  const trackCustomEvent = (eventName: string, parameters: CustomAnalyticsEvent) => {
    if (!isAnalyticsAvailable()) return

    try {
      // Validate required parameters
      if (!parameters.section_id) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('[Analytics] Missing required section_id for event:', eventName)
        }
        return
      }

      // For button events, validate button-specific parameters
      if (eventName.includes('button') && (!parameters.button_id || !parameters.button_text)) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('[Analytics] Missing button_id or button_text for event:', eventName)
        }
        return
      }

      // Send event to GA4 via vue-gtag
      event(eventName, {
        custom_parameter_section_id: parameters.section_id,
        custom_parameter_button_id: parameters.button_id || undefined,
        custom_parameter_button_text: parameters.button_text || undefined,
      })

      if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics] Custom event tracked: ${eventName}`, parameters)
      }
    } catch (error) {
      if (error instanceof Error) {
        handleAnalyticsError(error)
      }
    }
  }

  // Track section view event
  const trackSectionView = (sectionId: string) => {
    // Only track once per session
    if (viewedSections.has(sectionId)) return

    viewedSections.add(sectionId)
    trackCustomEvent('section_view', { section_id: sectionId })
  }

  // Track button view event
  const trackButtonView = (sectionId: string, buttonId: string, buttonText: string) => {
    const uniqueButtonKey = `${sectionId}:${buttonId}`

    // Only track once per session
    if (viewedButtons.has(uniqueButtonKey)) return

    viewedButtons.add(uniqueButtonKey)
    trackCustomEvent('button_view', {
      section_id: sectionId,
      button_id: buttonId,
      button_text: buttonText,
    })
  }

  // Track button click event
  const trackButtonClick = (sectionId: string, buttonId: string, buttonText: string) => {
    trackCustomEvent('button_click', {
      section_id: sectionId,
      button_id: buttonId,
      button_text: buttonText,
    })
  }

  // Track form submission event (GA4 standard event)
  const trackFormSubmit = (formName: string, sectionId?: string) => {
    if (!isAnalyticsAvailable()) return

    try {
      // Use GA4 standard form_submit event
      event('form_submit', {
        form_name: formName,
        custom_parameter_section_id: sectionId || undefined,
      })

      if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics] Form submit tracked: ${formName}`, { sectionId })
      }
    } catch (error) {
      if (error instanceof Error) {
        handleAnalyticsError(error)
      }
    }
  }

  // Setup intersection observer for section tracking
  const observeSection = (element: HTMLElement, sectionId: string) => {
    if (!element || !sectionId) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if at least 50% of the section is visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            trackSectionView(sectionId)
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% visible
        rootMargin: '0px',
      }
    )

    observer.observe(element)
    observers.value.push(observer)
  }

  // Setup intersection observer for button tracking
  const observeButton = (
    element: HTMLElement,
    sectionId: string,
    buttonId: string,
    buttonText: string
  ) => {
    if (!element || !sectionId || !buttonId || !buttonText) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if at least 50% of the button is visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            trackButtonView(sectionId, buttonId, buttonText)
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% visible
        rootMargin: '0px',
      }
    )

    observer.observe(element)
    observers.value.push(observer)
  }

  // Clean up observers
  const cleanupObservers = () => {
    observers.value.forEach(observer => {
      observer.disconnect()
    })
    observers.value = []
  }

  // Cleanup on unmount
  onUnmounted(() => {
    cleanupObservers()
  })

  return {
    trackSectionView,
    trackButtonView,
    trackButtonClick,
    trackFormSubmit,
    observeSection,
    observeButton,
    cleanupObservers,
    isAnalyticsAvailable,
  }
}
