# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Rules

### Atomic Design Principles
- **Always apply atomic design methodology** when creating or refactoring components
- **Component Hierarchy**: Atoms → Molecules → Organisms → Templates → Pages
- **Atoms**: Basic building blocks (buttons, inputs, labels, icons)
- **Molecules**: Simple combinations of atoms (search form, navigation item)
- **Organisms**: Complex components made of molecules and atoms (header, footer, form sections)
- **Templates**: Page-level layouts defining content structure
- **Pages**: Specific instances of templates with real content

### Clean Architecture Principles
- **Always apply clean architecture patterns** for maintainable and scalable code
- **Separation of Concerns**: Each component/function should have a single responsibility
- **Dependency Inversion**: Depend on abstractions, not concretions
- **Layer Independence**: Business logic should be independent of UI and external dependencies
- **File Organization**: Group related functionality together, separate concerns by directory structure
- **Pure Functions**: Prefer pure functions where possible for predictable behavior
- **Custom Hooks**: Extract complex logic into reusable custom hooks
- **Component Composition**: Favor composition over inheritance, use render props or compound components

### Technology Stack Requirements
- **TypeScript**: Always use TypeScript instead of JavaScript for type safety and better developer experience
- **Vue.js**: Use Vue.js as the frontend framework instead of React
- **TailwindCSS**: Use TailwindCSS for styling instead of custom CSS

