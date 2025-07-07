/**
 * Google Analytics composable for Vue.js
 * Provides methods to track events and page views with proper TypeScript types
 */
import { useCookieConsent } from './useCookieConsent'
import { ANALYTICS_CONFIG } from '@/config'
import { handleAnalyticsError } from '@/utils/errorHandler'
import type { GtagEventOptions, GtagConfigOptions } from '@/types/gtag'

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

  // Track button clicks with detailed information
  const trackButtonClick = (buttonText: string, buttonType: string, section?: string) => {
    trackEvent(
      'button_click',
      'engagement',
      `${buttonType}:${buttonText}${section ? `@${section}` : ''}`
    )
  }

  // Track navigation clicks
  const trackNavigationClick = (destination: string) => {
    trackEvent('nav_click', 'navigation', destination)
  }

  // Track theme toggle
  const trackThemeToggle = (newTheme: string) => {
    trackEvent('theme_toggle', 'preferences', newTheme)
  }

  // Track skill tag clicks (for interaction measurement)
  const trackSkillInteraction = (skillName: string) => {
    trackEvent('skill_interaction', 'engagement', skillName)
  }

  // Track card interactions
  const trackCardInteraction = (cardType: string, cardTitle?: string) => {
    trackEvent('card_interaction', 'engagement', cardTitle ? `${cardType}:${cardTitle}` : cardType)
  }

  // Track contact form field interactions
  const trackFormFieldFocus = (fieldName: string) => {
    trackEvent('form_field_focus', 'engagement', fieldName)
  }

  // Track contact form validation errors
  const trackFormValidationError = (fieldName: string, errorType: string) => {
    trackEvent('form_validation_error', 'form_error', `${fieldName}:${errorType}`)
  }

  // Track lead generation (successful contact form submission)
  const trackLead = (source: string = 'contact_form') => {
    try {
      if (!isGtagAvailable()) return

      // Track as conversion event for Google Analytics
      window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        event_label: source,
        value: 1,
      })

      // Also track as custom contact event
      trackContactFormSubmission(true)
    } catch (error) {
      if (error instanceof Error) {
        handleAnalyticsError(error)
      }
    }
  }

  // Track scroll depth for engagement measurement
  const trackScrollDepth = (depth: number, section?: string) => {
    trackEvent('scroll_depth', 'engagement', section ? `${section}:${depth}%` : `${depth}%`, depth)
  }

  return {
    isGtagAvailable,
    trackPageView,
    trackEvent,
    trackContactFormSubmission,
    trackCVDownload,
    trackExternalLink,
    trackSectionView,
    trackButtonClick,
    trackNavigationClick,
    trackThemeToggle,
    trackSkillInteraction,
    trackCardInteraction,
    trackFormFieldFocus,
    trackFormValidationError,
    trackLead,
    trackScrollDepth,
  }
}
