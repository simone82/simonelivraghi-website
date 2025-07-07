# Analytics Implementation Guide

This document provides comprehensive guidance for understanding and maintaining the Google Analytics implementation in this project.

## Overview

The project uses **Google Analytics 4 (GA4)** with a privacy-first, GDPR-compliant implementation. The analytics system is built with Vue.js 3, TypeScript, and follows a composable architecture pattern.

**Measurement ID**: `G-3JB77ZVK7Z`

## Architecture

### Core Components

1. **Cookie Consent Management** (`/src/composables/useCookieConsent.ts`)
   - Manages user consent state
   - Dynamically loads GA script only after consent
   - Implements page reload after consent for fresh tracking session
   - 365-day consent duration with localStorage persistence

2. **Analytics Composable** (`/src/composables/useAnalytics.ts`)
   - Central interface for all tracking operations
   - Automatic consent checking before any tracking
   - Type-safe event tracking methods
   - Debug utilities

3. **Type Definitions** (`/src/types/gtag.ts`)
   - Complete TypeScript definitions for gtag
   - Predefined event names and categories
   - Type-safe configuration options

4. **Configuration** (`/src/config/index.ts`)
   ```typescript
   ANALYTICS_CONFIG = {
     googleAnalyticsId: 'G-3JB77ZVK7Z',
     trackingEnabled: true,
     anonymizeIp: true,
     allowGoogleSignals: false,
   }
   ```

## Privacy & GDPR Compliance

### Key Privacy Features
- **No tracking before consent**: All analytics calls check consent state
- **IP Anonymization**: Enabled by default
- **Google Signals**: Disabled for privacy
- **Dynamic Script Loading**: GA script loads only after explicit consent
- **Page Reload on Consent**: Ensures fresh session with proper tracking

### Consent Flow
1. User visits site → No analytics loaded
2. Cookie banner shown → User makes choice
3. If analytics accepted → Page reloads → GA script loads
4. All subsequent interactions tracked automatically

## Event Tracking Implementation

### Automatic Tracking

#### Page Views (Router Integration)
```typescript
// src/router/index.ts
router.afterEach(to => {
  trackPageView(to.fullPath, document.title)
})
```

#### Button Clicks (BaseButton Component)
```typescript
// src/atoms/BaseButton.vue
trackButtonClick(buttonText, variant, section)
// Format: "button_click" → "engagement" → "{variant}:{text}@{section}"
```

### Manual Tracking Methods

```typescript
// Available methods in useAnalytics()
trackEvent(action, category, label, value)
trackContactFormSubmission(success)
trackCVDownload()
trackExternalLink(url, label)
trackSectionView(sectionName)
trackNavigationClick(destination)
trackThemeToggle(newTheme)
trackFormFieldFocus(fieldName)
trackFormValidationError(fieldName, errorType)
trackLead(source) // Conversion event
trackScrollDepth(depth, section)
```

## Event Taxonomy

### Standard Event Structure
```typescript
gtag('event', action, {
  event_category: category,
  event_label: label,
  value: value
})
```

### Event Categories
- `engagement` - User interactions (buttons, forms, downloads)
- `navigation` - Navigation and page flow
- `outbound` - External link clicks
- `conversion` - Lead generation and goals
- `preferences` - User preference changes
- `form_error` - Form validation errors

### Common Events

| Action | Category | Label Format | Example |
|--------|----------|--------------|---------|
| `button_click` | `engagement` | `{variant}:{text}@{section}` | `primary:Download CV@hero` |
| `nav_click` | `navigation` | `{destination}` | `about` |
| `contact_form_submit` | `engagement` | `success` or `error` | `success` |
| `generate_lead` | `conversion` | `{source}` | `contact_form` |
| `download` | `engagement` | `cv_download` | `cv_download` |
| `click` | `outbound` | `{url}` | `https://linkedin.com/...` |
| `section_view` | `navigation` | `{sectionName}` | `skills` |

## Debugging

### Browser Console Commands

