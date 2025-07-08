/**
 * Google Analytics Plugin for Vue 3
 * Uses vue-gtag for GDPR-compliant analytics
 */
import { createGtag } from 'vue-gtag'
import type { App } from 'vue'
import type { Router } from 'vue-router'
import { ANALYTICS_CONFIG } from '@/config'

export default {
  install(app: App, router: Router) {
    const gtag = createGtag({
      tagId: ANALYTICS_CONFIG.googleAnalyticsId,
      config: {
        // GA4 automatically anonymizes IP addresses
        send_page_view: false, // Disable automatic tracking, use vue-gtag router tracking instead
        allow_google_signals: false, // Privacy-first approach
      },
      // CRITICAL: initMode: manual for GDPR compliance
      // Analytics won't load until explicitly enabled via addGtag()
      initMode: 'manual',
      pageTracker: {
        router,
        sendPageView: true,
      },
    })

    gtag(app)
  },
}
