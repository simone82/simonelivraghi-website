import { ref, computed, watch } from 'vue'

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

const CONSENT_KEY = 'cookie-consent'
const CONSENT_DURATION = 365 * 24 * 60 * 60 * 1000 // 1 year

// Default consent state
const defaultConsent: ConsentState = {
  hasConsented: false,
  preferences: {
    necessary: true, // Always true
    analytics: false,
    marketing: false,
    preferences: false,
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
  } catch {
    // console.error('Failed to save cookie consent:', error)
  }
}

// Initialize consent state
if (typeof window !== 'undefined') {
  consentState.value = loadConsent()
  showBanner.value = !consentState.value.hasConsented
}

// Watch for consent changes and trigger analytics loading
watch(
  () => consentState.value.preferences.analytics,
  newValue => {
    if (newValue && consentState.value.hasConsented) {
      loadGoogleAnalytics()
    }
  }
)

// Load Google Analytics script dynamically
const loadGoogleAnalytics = () => {
  if (typeof window === 'undefined') return

  // Check if already loaded
  if (typeof window.gtag === 'function') return

  // Create and append script
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-G6TPHSNZ26'

  script.onload = () => {
    window.dataLayer = window.dataLayer || []
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', 'G-G6TPHSNZ26', {
      anonymize_ip: true,
      allow_google_signals: false,
    })
  }

  document.head.appendChild(script)
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
  }

  // Save custom preferences
  const savePreferences = (preferences: CookiePreferences) => {
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
  }

  // Revoke consent
  const revokeConsent = () => {
    consentState.value = defaultConsent
    localStorage.removeItem(CONSENT_KEY)
    showBanner.value = true

    // Reload page to remove any loaded scripts
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
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
