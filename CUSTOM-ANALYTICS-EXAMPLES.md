# Custom Analytics Implementation Examples

This document provides comprehensive examples for implementing the three custom analytics events: `section_view`, `button_view`, and `button_click`.

## Overview

The custom analytics system tracks user interactions with sections and buttons using:
- **Intersection Observer API** for viewport visibility detection (50% threshold)
- **GDPR Compliance** - only tracks when analytics consent is given
- **Session Deduplication** - view events fire once per session per element
- **Vue Directives** for easy integration

## Event Types

### 1. Section View (`section_view`)
Tracks when a section becomes 50%+ visible in viewport.

**Parameters:**
- `custom_parameter_section_id`: Unique section identifier

### 2. Button View (`button_view`)
Tracks when a button becomes 50%+ visible in viewport.

**Parameters:**
- `custom_parameter_section_id`: Section containing the button
- `custom_parameter_button_id`: Unique button identifier  
- `custom_parameter_button_text`: Visible button text

### 3. Button Click (`button_click`)
Tracks when a button is clicked.

**Parameters:**
- `custom_parameter_section_id`: Section containing the button
- `custom_parameter_button_id`: Unique button identifier
- `custom_parameter_button_text`: Visible button text

## Implementation Examples

### Section Tracking

```vue
<template>
  <!-- Basic section tracking -->
  <section v-track-section="'hero'" class="hero-section">
    <h1>Welcome to my portfolio</h1>
  </section>

  <!-- Multiple sections with unique IDs -->
  <section v-track-section="'about'" class="about-section">
    <h2>About Me</h2>
  </section>

  <section v-track-section="'skills'" class="skills-section">
    <h2>My Skills</h2>
  </section>

  <section v-track-section="'contact'" class="contact-section">
    <h2>Get in Touch</h2>
  </section>
</template>
```

### Button Tracking with BaseButton Component

```vue
<template>
  <!-- Primary CTA button in hero section -->
  <BaseButton
    tracking-section-id="hero"
    tracking-button-id="get-in-touch"
    tracking-button-text="Get in Touch"
    @click="scrollToContact"
  >
    Get in Touch
  </BaseButton>

  <!-- Secondary button with custom tracking -->
  <BaseButton
    variant="outline"
    tracking-section-id="hero"
    tracking-button-id="view-work"
    tracking-button-text="View My Work"
    @click="scrollToProjects"
  >
    View My Work
  </BaseButton>

  <!-- Form submit button -->
  <BaseButton
    type="submit"
    tracking-section-id="contact"
    tracking-button-id="send-message"
    tracking-button-text="Send Message"
    :disabled="isSubmitting"
  >
    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
  </BaseButton>

  <!-- Download button -->
  <BaseButton
    variant="secondary"
    tracking-section-id="about"
    tracking-button-id="download-cv"
    tracking-button-text="Download CV"
    @click="downloadCV"
  >
    Download CV
  </BaseButton>
</template>
```

### Manual Tracking (Advanced Usage)

```vue
<template>
  <!-- Non-BaseButton elements using directive -->
  <button
    v-track-button="{
      sectionId: 'projects',
      buttonId: 'project-demo',
      buttonText: 'View Demo'
    }"
    @click="openDemo"
  >
    View Demo
  </button>

  <!-- Custom component with tracking -->
  <SocialLink
    v-track-button="{
      sectionId: 'hero',
      buttonId: 'linkedin-link',
      buttonText: 'LinkedIn Profile'
    }"
    :href="linkedinUrl"
    platform="linkedin"
  >
    LinkedIn Profile
  </SocialLink>
</template>

<script setup lang="ts">
import { useCustomAnalytics } from '@/composables/useCustomAnalytics'

// For manual tracking in component logic
const { trackButtonClick } = useCustomAnalytics()

const handleCustomAction = () => {
  // Manual tracking for complex interactions
  trackButtonClick('projects', 'filter-toggle', 'Filter Projects')
  
  // Your custom logic here
  toggleProjectFilter()
}
</script>
```

## Real Implementation Examples

### Hero Section with Full Tracking

```vue
<template>
  <section 
    id="home" 
    v-track-section="'hero'" 
    class="section relative overflow-hidden"
  >
    <div class="container">
      <h1>{{ personalInfo.name }}</h1>
      <p>{{ personalInfo.title }}</p>
      
      <!-- Tracked action buttons -->
      <div class="flex gap-4">
        <BaseButton
          size="lg"
          tracking-section-id="hero"
          tracking-button-id="get-in-touch"
          tracking-button-text="Get in Touch"
          @click="scrollToContact"
        >
          Get in Touch
        </BaseButton>
        
        <BaseButton
          variant="outline"
          size="lg"
          tracking-section-id="hero"
          tracking-button-id="view-my-work"
          tracking-button-text="View My Work"
          @click="scrollToProjects"
        >
          View My Work
        </BaseButton>
      </div>
      
      <!-- Social media links with tracking -->
      <div class="flex gap-6">
        <a
          v-track-button="{
            sectionId: 'hero',
            buttonId: 'linkedin-profile',
            buttonText: 'LinkedIn Profile'
          }"
          :href="personalInfo.linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandLogo brand="linkedin" />
        </a>
        
        <a
          v-track-button="{
            sectionId: 'hero',
            buttonId: 'github-profile',
            buttonText: 'GitHub Profile'
          }"
          :href="personalInfo.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandLogo brand="github" />
        </a>
      </div>
    </div>
  </section>
</template>
```

