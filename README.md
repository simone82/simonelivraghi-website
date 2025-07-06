# Simone Livraghi - Personal Website

A modern, responsive personal portfolio website built with React and Vite.

## 🚀 Features

- **Single Page Application** with smooth scroll navigation
- **8 Comprehensive Sections**: Home, About, Skills, Experience, Projects, Certifications, Values, Contact
- **Dark/Light Mode** with system preference detection
- **Fully Responsive** design for all devices
- **SEO Optimized** with meta tags and structured data
- **Accessible** - WCAG 2.1 AA compliant
- **Fast Performance** with Vite build system
- **Material Design 3** inspired UI

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Custom CSS with CSS Variables
- **SEO**: React Helmet Async
- **Font**: Inter (Google Fonts)
- **Icons**: Unicode emojis

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/simonelivraghi/simonelivraghi.com.git

# Navigate to project directory
cd simonelivraghi.com

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
simonelivraghi.com/
├── src/
│   ├── components/     # React components
│   ├── styles/        # Global styles and variables
│   ├── hooks/         # Custom React hooks
│   └── App.jsx        # Main app component
├── dev-context/       # Project documentation
├── public/            # Static assets
├── package.json       # Project configuration
├── vite.config.js     # Vite configuration
└── index.html         # HTML entry point
```

## 🎨 Customization

### Update Content
All components use placeholder content that can be easily replaced:
1. Edit component files in `src/components/`
2. Update personal information, experience, projects, etc.
3. Replace social media links and contact details

### Styling
- Colors are defined in `src/styles/variables.css`
- Global styles in `src/styles/global.css`
- Component-specific styles in each component's CSS file

### Theme
The site supports light and dark modes:
- Automatically detects system preference
- User choice persisted in localStorage
- Toggle button in bottom-right corner

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 768px
  - Desktop: > 768px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Sufficient color contrast ratios
- Screen reader compatible

## 🚀 Deployment

Build the project and deploy the `dist` folder:

```bash
npm run build
```

Compatible with:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Simone Livraghi**
- LinkedIn: [simonelivraghi](https://linkedin.com/in/simonelivraghi)
- GitHub: [simonelivraghi](https://github.com/simonelivraghi)

---

Built with ❤️ using React and Vite