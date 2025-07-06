import { ref, watch, onMounted } from 'vue'
import type { Theme } from '@/types'

const theme = ref<Theme>('auto')
const isDark = ref(false)

export function useTheme() {
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    applyTheme()
  }

  const toggleTheme = () => {
    const newTheme = isDark.value ? 'light' : 'dark'
    setTheme(newTheme)
  }

  const applyTheme = () => {
    const root = document.documentElement
    
    if (theme.value === 'auto') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = systemDark
    } else {
      isDark.value = theme.value === 'dark'
    }
    
    if (isDark.value) {
      root.classList.add('dark')
      root.setAttribute('data-theme', 'dark')
    } else {
      root.classList.remove('dark')
      root.setAttribute('data-theme', 'light')
    }
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && ['light', 'dark', 'auto'].includes(savedTheme)) {
      theme.value = savedTheme
    } else {
      theme.value = 'auto'
    }
    applyTheme()
  }

  // Watch for system theme changes
  const setupSystemThemeWatcher = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', () => {
      if (theme.value === 'auto') {
        applyTheme()
      }
    })
  }

  onMounted(() => {
    initTheme()
    setupSystemThemeWatcher()
  })

  watch(theme, applyTheme)

  return {
    theme: readonly(theme),
    isDark: readonly(isDark),
    setTheme,
    toggleTheme,
  }
}

function readonly<T>(ref: any): Readonly<T> {
  return ref
}