### Contact Form with Comprehensive Tracking

```vue
<template>
  <section 
    id="contact" 
    v-track-section="'contact'" 
    class="contact-section"
  >
    <h2>Get in Touch</h2>
    
    <form @submit.prevent="handleSubmit">
      <BaseInput v-model="form.name" label="Name" />
      <BaseInput v-model="form.email" type="email" label="Email" />
      <BaseTextarea v-model="form.message" label="Message" />
      
      <div class="flex gap-4">
        <!-- Primary submit button -->
        <BaseButton
          type="submit"
          tracking-section-id="contact"
          tracking-button-id="send-message"
          tracking-button-text="Send Message"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </BaseButton>
        
        <!-- Secondary clear button -->
        <BaseButton
          type="button"
          variant="outline"
          tracking-section-id="contact"
          tracking-button-id="clear-form"
          tracking-button-text="Clear Form"
          @click="clearForm"
        >
          Clear Form
        </BaseButton>
      </div>
    </form>
  </section>
</template>
```

## Best Practices

### Section ID Naming Convention
```typescript
// Use descriptive, kebab-case section IDs
'hero'           // Homepage hero section
'about'          // About me section
'skills'         // Skills showcase
'experience'     // Work experience
'projects'       // Portfolio projects
'certifications' // Certifications and awards
'values'         // Personal values
'contact'        // Contact form
'ai-coding'      // AI coding section
```

### Button ID Naming Convention
```typescript
// Format: action-object or action-context
'get-in-touch'     // CTA to contact
'view-my-work'     // CTA to projects
'download-cv'      // Download resume
'send-message'     // Submit contact form
'linkedin-profile' // Social media link
'github-profile'   // Social media link
'project-demo'     // Project demonstration
'filter-toggle'    // UI interaction
```

### Section-Button Association Examples
```typescript
// Consistent section mapping
const trackingExamples = {
  // Hero section buttons
  hero: ['get-in-touch', 'view-my-work', 'linkedin-profile', 'github-profile'],
  
  // About section buttons  
  about: ['download-cv', 'linkedin-profile', 'learn-more'],
  
  // Projects section buttons
  projects: ['project-demo', 'view-code', 'filter-toggle'],
  
  // Contact section buttons
  contact: ['send-message', 'clear-form', 'linkedin-profile'],
  
  // Skills section buttons
  skills: ['view-certifications', 'download-cv']
}
```

## Testing and Debugging

### Browser Console Verification
In development mode, the analytics system logs all events:

```javascript
// Console output examples
[Analytics] Custom event tracked: section_view {section_id: "hero"}
[Analytics] Custom event tracked: button_view {section_id: "hero", button_id: "get-in-touch", button_text: "Get in Touch"}
[Analytics] Custom event tracked: button_click {section_id: "hero", button_id: "get-in-touch", button_text: "Get in Touch"}
```

### Google Analytics 4 Event Verification
Events appear in GA4 with these parameter names:
- `custom_parameter_section_id`
- `custom_parameter_button_id` 
- `custom_parameter_button_text`

### Common Implementation Issues

1. **Missing Required Props**
   ```vue
   <!-- ❌ Wrong: Missing required tracking props -->
   <BaseButton>Click Me</BaseButton>
   
   <!-- ✅ Correct: All required props provided -->
   <BaseButton 
     tracking-section-id="hero"
     tracking-button-id="click-me"
     tracking-button-text="Click Me"
   >
     Click Me
   </BaseButton>
   ```

2. **Inconsistent Section IDs**
   ```vue
   <!-- ❌ Wrong: Section and button have mismatched section IDs -->
   <section v-track-section="'hero'">
     <BaseButton tracking-section-id="home">Click</BaseButton>
   </section>
   
   <!-- ✅ Correct: Consistent section ID -->
   <section v-track-section="'hero'">
     <BaseButton tracking-section-id="hero">Click</BaseButton>
   </section>
   ```

3. **Non-Unique Button IDs**
   ```vue
   <!-- ❌ Wrong: Duplicate button IDs in same section -->
   <BaseButton 
     tracking-section-id="hero"
     tracking-button-id="button"
   >Button 1</BaseButton>
   <BaseButton 
     tracking-section-id="hero" 
     tracking-button-id="button"
   >Button 2</BaseButton>
   
   <!-- ✅ Correct: Unique button IDs -->
   <BaseButton 
     tracking-section-id="hero"
     tracking-button-id="button-1"
   >Button 1</BaseButton>
   <BaseButton 
     tracking-section-id="hero"
     tracking-button-id="button-2"
   >Button 2</BaseButton>
   ```

## Session Deduplication Behavior

- **Section Views**: Each section fires `section_view` only once per browser session
- **Button Views**: Each button fires `button_view` only once per browser session  
- **Button Clicks**: Each click fires `button_click` event (no deduplication)

This ensures clean analytics data without inflated view counts from users scrolling up and down the page.