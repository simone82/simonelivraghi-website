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

This is a personal portfolio website for Simone Livraghi. **Currently built with React and JavaScript, but all future development must follow the technology stack requirements above (TypeScript, Vue.js, TailwindCSS).** The project is production-ready and currently in the content customization phase.

### Migration Requirements
When working on this project, prioritize migrating to the required tech stack:
1. **TypeScript Migration**: Convert JavaScript files to TypeScript with proper type definitions
2. **Vue.js Migration**: Replace React components with Vue.js components using Composition API
3. **TailwindCSS Migration**: Replace custom CSS with TailwindCSS utility classes

## Development Commands

```bash
# Start development server (runs on localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

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
- **Material Design 3**: Color tokens available in `dev-context/simone-website.css` (not yet integrated)

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