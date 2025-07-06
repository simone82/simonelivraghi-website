/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,vue}',
    './public/**/*.html',
  ],
  darkMode: ['class', '[data-theme="dark"]'],

  // Enable JIT mode for smaller CSS in production
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'monospace'],
        mono: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'monospace'],
      },
      colors: {
        // Material Design 3 Light Theme
        'md-light': {
          primary: 'rgb(0 106 104)',
          'on-primary': 'rgb(255 255 255)',
          'primary-container': 'rgb(0 171 169)',
          'on-primary-container': 'rgb(0 56 55)',
          secondary: 'rgb(58 102 100)',
          'on-secondary': 'rgb(255 255 255)',
          'secondary-container': 'rgb(189 235 233)',
          'on-secondary-container': 'rgb(64 108 106)',
          tertiary: 'rgb(116 76 154)',
          'on-tertiary': 'rgb(255 255 255)',
          'tertiary-container': 'rgb(178 135 218)',
          'on-tertiary-container': 'rgb(68 28 105)',
          error: 'rgb(186 26 26)',
          'on-error': 'rgb(255 255 255)',
          'error-container': 'rgb(255 218 214)',
          'on-error-container': 'rgb(147 0 10)',
          background: 'rgb(245 251 249)',
          'on-background': 'rgb(23 29 28)',
          surface: 'rgb(245 251 249)',
          'on-surface': 'rgb(23 29 28)',
          'surface-variant': 'rgb(215 229 228)',
          'on-surface-variant': 'rgb(60 73 73)',
          outline: 'rgb(108 122 121)',
          'outline-variant': 'rgb(187 201 200)',
          'surface-container-lowest': 'rgb(255 255 255)',
          'surface-container-low': 'rgb(239 245 244)',
          'surface-container': 'rgb(233 239 238)',
          'surface-container-high': 'rgb(227 233 232)',
          'surface-container-highest': 'rgb(222 228 227)',
        },
        // Material Design 3 Dark Theme
        'md-dark': {
          primary: 'rgb(87 217 215)',
          'on-primary': 'rgb(0 55 54)',
          'primary-container': 'rgb(0 171 169)',
          'on-primary-container': 'rgb(0 56 55)',
          secondary: 'rgb(162 207 205)',
          'on-secondary': 'rgb(3 55 54)',
          'secondary-container': 'rgb(33 78 77)',
          'on-secondary-container': 'rgb(145 189 188)',
          tertiary: 'rgb(222 183 255)',
          'on-tertiary': 'rgb(67 27 104)',
          'tertiary-container': 'rgb(178 135 218)',
          'on-tertiary-container': 'rgb(68 28 105)',
          error: 'rgb(255 180 171)',
          'on-error': 'rgb(105 0 5)',
          'error-container': 'rgb(147 0 10)',
          'on-error-container': 'rgb(255 218 214)',
          background: 'rgb(14 20 20)',
          'on-background': 'rgb(222 228 227)',
          surface: 'rgb(14 20 20)',
          'on-surface': 'rgb(222 228 227)',
          'surface-variant': 'rgb(60 73 73)',
          'on-surface-variant': 'rgb(187 201 200)',
          outline: 'rgb(134 147 146)',
          'outline-variant': 'rgb(60 73 73)',
          'surface-container-lowest': 'rgb(9 15 15)',
          'surface-container-low': 'rgb(23 29 28)',
          'surface-container': 'rgb(27 33 32)',
          'surface-container-high': 'rgb(37 43 43)',
          'surface-container-highest': 'rgb(48 54 54)',
        },
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
    require('@tailwindcss/typography'),
  ],

  // Production optimizations
  corePlugins: {
    // Disable unused features for smaller bundle
    preflight: true,
    container: false, // We use custom container classes
    accessibility: true,
    pointerEvents: true,
    visibility: true,
  },

  // Safelist important classes that might be used dynamically
  safelist: [
    // Animation classes that might be applied dynamically
    'animate-fade-in',
    'animate-slide-up',
    'animate-bounce-gentle',
  ],
}
