/**
 * Custom Analytics Tracking Composable
 * Handles section_view, button_view, and button_click events
 * Integrates with vue-gtag and respects GDPR consent
 */
import { ref, onUnmounted } from 'vue'
import { event } from 'vue-gtag'
import { useCookieConsent } from './useCookieConsent'
import { handleAnalyticsError } from '@/utils/errorHandler'

// Track which elements have already been viewed (per session) - Global scope for sharing across directive instances
const globalViewedSections = new Set<string>()
const globalViewedButtons = new Set<string>()

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
    const available = typeof window !== 'undefined' && analyticsAllowed.value
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Analytics availability check:', {
        windowExists: typeof window !== 'undefined',
        analyticsAllowed: analyticsAllowed.value,
        available,
      })
    }
    return available
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
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] trackSectionView called for: ${sectionId}`)
      console.log(`[Analytics] Analytics available: ${isAnalyticsAvailable()}`)
      console.log(`[Analytics] Already viewed: ${globalViewedSections.has(sectionId)}`)
      console.log(`[Analytics] Global viewed sections:`, Array.from(globalViewedSections))
    }

    // Only track once per session using global state
    if (globalViewedSections.has(sectionId)) {
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics] Section already viewed this session: ${sectionId}`)
      }
      return
    }

    globalViewedSections.add(sectionId)
    trackCustomEvent('section_view', { section_id: sectionId })
  }

  // Track button view event
  const trackButtonView = (sectionId: string, buttonId: string, buttonText: string) => {
    const uniqueButtonKey = `${sectionId}:${buttonId}`

    // Only track once per session using global state
    if (globalViewedButtons.has(uniqueButtonKey)) return

    globalViewedButtons.add(uniqueButtonKey)
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
    if (!element || !sectionId) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Analytics] observeSection called with invalid element or sectionId', {
          element,
          sectionId,
        })
      }
      return
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] Setting up section observer for: ${sectionId}`)
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (process.env.NODE_ENV === 'development') {
            console.log(`[Analytics] Section intersection: ${sectionId}`, {
              isIntersecting: entry.isIntersecting,
              intersectionRatio: entry.intersectionRatio,
              boundingClientRect: {
                height: entry.boundingClientRect.height,
                top: entry.boundingClientRect.top,
                bottom: entry.boundingClientRect.bottom,
              },
              rootBounds: entry.rootBounds
                ? {
                    height: entry.rootBounds.height,
                  }
                : null,
              willTrack: entry.isIntersecting && entry.intersectionRatio >= 0.3,
            })
          }

          // Check if at least 30% of the section is visible (reduced from 50% for better tracking)
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            trackSectionView(sectionId)
          }
        })
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // Multiple thresholds for debugging
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
