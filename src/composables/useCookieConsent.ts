import { ref, computed } from 'vue'
import { addGtag, optOut, optIn } from 'vue-gtag'
import { COOKIE_CONFIG } from '@/config'
import { handleStorageError } from '@/utils/errorHandler'

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

export interface ConsentState {
  hasConsented: boolean
  preferences: CookiePreferences
  consentDate: string | null
}

const CONSENT_KEY = COOKIE_CONFIG.consentKey
const CONSENT_DURATION = COOKIE_CONFIG.consentDuration

// Default consent state
const defaultConsent: ConsentState = {
  hasConsented: false,
  preferences: {
    necessary: COOKIE_CONFIG.categories.necessary,
    analytics: COOKIE_CONFIG.categories.analytics,
    marketing: COOKIE_CONFIG.categories.marketing,
    preferences: COOKIE_CONFIG.categories.preferences,
  },
  consentDate: null,
}

// Reactive state
const consentState = ref<ConsentState>(defaultConsent)
const showBanner = ref(false)
const showPreferences = ref(false)

// Load consent from localStorage
const loadConsent = (): ConsentState => {
  if (typeof window === 'undefined') return defaultConsent

  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) return defaultConsent

    const parsed = JSON.parse(stored) as ConsentState
    const consentDate = new Date(parsed.consentDate || '')
    const now = new Date()

    // Check if consent has expired
    if (now.getTime() - consentDate.getTime() > CONSENT_DURATION) {
      localStorage.removeItem(CONSENT_KEY)
      return defaultConsent
    }

    return parsed
  } catch {
    return defaultConsent
  }
}

// Save consent to localStorage
const saveConsent = (state: ConsentState) => {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state))
  } catch (error) {
    if (error instanceof Error) {
      handleStorageError(error, 'save cookie consent')
    }
  }
}

// Initialize consent state and analytics if already consented
if (typeof window !== 'undefined') {
  consentState.value = loadConsent()
  showBanner.value = !consentState.value.hasConsented

  // If user has already consented to analytics, initialize it
  if (consentState.value.hasConsented && consentState.value.preferences.analytics) {
    // Small delay to ensure vue-gtag is ready
    setTimeout(() => {
      addGtag().catch(() => {
        // Silent fail - analytics not critical
      })
    }, 100)
  }
}

export const useCookieConsent = () => {
  // Accept all cookies
  const acceptAll = () => {
    consentState.value = {
      hasConsented: true,
      preferences: {
        necessary: true,
        analytics: true,
        marketing: true,
        preferences: true,
      },
      consentDate: new Date().toISOString(),
    }
    saveConsent(consentState.value)
    showBanner.value = false
    showPreferences.value = false

    // Initialize Google Analytics via vue-gtag
    addGtag().catch(() => {
      // Silent fail - analytics not critical
    })
  }

  // Accept only necessary cookies
  const acceptNecessary = () => {
    consentState.value = {
      hasConsented: true,
      preferences: {
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false,
      },
      consentDate: new Date().toISOString(),
    }
    saveConsent(consentState.value)
    showBanner.value = false
    showPreferences.value = false

    // Opt-out of analytics if it was previously enabled
    optOut()
  }

  // Save custom preferences
  const savePreferences = (preferences: CookiePreferences) => {
    const wasAnalyticsEnabled = consentState.value.preferences.analytics
    const willEnableAnalytics = preferences.analytics

    consentState.value = {
      hasConsented: true,
      preferences: {
        ...preferences,
        necessary: true, // Always true
      },
      consentDate: new Date().toISOString(),
    }
    saveConsent(consentState.value)
    showBanner.value = false
    showPreferences.value = false

    // Handle analytics state change
    if (!wasAnalyticsEnabled && willEnableAnalytics) {
      // Enable analytics
      addGtag().catch(() => {
        // Silent fail
      })
    } else if (wasAnalyticsEnabled && !willEnableAnalytics) {
      // Disable analytics
      optOut()
    } else if (wasAnalyticsEnabled && willEnableAnalytics) {
      // Re-enable analytics (in case it was previously opted out)
      optIn()
    }
  }

  // Revoke consent
  const revokeConsent = () => {
    consentState.value = defaultConsent
    localStorage.removeItem(CONSENT_KEY)
    showBanner.value = true

    // Opt-out of analytics
    optOut()
  }

  // Open preferences modal
  const openPreferences = () => {
    showPreferences.value = true
    showBanner.value = false
  }

  // Close preferences modal
  const closePreferences = () => {
    showPreferences.value = false
    if (!consentState.value.hasConsented) {
      showBanner.value = true
    }
  }

  // Check if a specific cookie type is allowed
  const isAllowed = (type: keyof CookiePreferences): boolean => {
    return consentState.value.hasConsented && consentState.value.preferences[type]
  }

  // Computed properties
  const hasConsented = computed(() => consentState.value.hasConsented)
  const preferences = computed(() => consentState.value.preferences)
  const analyticsAllowed = computed(() => isAllowed('analytics'))
  const marketingAllowed = computed(() => isAllowed('marketing'))
  const preferencesAllowed = computed(() => isAllowed('preferences'))

  return {
    // State
    consentState: computed(() => consentState.value),
    showBanner: computed(() => showBanner.value),
    showPreferences: computed(() => showPreferences.value),

    // Computed
    hasConsented,
    preferences,
    analyticsAllowed,
    marketingAllowed,
    preferencesAllowed,

    // Methods
    acceptAll,
    acceptNecessary,
    savePreferences,
    revokeConsent,
    openPreferences,
    closePreferences,
    isAllowed,
  }
}
