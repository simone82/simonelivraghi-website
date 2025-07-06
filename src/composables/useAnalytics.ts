/**
 * Google Analytics composable for Vue.js
 * Provides methods to track events and page views with proper TypeScript types
 */
import { useCookieConsent } from './useCookieConsent'
import { ANALYTICS_CONFIG } from '@/config'
import { handleAnalyticsError } from '@/utils/errorHandler'
import type {
  GtagEventOptions,
  GtagConfigOptions,
} from '@/types/gtag'

export const useAnalytics = () => {
  const { analyticsAllowed } = useCookieConsent()

  // Check if gtag is available and analytics is consented
  const isGtagAvailable = (): boolean => {
    return (
      typeof window !== 'undefined' && typeof window.gtag === 'function' && analyticsAllowed.value
    )
  }

  // Track page view
  const trackPageView = (path: string, title?: string) => {
    try {
      if (!isGtagAvailable()) return

      const config: GtagConfigOptions = {
        page_path: path,
        page_title: title,
        anonymize_ip: ANALYTICS_CONFIG.anonymizeIp,
        allow_google_signals: ANALYTICS_CONFIG.allowGoogleSignals,
      }

      window.gtag('config', ANALYTICS_CONFIG.googleAnalyticsId, config)
    } catch (error) {
      if (error instanceof Error) {
        handleAnalyticsError(error)
      }
    }
  }

  // Track custom event
  const trackEvent = (action: string, category?: string, label?: string, value?: number) => {
    try {
      if (!isGtagAvailable()) return

      const eventOptions: GtagEventOptions = {
        event_category: category,
        event_label: label,
        value: value,
      }

      window.gtag('event', action, eventOptions)
    } catch (error) {
      if (error instanceof Error) {
        handleAnalyticsError(error)
      }
    }
  }

  // Track contact form submission
  const trackContactFormSubmission = (success: boolean) => {
    trackEvent('contact_form_submit', 'engagement', success ? 'success' : 'error')
  }

  // Track CV download
  const trackCVDownload = () => {
    trackEvent('download', 'engagement', 'cv_download')
  }

  // Track external link clicks
  const trackExternalLink = (url: string, label?: string) => {
    trackEvent('click', 'outbound', label || url)
  }

  // Track section scroll
  const trackSectionView = (sectionName: string) => {
    trackEvent('section_view', 'navigation', sectionName)
  }

  return {
    isGtagAvailable,
    trackPageView,
    trackEvent,
    trackContactFormSubmission,
    trackCVDownload,
    trackExternalLink,
    trackSectionView,
  }
}
