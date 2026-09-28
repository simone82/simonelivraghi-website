# Simone Livraghi - Personal Website

A modern, production-ready personal portfolio website built with **Vue.js 3, TypeScript, and TailwindCSS**. This project showcases advanced **Context Engineering** principles, demonstrating how structured context and AI-augmented development can create professional, scalable software solutions.

## 🧠 Context Engineering in Action

This project serves as a real-world example of **Context Engineering** principles applied to modern software development. Unlike traditional "vibe coding" approaches, every aspect of this codebase is systematically documented and structured to enable reliable, AI-augmented development workflows.

### What is Context Engineering?

Context engineering is the systematic practice of designing and providing all the information an AI or software agent needs to perform a task reliably. This means not just crafting prompts, but thoughtfully organizing instructions, historical context, project details, data schemas, and external resources so that the AI can make decisions with full situational awareness—not guesswork.

### Why Context Engineering Matters for Augmented Intelligence

**🎯 AI that Understands**: The quality of context you provide is the single biggest factor in the quality of the AI's output. Rich, relevant context lets AI generate tailored, "magical" solutions instead of bland or error-prone code.

**🛡️ Reduces Mistakes and Hallucinations**: Many AI errors are "context failures"—not problems with the AI itself, but with missing or badly structured context. A context-engineered workflow prevents these failures by making sure the AI has everything it needs, exactly when it needs it.

**🏗️ Professional Results at Scale**: With proper context, AI tools can generate code, automate workflows, and even design architectures that meet real business requirements, audit standards, and performance constraints.

### From Vibe Coding to Professional Engineering

"Vibe coding" might feel creative, but in reality, it's a risk—decisions are undocumented, context is lost, and knowledge is trapped in developers' heads. This leads to:

- ❌ Inconsistent results
- ❌ Fragile systems  
- ❌ Difficult onboarding for new team members
- ❌ Poor reproducibility and scalability

In contrast, context engineering provides:

- ✅ **Repeatability**: Anyone (including your AI agents) can pick up where someone else left off
- ✅ **Auditability**: You can trace why a decision was made and what information it was based on
- ✅ **Agility**: As requirements change, you adjust the context—not rewrite everything from scratch
- ✅ **Scalability**: Well-structured context enables both human and AI teammates to collaborate efficiently, no matter how complex the project

### Context Engineering = Augmented Intelligence

When you practice context engineering, you aren't just helping an AI assistant write code—you're designing an augmented intelligence system where humans and AI can co-create, solve complex problems, and deliver production-grade software faster and more reliably than ever before.

**Stop relying on vibes. Start building with context. That's how you unleash the true potential of AI in professional software development.**

## 🚀 Features

- **Single Page Application** with smooth scroll navigation using Vue Router
- **8 Comprehensive Sections**: Home, About, Skills, Experience, Projects, Certifications, Values, Contact
- **Auto/Light/Dark Mode** with system preference detection and Material Design 3 theming
- **Fully Responsive** design with TailwindCSS utility classes
- **SEO Optimized** with @unhead/vue, meta tags, and structured data
- **GDPR Compliant** with comprehensive cookie consent management
- **Google Analytics 4** integration with privacy-focused configuration
- **Accessible** - WCAG 2.1 AA compliant with semantic HTML
- **Production Optimized** with Vite build system, compression, and bundle splitting
- **Material Design 3** color system with theme switching
- **Type Safe** with TypeScript strict mode and comprehensive type definitions

## 🛠️ Tech Stack

- **Frontend Framework**: Vue.js 3.5.12 with Composition API
- **Language**: TypeScript 5.7.2 with strict type checking
- **Styling**: TailwindCSS 3.4.16 with Material Design 3 tokens
- **Build Tool**: Vite 6.0.5 with Vue plugin and production optimizations
- **State Management**: Pinia 2.3.0 for centralized state
- **Routing**: Vue Router 4.5.0 with HTML5 history mode (nginx falls back to index.html)
- **SEO**: @unhead/vue for meta tag management
- **Font**: JetBrains Mono from Google Fonts
- **Icons**: Official brand logos and SVG assets

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/simone82/simonelivraghi-website.git

# Navigate to project directory
cd simonelivraghi-website

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Development

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

## 📁 Project Structure

```
simonelivraghi.com/
├── src/
│   ├── components/        # Vue components with atomic design
│   ├── composables/       # Vue composables for reusable logic
│   ├── config/           # Configuration files
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── assets/           # Static assets and styles
│   ├── App.vue           # Main Vue component
│   ├── main.ts           # Application entry point
│   └── router/           # Vue Router configuration
├── public/               # Static assets
├── dist/                 # Production build output
├── CLAUDE.md            # Context engineering documentation
├── package.json         # Project configuration
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # TailwindCSS configuration
```

## 🎨 Context Engineering Documentation

This project includes comprehensive context engineering documentation in `CLAUDE.md`:

- **Atomic Design Principles**: Structured component hierarchy
- **Clean Architecture Patterns**: Separation of concerns and dependency inversion
- **Material Design 3 Implementation**: Complete color system with theme variants
- **GDPR Compliance System**: Cookie consent management with granular controls
- **Error Handling Architecture**: Type-safe error management with centralized handling
- **Production Optimization**: Vite configuration with compression and bundle splitting

## 🌍 GDPR Compliance

The project includes a comprehensive GDPR compliance system:

- **Cookie Consent Management**: Granular control over cookie categories
- **Privacy-Focused Analytics**: Google Analytics 4 with IP anonymization
- **User Rights Implementation**: Consent withdrawal and data export capabilities
- **Data Minimization**: Only necessary data collection for stated purposes

## 📱 Responsive Design

- Mobile-first approach with TailwindCSS
- Breakpoints optimized for all devices
- Material Design 3 responsive patterns
- Touch-friendly interactions

## ♿ Accessibility

- Semantic HTML structure with proper ARIA labels
- Keyboard navigation support throughout
- Focus indicators and screen reader compatibility
- WCAG 2.1 AA compliance with proper color contrast ratios

## 🚀 Production Optimizations

- **Bundle Splitting**: Vendor and library chunks for optimal caching
- **Compression**: Gzip and Brotli compression for static assets
- **Security Headers**: Content Security Policy and HSTS
- **SEO Optimization**: Sitemap.xml, robots.txt, and structured data
- **Performance**: ~70% compression ratio, optimized asset loading

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Please read the context engineering documentation in `CLAUDE.md` before contributing.

## 👤 Author

**Simone Livraghi** - AI Systems Engineer & Software Architect
- LinkedIn: [Simone Livraghi](https://linkedin.com/in/slivraghi)
- GitHub: [Simone Livraghi](https://github.com/simone82)
- Location: Milan, Italy

---

Built with ❤️ using **Context Engineering** principles, Vue.js 3, TypeScript, and TailwindCSS.

*This project demonstrates how structured context and AI-augmented development can create professional, scalable software solutions that go beyond traditional "vibe coding" approaches.*