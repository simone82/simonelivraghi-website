# Analytics Implementation Guide (Simplified)

This document describes the simplified Google Analytics implementation using vue-gtag.

## Overview

The project uses **Google Analytics 4 (GA4)** with a minimal, GDPR-compliant implementation powered by `vue-gtag`. Only automatic page view tracking is enabled - no manual event tracking.

**Measurement ID**: `G-3JB77ZVK7Z`

## Architecture

### Simplified Architecture

```
User Visit → Cookie Consent Check → User Accepts → bootstrap() → Automatic Page Tracking
```

### Core Components

1. **Vue-gtag Plugin** (`/src/plugins/gtag.ts`)
   - Configures vue-gtag with GDPR compliance
   - Sets `initMode: 'manual'` to prevent automatic initialization
   - Passes router for automatic page view tracking

2. **Cookie Consent** (`/src/composables/useCookieConsent.ts`)
   - Manages consent state in localStorage
   - Calls `addGtag()` only after user consent
   - Provides `optOut()` and `optIn()` methods

3. **Main App Integration** (`/src/main.ts`)
   - Installs gtag plugin with router instance

## Privacy & GDPR Compliance

### Key Privacy Features
- **No tracking before consent**: `initMode: 'manual'` prevents any GA loading
- **IP Anonymization**: Automatic in GA4
- **Google Signals**: Disabled with `allow_google_signals: false`
- **Opt-out capability**: Users can revoke consent at any time
- **Minimal data collection**: Only page views, no custom events

### Consent Flow
1. User visits site → No analytics script loaded
2. Cookie banner appears → User makes choice
3. If analytics accepted → `addGtag()` called → GA script loads
4. Automatic page view tracking begins
5. If consent revoked → `optOut()` called → Tracking stops

## What Gets Tracked

### Automatic Tracking Only
- **Page Views**: Automatically tracked on route changes
- **Basic Session Data**: GA4 default metrics
- **No Custom Events**: All manual tracking removed
- **No User Interactions**: No button clicks, form submissions, etc.

## Implementation Details

### Plugin Configuration
```typescript
// src/plugins/gtag.ts
const gtag = createGtag({
  tagId: 'G-3JB77ZVK7Z',
  config: {
    send_page_view: false,       // Disable automatic tracking
    allow_google_signals: false  // Privacy first
  },
  initMode: 'manual',            // GDPR compliance
  pageTracker: {
    router,
    sendPageView: true           // Use vue-gtag router tracking only
  }
})
```

### Consent Management
```typescript
// After user accepts cookies
import { addGtag } from 'vue-gtag'
addGtag().catch(() => {
  // Silent fail - analytics not critical
})

// User opts out
import { optOut } from 'vue-gtag'
optOut()
```

## Testing

### Verify GDPR Compliance
1. Clear all cookies/localStorage
2. Load site in incognito mode
3. Open Network tab, filter by "google"
4. Verify NO requests to Google until consent
5. Accept cookies → Page should NOT reload (vue-gtag handles it)
6. Verify gtag script loads after consent

### Check Page Tracking
1. After accepting cookies, navigate between pages
2. In Network tab, look for requests to:
   - `google-analytics.com/g/collect`
   - Check query parameters include page path
3. Use [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) extension

### Test Opt-out
1. After accepting cookies, revoke consent
2. Verify `optOut()` is called
3. Navigate pages - no new GA requests should appear

## Maintenance

### Package Updates
- Keep `vue-gtag` updated for Vue 3 compatibility
- Check for GA4 API changes in Google documentation

### Privacy Policy
Ensure privacy policy reflects:
- Use of Google Analytics for page view tracking
- IP anonymization
- User's right to opt-out
- 365-day consent duration

### No Custom Code
This implementation requires zero custom analytics code:
- No event tracking methods
- No manual implementation
- All handled by vue-gtag

## Troubleshooting

### Analytics Not Loading
- Check browser console for errors
- Verify consent in localStorage: `localStorage.getItem('cookie-consent')`
- Ensure cookies are accepted
- Check if ad blockers are interfering

### Page Views Not Tracked
- Verify router is passed to gtag plugin
- Check Network tab for collect requests
- Ensure `pageTracker.sendPageView: true` is set
- Verify `send_page_view: false` to avoid conflicts

### Console Errors
- If `gtag is not defined`: Consent not given or script blocked
- If `addGtag() failed`: Usually ad blocker interference

### Duplicate Page Views
- **Cause**: Both `send_page_view: true` and `pageTracker.sendPageView: true` enabled
- **Solution**: Set `send_page_view: false` in config, use only vue-gtag router tracking

## Benefits of Simplified Approach

1. **Minimal Maintenance**: Library handles all complexity
2. **GDPR Compliant**: Built-in consent management
3. **Performance**: No custom tracking overhead
4. **Reliability**: Well-maintained library
5. **Simplicity**: ~95% less code than custom implementation