```javascript
// Check analytics state
__debugAnalytics()

// Check if gtag is loaded
typeof window.gtag

// View recent events
window.dataLayer

// Check consent state
JSON.parse(localStorage.getItem('cookie-consent'))

// Manually trigger test event
window.gtag('event', 'test_event', {
  event_category: 'test',
  event_label: 'manual_test'
})
```

### Debug Logging
Debug logs are implemented throughout the analytics system. Look for `[DEBUG]` prefixed messages in the browser console.

### Network Monitoring
1. Open DevTools → Network tab
2. Filter by "collect"
3. Look for requests to `google-analytics.com/g/collect`
4. Check request payload for event parameters

## Common Issues & Solutions

### Issue: No Analytics Loading
**Symptoms**: No GA script in page, no tracking
**Check**: `localStorage.getItem('cookie-consent')` for analytics consent
**Solution**: Accept cookies from banner

### Issue: Events Not Tracking
**Symptoms**: Clicks occur but no network requests
**Check**: `__debugAnalytics()` for consent state
**Solution**: Ensure analytics is consented and gtag is loaded

### Issue: Page Views Not Tracking
**Symptoms**: Navigation changes but no page_view events
**Check**: Router afterEach hook and consent state
**Solution**: Verify consent is active before navigation

## Implementation Guidelines

### Adding New Tracking

1. **Use Existing Methods** - Check if `useAnalytics()` already has a method
2. **Follow Naming Convention** - Use descriptive action names
3. **Choose Correct Category** - Use existing categories when possible
4. **Include Context** - Add section/location info in labels
5. **Test Thoroughly** - Verify events fire with correct parameters

### Example: Adding New Button Tracking
```vue
<BaseButton 
  variant="primary"
  tracking-label="Custom Action"
  tracking-section="new-section"
  @click="handleClick"
>
  Click Me
</BaseButton>
```

### Example: Custom Event Tracking
```typescript
const { trackEvent } = useAnalytics()

// Track a custom interaction
trackEvent(
  'video_play',           // action
  'engagement',           // category
  'product-demo',         // label
  30                      // value (optional)
)
```

## Testing Analytics

### Local Testing
1. Clear cookies/localStorage
2. Load site → Verify banner appears
3. Accept analytics → Verify page reload
4. Open Network tab → Filter "collect"
5. Interact with site → Verify events fire

### Verification Checklist
- [ ] Cookie banner appears for new users
- [ ] Page reloads after accepting analytics
- [ ] GA script loads after consent
- [ ] Page views tracked on navigation
- [ ] Button clicks tracked with correct labels
- [ ] Form interactions tracked
- [ ] External links tracked
- [ ] No tracking before consent

## Production Monitoring

### Google Analytics Dashboard
- Monitor real-time events
- Check event parameters in DebugView
- Verify conversion tracking
- Review user engagement metrics

### Privacy Compliance
- Regularly audit consent flow
- Verify IP anonymization
- Check data retention settings
- Review privacy policy alignment

## Maintenance

### Regular Tasks
1. **Review Event Taxonomy** - Ensure consistency
2. **Update Debug Logs** - Remove in production
3. **Test Consent Flow** - Verify GDPR compliance
4. **Monitor Performance** - Check script loading impact
5. **Audit Events** - Remove unused tracking

### Before Production
1. Remove all `console.log` debug statements
2. Test full consent flow
3. Verify all events in GA DebugView
4. Check privacy settings
5. Update privacy policy if needed

## Quick Reference

### Import Analytics
```typescript
import { useAnalytics } from '@/composables/useAnalytics'

const { trackEvent, trackButtonClick, trackPageView } = useAnalytics()
```

### Check Consent
```typescript
import { useCookieConsent } from '@/composables/useCookieConsent'

const { analyticsAllowed } = useCookieConsent()
if (analyticsAllowed.value) {
  // Tracking is allowed
}
```

### Track Custom Event
```typescript
trackEvent('action_name', 'category', 'label', optionalValue)
```

This implementation ensures robust analytics tracking while maintaining strict privacy compliance and excellent developer experience.