### Color System Requirements (Material Design 3)
- **Always use Material Design 3 color tokens** from the established design system
- **Base Color Palette**:
  - Primary: Teal/Cyan (#006A68 light, #57D9D7 dark)
  - Secondary: Soft teal/aqua (#3A6664 light, #A2CFCD dark)
  - Tertiary: Purple/violet (#744C9A light, #DEB7FF dark)
  - Error: Red (#BA1A1A light, #FFB4AB dark)
- **Theme Support**: Implement all theme variants (light, dark, high-contrast, medium-contrast)
- **Color Token Usage**: Use semantic color tokens (--md-sys-color-*) instead of hard-coded colors
- **Surface Hierarchy**: Follow MD3 surface container levels (lowest, low, container, high, highest)
- **Accessibility**: Ensure proper contrast ratios using on-color variants (on-primary, on-surface, etc.)
- **TailwindCSS Integration**: Configure Tailwind to use MD3 color tokens as CSS custom properties

### Typography Requirements
- **Primary Font**: Always use "JetBrains Mono" as the main font family
- **Google Fonts Integration**: Load JetBrains Mono from Google Fonts CDN
- **Font Loading**: Implement proper font loading with fallback to monospace system fonts
- **Font Weights**: Use appropriate font weights (400, 500, 600, 700) available in JetBrains Mono
- **TailwindCSS Font Config**: Configure Tailwind to use JetBrains Mono as the default font family
- **Fallback Stack**: Define proper fallback fonts: `'JetBrains Mono', 'Fira Code', 'Source Code Pro', monospace`

### Brand and Visual Assets Requirements
- **Official Brand Materials**: Always use official logos and brand assets for external services and third-party platforms
- **Logo Sources**: Store official logos in the `/public` folder for proper referencing
- **Brand Guidelines**: Follow official brand guidelines for logo usage, sizing, and positioning
- **No Emoji for Brands**: Never use emoji as substitutes for official brand logos (e.g., use LinkedIn official logo instead of 💼)
- **High Quality Assets**: Use high-resolution logos (PNG, SVG preferred) for crisp display on all devices
- **Accessibility**: Ensure logos have proper alt text and meet accessibility standards
- **Legal Compliance**: Only use official brand materials that comply with respective brand usage guidelines

### GDPR and Cookie Policy Compliance
- **Always ensure GDPR compliance** for all data collection and processing activities
- **Cookie Consent**: Implement a cookie consent banner before loading any tracking scripts
- **Consent Management**:
  - No cookies or tracking scripts should load before user consent
  - Provide clear options to accept, reject, or customize cookie preferences
  - Store consent preferences in localStorage or a consent management cookie
  - Respect user's choice and only load approved services
- **Google Analytics Integration**:
  - Load Google Analytics script only after obtaining user consent
  - Implement IP anonymization: `gtag('config', 'GA_MEASUREMENT_ID', { 'anonymize_ip': true })`
  - Disable data sharing with Google: `gtag('config', 'GA_MEASUREMENT_ID', { 'allow_google_signals': false })`
  - Set appropriate data retention period in Google Analytics settings
- **Privacy Policy Requirements**:
  - Create a comprehensive privacy policy page explaining data collection
  - Include information about cookies, analytics, data retention, and user rights
  - Make privacy policy easily accessible from all pages
- **Cookie Policy Requirements**:
  - Document all cookies used by the website
  - Categorize cookies: Necessary, Analytics, Marketing, Preferences
  - Explain the purpose and duration of each cookie
  - Provide instructions for managing/deleting cookies
- **User Rights Implementation**:
  - Provide mechanism to withdraw consent at any time
  - Allow users to request data deletion
  - Enable users to export their data (if applicable)
  - Implement "Do Not Track" browser signal respect
- **Technical Implementation**:
  - Create a consent management composable/hook
  - Lazy load analytics scripts based on consent
  - Use event-driven architecture for consent state changes
  - Implement consent checks before any tracking calls
- **Data Minimization**:
  - Only collect necessary data for stated purposes
  - Avoid collecting personally identifiable information where possible
  - Use Google Analytics 4 with privacy-focused configuration

## GDPR Compliance Implementation

The project includes a comprehensive GDPR compliance system implemented through:

### Cookie Consent Management
- **Composable**: `/src/composables/useCookieConsent.ts` - Centralized consent management
- **Consent Banner**: Vue component with Accept All, Reject All, and Customize options
- **Granular Control**: Separate consent for Necessary, Analytics, Marketing, and Preferences cookies
- **Persistence**: 365-day consent duration with automatic expiration handling
- **Withdrawal**: Easy consent withdrawal mechanism available at any time

### Analytics Integration with Consent
- **Conditional Loading**: Google Analytics script loads only after user consent
- **Privacy Configuration**: IP anonymization and data sharing disabled by default
- **Tracking ID**: `G-G6TPHSNZ26` configured in `/src/config/index.ts`
- **Event Tracking**: Page views and interactions tracked only with consent
- **Fallback**: Silent failure when analytics unavailable or blocked

### Technical Implementation Details
```typescript
interface CookieConsent {
  necessary: boolean;      // Always true (required for site function)
  analytics: boolean;      // Google Analytics tracking
  marketing: boolean;      // Future marketing cookies
  preferences: boolean;    // Theme and UI preferences
  timestamp: number;       // Consent timestamp
  version: string;         // Consent version for updates
}
```

## Error Handling Architecture

The project implements a sophisticated error handling system for production reliability:

### Centralized Error Management
- **Error Handler**: `/src/utils/errorHandler.ts` - Centralized error processing and reporting
- **Custom Error Classes**: Type-safe error definitions with context and error codes
- **Safe Async Operations**: Wrapper functions for error-prone operations like API calls
- **Silent Failures**: Non-critical errors (like analytics) fail silently without breaking UX

### Error Types and Handling
```typescript
class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public context?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'AppError';
  }
}

// Safe wrapper for async operations
async function safeAsync<T>(
  operation: () => Promise<T>,
  fallback?: T
): Promise<T | undefined> {
  try {
    return await operation();
  } catch (error) {
    handleError(error);
    return fallback;
  }
}
```

### Error Context and Reporting
- **Context Preservation**: Errors include relevant context data for debugging
- **User-Friendly Messages**: Error boundaries provide graceful fallbacks
- **Development vs Production**: Detailed errors in development, user-friendly in production
- **Analytics Error Tracking**: Non-blocking error reporting to analytics when consent given

## Configuration Management

The project uses a centralized configuration system for maintainable settings:

### Configuration Structure
- **Main Config**: `/src/config/index.ts` - Environment-dependent settings
- **Google Analytics**: Tracking ID `G-G6TPHSNZ26` with privacy settings
- **Contact Forms**: Google Forms integration URLs and field mappings
- **Theme Settings**: Material Design 3 token configurations
- **Build Settings**: Vite configuration with optimizations and path aliases

### Environment Handling
```typescript
interface AppConfig {
  analytics: {
    measurementId: string;
    enabled: boolean;
    anonymizeIp: boolean;
  };
  contact: {
    formUrl: string;
    fields: Record<string, string>;
  };
  theme: {
    defaultMode: 'auto' | 'light' | 'dark';
    storageKey: string;
  };
}
```

### Implementation Guidelines
- **Component Structure**: Break down complex components into smaller, focused pieces following atomic design
- **Logic Separation**: Move business logic to custom composables or utility functions (Vue composition API)
- **Props Interface**: Define clear, minimal prop interfaces with TypeScript types for components
- **State Management**: Keep state as close to where it's used as possible, use Vue reactivity system
- **Side Effects**: Isolate side effects in custom composables or utility functions
- **Testing**: Structure code to be easily testable with clear inputs and outputs
- **TypeScript Types**: Define proper TypeScript interfaces and types for all data structures
- **Vue Composition API**: Prefer Composition API over Options API for better TypeScript integration
- **TailwindCSS Classes**: Use utility-first approach with TailwindCSS, create component classes when needed
- **Color Implementation**: Always reference MD3 color tokens, never use arbitrary color values
- **Theme Switching**: Implement theme switching using CSS custom properties and data attributes
- **Color Contrast**: Validate color combinations meet WCAG accessibility standards
- **Surface Elevation**: Use appropriate surface container levels for visual hierarchy
- **Font Implementation**: Always use JetBrains Mono with proper Google Fonts loading
- **Typography Scale**: Maintain consistent typography hierarchy using JetBrains Mono variants
- **Monospace Consistency**: Leverage monospace characteristics for technical content and code displays

## Project Overview

This is a personal portfolio website for Simone Livraghi, an AI Systems Engineer & Software Architect based in Milan, Italy. **Built with Vue.js 3 + TypeScript + TailwindCSS following modern web development best practices.** The project is production-ready with comprehensive features including GDPR compliance, analytics integration, and professional content.

### Current Implementation Status
✅ **Production-Ready**: Fully functional Vue.js single-page application with all required sections, features, and production optimizations.

### Current Tech Stack
- **Frontend Framework**: Vue.js 3.5.12 with Composition API
- **Language**: TypeScript 5.7.2 with strict type checking
- **Styling**: TailwindCSS 3.4.16 with Material Design 3 tokens
- **Build Tool**: Vite 6.0.5 with Vue plugin
- **State Management**: Pinia 2.3.0 for centralized state
- **Routing**: Vue Router 4.5.0 with hash-based navigation
- **SEO**: @vueuse/head for meta tag management
- **Font**: JetBrains Mono from Google Fonts
- **Icons**: Official brand logos and SVG assets

### Production Features Implemented
- **Navigation**: Vue Router with hash-based navigation, smooth scroll, active section highlighting
- **Sections**: Home (hero), About, Skills, Experience, Projects, Certifications, Values, Contact - all complete with real content
- **Theme System**: Auto/light/dark mode with Material Design 3 tokens and system preference detection
- **GDPR Compliance**: Cookie consent management with analytics loading only after consent
- **Analytics**: Google Analytics 4 integration with privacy-focused configuration
- **Contact Integration**: Functional Google Forms integration with real contact form
- **Professional Assets**: Real CV, profile photo, official brand logos (LinkedIn, GitHub, Gmail)
- **SEO & Accessibility**: @vueuse/head for meta management, structured data, WCAG 2.1 AA compliance
- **Error Handling**: Type-safe error management with centralized error handling architecture
- **Performance**: Optimized Vite build, TailwindCSS purging, font preloading

### Material Design 3 Implementation
Full MD3 color system implemented with TailwindCSS integration:
```css
/* Primary Colors */
--md-sys-color-primary: #006A68;
--md-sys-color-primary-dark: #57D9D7;
--md-sys-color-on-primary: #FFFFFF;

/* Surface Hierarchy */
--md-sys-color-surface: #F5FBF9;
--md-sys-color-surface-container: #E9F5F3;
--md-sys-color-surface-container-high: #DDE9E7;
```

## Development Commands

```bash
# Start development server (runs on localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# ESLint with auto-fix
npm run lint

# Format code with Prettier
npm run format

# Check formatting
npm run format:check

# Security audit
npm run audit
```

## Git Commit Standards

**Always follow conventional commit message format** when committing changes:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Commit Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Examples
```bash
feat(auth): add user authentication system
fix(ui): resolve button styling issues in dark mode
docs(readme): update installation instructions
refactor(components): reorganize atomic design structure
```

### Commit Body Format
- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Limit first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## Architecture

### Single Page Application Structure
The app is structured as a single-page application with smooth scrolling navigation between sections. All sections are rendered simultaneously in `App.jsx` and controlled by the `Navigation` component's scroll logic.

### Component Architecture
- **App.jsx**: Main application wrapper that imports all section components in order
- **Navigation.jsx**: Sticky header with active section detection using scroll position calculations
- **Section Components**: Eight main content sections (Home, About, Skills, Experience, Projects, Certifications, Values, Contact)
- **ThemeToggle.jsx**: Floating action button for dark/light mode switching
- **SEO.jsx**: Centralized meta tags and structured data management

### Theme System Architecture
- **useTheme hook**: Manages theme state with localStorage persistence and system preference detection
- **CSS Architecture**: Each component has its own CSS file with component-specific styles
- **Theme Application**: Uses `data-theme` attribute on `document.documentElement` for theme switching
- **Material Design 3**: Color tokens available but not yet integrated

### State Management
- **Theme State**: Managed by `useTheme` hook with localStorage persistence
- **Navigation State**: Local state in Navigation component for scroll position and active section tracking
- **No Global State**: Project uses local component state and props passing only

### SEO and Meta Management
- **React Helmet Async**: Centralized in SEO component for meta tags, Open Graph, Twitter cards
- **Structured Data**: JSON-LD schema for Person and Website entities
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support

## Key Implementation Details

### Scroll Navigation Logic
The Navigation component uses intersection observer-like logic with manual scroll position calculation:
- Tracks scroll position every 100px offset from section tops
- Updates active navigation state based on which section is currently in view
- Implements smooth scrolling with `scrollTo` behavior

### Theme Implementation
Theme switching works through:
1. `useTheme` hook detects system preference on initial load
2. Persists user choice in localStorage
3. Applies theme via `data-theme` attribute on document root
4. CSS variables respond to data-theme changes

### Component Patterns (Current vs Required)
**Current (React-based):**
- **Functional Components**: All components use modern React functional component pattern
- **CSS Co-location**: Each component imports its own CSS file
- **No UI Library**: Custom components built from scratch with CSS
- **Responsive Design**: Mobile-first CSS with breakpoint-based media queries

**Required (Vue.js + TypeScript + TailwindCSS):**
- **Vue Composition API**: Use Composition API with TypeScript for all new components
- **TypeScript Definitions**: Proper interface definitions for props, emits, and data structures
- **TailwindCSS Styling**: Replace custom CSS with TailwindCSS utility classes
- **Single File Components**: Use Vue SFC (.vue) format with `<script setup lang="ts">`
- **Composables**: Extract reusable logic into composables instead of custom hooks

## Content Customization

The website currently contains placeholder content that needs to be replaced:

### High Priority Updates
- **Personal Information**: Update name, title, location, bio in respective components
- **Contact Details**: Replace email, LinkedIn, GitHub links throughout
- **Professional Experience**: Replace timeline data in Experience.jsx
- **Skills**: Update technical skills categories and items
- **Assets**: Add profile photo, project screenshots, custom favicon, Open Graph image

### Component Data Patterns
- **Experience.jsx**: Uses array of experience objects with title, company, period, description, achievements
- **Projects.jsx**: Uses array of project objects with title, description, technologies, achievements
- **Skills.jsx**: Uses array of skill category objects with title and skills array
- **Certifications.jsx**: Uses array of certification objects with name, issuer, year, description

## File Organization

```
src/
├── components/          # All React components with co-located CSS
├── hooks/              # Custom React hooks (currently just useTheme)
├── assets/             # Static assets (currently minimal)
├── styles/             # Currently empty (styles are co-located)
├── utils/              # Currently empty
├── App.jsx             # Main application component
├── main.jsx            # React app entry point
└── index.css           # Minimal global styles
```

## CSS Architecture

- **Component-Scoped CSS**: Each component has its own CSS file
- **No CSS Framework**: Custom CSS with CSS variables for consistency
- **CSS Variables**: Color palette and spacing defined for consistent theming
- **Material Design 3**: Color tokens available but not yet integrated
- **Responsive Breakpoints**: Mobile (<640px), Tablet (640-768px), Desktop (>768px)

## Deployment Configuration

- **Build Tool**: Vite with React plugin
- **Output**: Static files in `dist/` directory
- **Hosting**: Compatible with Vercel, Netlify, GitHub Pages, any static hosting
- **Environment**: No environment variables or backend dependencies