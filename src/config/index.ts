/**
 * Centralized configuration for the portfolio website
 * All environment-dependent and configurable values should be defined here
 */

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  googleAnalyticsId: 'G-G6TPHSNZ26',
  trackingEnabled: true,
  anonymizeIp: true,
  allowGoogleSignals: false,
} as const

// Personal Information
export const PERSONAL_INFO = {
  name: 'Simone Livraghi',
  title: 'AI Systems Engineer & Software Architect',
  location: 'Milan, Italy',
  email: 'simone.livraghi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/slivraghi',
  github: 'https://github.com/simone82',
  bio: 'Experienced AI Systems Engineer and Software Architect with over 10 years in the technology industry.',
} as const

// Google Forms Configuration
export const CONTACT_FORM_CONFIG = {
  formUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSewRzyfbQw30c8dCAIlcVRrvSw2KFRoVxvZNTdOqYj-77QxRg/formResponse',
  fields: {
    name: 'entry.1060704342',
    email: 'entry.1399715446',
    company: 'entry.455434414',
    subject: 'entry.1086913374',
    message: 'entry.277625567',
  },
} as const

// Cookie Consent Configuration
export const COOKIE_CONFIG = {
  consentKey: 'cookie-consent',
  consentDuration: 365 * 24 * 60 * 60 * 1000, // 1 year in milliseconds
  categories: {
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    preferences: false,
  },
} as const

// Application Configuration
export const APP_CONFIG = {
  title: 'Simone Livraghi - Portfolio',
  description: 'AI Systems Engineer & Software Architect - Portfolio and Professional Experience',
  author: 'Simone Livraghi',
  keywords: ['AI', 'Software Architecture', 'TypeScript', 'Vue.js', 'Microservices'],
  language: 'en',
  locale: 'en_US',
} as const

// Brand Assets Configuration
export const BRAND_ASSETS = {
  logos: {
    linkedin: '/LI-Logo.png',
    github: {
      light: '/GitHub_Lockup_Light.svg',
      dark: '/GitHub_Lockup_Dark.svg',
    },
    gmail: '/gmail.webp',
  },
  fallbacks: {
    linkedin: '💼',
    github: '🐙',
    gmail: '📧',
  },
} as const

// Export everything as a single config object for convenience
export const CONFIG = {
  analytics: ANALYTICS_CONFIG,
  personal: PERSONAL_INFO,
  contactForm: CONTACT_FORM_CONFIG,
  cookies: COOKIE_CONFIG,
  app: APP_CONFIG,
  brandAssets: BRAND_ASSETS,
} as const

export default CONFIG
