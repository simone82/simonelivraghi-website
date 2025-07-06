/**
 * Google Analytics composable for Vue.js
 * Provides methods to track events and page views
 */
import { useCookieConsent } from './useCookieConsent'

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
    dataLayer: any[]
  }
}

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
    if (!isGtagAvailable()) return

    window.gtag('config', 'G-G6TPHSNZ26', {
      page_path: path,
      page_title: title,
      anonymize_ip: true,
      allow_google_signals: false,
    })
  }

  // Track custom event
  const trackEvent = (action: string, category?: string, label?: string, value?: number) => {
    if (!isGtagAvailable()) return

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
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
