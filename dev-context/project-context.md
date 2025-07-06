# Simone Livraghi Personal Website - Project Context

## Project Overview
Personal portfolio website for Simone Livraghi, an AI Systems Engineer & Software Architect based in Milan, Italy.

## Current Status
✅ **Completed**: Fully functional React single-page application with all required sections and features.

## Tech Stack
- **Frontend Framework**: React 19 with Vite
- **Styling**: Custom CSS with CSS Variables
- **SEO**: React Helmet Async
- **Icons**: Unicode emojis (no icon library needed)
- **Font**: Inter (Google Fonts)

## Project Structure
```
~/Repository/websites/simonelivraghi.com/
├── src/
│   ├── components/         # All React components
│   │   ├── Navigation.jsx  # Sticky navigation bar
│   │   ├── Home.jsx       # Hero section
│   │   ├── About.jsx      # About me section
│   │   ├── Skills.jsx     # Technical skills
│   │   ├── Experience.jsx # Work experience timeline
│   │   ├── Projects.jsx   # Portfolio projects
│   │   ├── Certifications.jsx # Professional certifications
│   │   ├── Values.jsx     # Values and interests
│   │   ├── Contact.jsx    # Contact form
│   │   ├── ThemeToggle.jsx # Dark/light mode toggle
│   │   └── SEO.jsx        # SEO meta tags
│   ├── styles/
│   │   ├── variables.css  # CSS variables and theme
│   │   └── global.css     # Global styles
│   ├── hooks/
│   │   └── useTheme.js    # Theme management hook
│   └── App.jsx            # Main app component
├── dev-context/           # Project documentation
│   ├── context.md         # Original requirements
│   ├── project-context.md # This documentation file
│   └── simone-website.css # Material Design 3 tokens
├── public/                # Static assets
├── node_modules/          # Dependencies
├── package.json           # Project configuration
├── vite.config.js         # Vite configuration
├── index.html             # HTML entry point
├── README.md              # Project documentation
└── .claudecontext         # Claude context file
```

## Features Implemented

### 1. Navigation
- Sticky header with smooth scroll
- Active section highlighting
- Mobile responsive
- Keyboard accessible

### 2. Sections (All Complete)
- **Home**: Hero with name, title, location, CTAs
- **About**: Personal introduction with key stats
- **Skills**: Categorized technical skills
- **Experience**: Timeline of work history
- **Projects**: Portfolio grid with project cards
- **Certifications**: Professional certifications grid
- **Values**: Core values, interests, and philosophy
- **Contact**: Contact form with social links

### 3. Design System
- Material Design 3 inspired
- CSS variables for consistent theming
- Color palette:
  ```css
  --color-primary: #006A68;
  --color-primary-light: #57D9D7;
  --color-secondary: #A2CFCD;
  --color-tertiary: #DEB7FF;
  --color-bg: #F5FBF9;
  --color-bg-dark: #141414;
  --color-text: #172B2A;
  --color-accent: #744FB2;
  ```

### 4. Dark/Light Mode
- Theme toggle button
- Respects system preferences
- Persists user choice in localStorage

### 5. SEO & Accessibility
- React Helmet for meta tags
- Open Graph and Twitter cards
- JSON-LD structured data
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- Sufficient color contrast

### 6. Performance
- Fast Vite build system
- Component-based architecture
- Optimized CSS
- Lazy loading ready

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Next Steps / Customization

### Content Updates Needed
1. Replace placeholder text in all components with actual content
2. Add real project data in Projects.jsx
3. Update experience timeline in Experience.jsx
4. Add actual certifications in Certifications.jsx
5. Personalize values and interests in Values.jsx
6. Update contact information and social links

### Assets to Add
1. Profile photo for About section
2. Project screenshots/thumbnails
3. Custom favicon (replace vite.svg)
4. Open Graph image for social sharing

### Optional Enhancements
1. Add animations with Framer Motion
2. Implement project filtering/search
3. Add blog section
4. Integrate with a CMS for easy content updates
5. Add Google Analytics
6. Implement contact form backend (currently uses mailto)

## Important Files

### Main Requirements Document
`/dev-context/context.md` - Original project specifications

### Material Design Tokens
`/dev-context/simone-website.css` - MD3 color system (can be integrated for enhanced theming)

## Deployment
The site is ready for deployment on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist/`

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Progressive enhancement approach

## Accessibility Compliance
- WCAG 2.1 AA compliant
- Screen reader tested
- Keyboard navigation fully supported
- Color contrast ratios meet standards

## Performance Targets
- Lighthouse score: 90+ across all metrics
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Mobile optimized