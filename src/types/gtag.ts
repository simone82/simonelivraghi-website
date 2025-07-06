/**
 * TypeScript definitions for Google Analytics gtag function
 * Provides proper type safety for analytics tracking
 */

// Google Analytics configuration options
export interface GtagConfigOptions {
  page_path?: string
  page_title?: string
  page_location?: string
  anonymize_ip?: boolean
  allow_google_signals?: boolean
  allow_ad_personalization_signals?: boolean
  custom_map?: Record<string, string>
  groups?: string
  linker?: {
    domains: string[]
    accept_incoming?: boolean
  }
  cookie_domain?: string
  cookie_expires?: number
  cookie_prefix?: string
  cookie_update?: boolean
  cookie_flags?: string
  send_page_view?: boolean
  transport_type?: 'beacon' | 'xhr' | 'image'
  user_id?: string
  user_properties?: Record<string, string | number | boolean>
}

// Google Analytics event options
export interface GtagEventOptions {
  event_category?: string
  event_label?: string
  value?: number
  custom_parameter_1?: string
  custom_parameter_2?: string
  send_to?: string
  [key: string]: string | number | boolean | undefined
}

// Google Analytics timing options
export interface GtagTimingOptions {
  name: string
  value: number
  event_category?: string
  event_label?: string
}

// Google Analytics exception options
export interface GtagExceptionOptions {
  description?: string
  fatal?: boolean
}

// Union type for all gtag commands
export type GtagCommand =
  | 'config'
  | 'event'
  | 'js'
  | 'set'
  | 'get'
  | 'consent'
  | 'purchase'
  | 'refund'

// Gtag function overloads for type safety
export interface Gtag {
  // Configuration
  (command: 'config', targetId: string, config?: GtagConfigOptions): void

  // Events
  (command: 'event', eventName: string, options?: GtagEventOptions): void

  // JavaScript date
  (command: 'js', date: Date): void

  // Set parameters
  (command: 'set', config: Record<string, string | number | boolean>): void
  (command: 'set', targetId: string, config: Record<string, string | number | boolean>): void

  // Get parameters
  (
    command: 'get',
    targetId: string,
    fieldName: string,
    callback: (value: string | number | boolean) => void
  ): void

  // Consent
  (
    command: 'consent',
    action: 'default' | 'update',
    parameters: {
      ad_storage?: 'granted' | 'denied'
      analytics_storage?: 'granted' | 'denied'
      functionality_storage?: 'granted' | 'denied'
      personalization_storage?: 'granted' | 'denied'
      security_storage?: 'granted' | 'denied'
      wait_for_update?: number
      region?: string[]
    }
  ): void

  // Generic fallback for other commands
  (command: string, ...args: unknown[]): void
}

// Extend the Window interface
declare global {
  interface Window {
    gtag: Gtag
    dataLayer: unknown[]
  }
}

// Common event names for type safety
export const GTAG_EVENTS = {
  // Engagement
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  CV_DOWNLOAD: 'cv_download',
  EXTERNAL_LINK: 'external_link_click',
  SECTION_VIEW: 'section_view',

  // Navigation
  PAGE_VIEW: 'page_view',
  SCROLL: 'scroll',

  // Interaction
  CLICK: 'click',
  DOWNLOAD: 'download',

  // Social
  SOCIAL_SHARE: 'share',
  SOCIAL_FOLLOW: 'social_follow',
} as const

// Event categories for consistency
export const GTAG_CATEGORIES = {
  ENGAGEMENT: 'engagement',
  NAVIGATION: 'navigation',
  OUTBOUND: 'outbound',
  SOCIAL: 'social',
  FORM: 'form',
} as const

export type GtagEventName = (typeof GTAG_EVENTS)[keyof typeof GTAG_EVENTS]
export type GtagCategory = (typeof GTAG_CATEGORIES)[keyof typeof GTAG_CATEGORIES]
