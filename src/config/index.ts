/**
 * Centralized configuration for the portfolio website
 * All environment-dependent and configurable values should be defined here
 */

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  googleAnalyticsId: 'G-3JB77ZVK7Z',
  anonymizeIp: true,
  allowGoogleSignals: false,
} as const

// Personal Information
export const PERSONAL_INFO = {
  name: 'Simone Livraghi',
  title: 'Distinguished AI Systems Engineer & Software Architect Expert',
  location: 'Milan, Italy',
  email: 'simone.livraghi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/slivraghi',
  github: 'https://github.com/simone82',
  bio: 'Experienced AI Systems Engineer and Software Architect with 15+ years in the technology industry. Currently AI Software Development Lifecycle Lead at Globant.',
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
  consentKey: 'slPortfolioCookieConsent',
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
  title: 'Simone Livraghi - Distinguished AI Systems Engineer & Software Architect Expert',
  description:
    'AI Systems Engineer & Software Architect with 15+ years expertise in distributed systems and AI-driven platforms. Currently AI Software Development Lifecycle Lead at Globant. Expert in microservices, Kafka, Kubernetes, and FIFA+ platform architecture.',
  author: 'Simone Livraghi',
  keywords: [
    'AI Systems Engineer',
    'Software Architect',
    'AI Software Development Lifecycle',
    'LangChain',
    'Apache Kafka',
    'Kubernetes',
    'FIFA+ Platform',
    'Microservices Architecture',
  ],
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
