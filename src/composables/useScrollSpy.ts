import { ref, onMounted, onUnmounted, readonly } from 'vue'

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const activeSection = ref<string>('')
  const isScrolled = ref(false)

  const updateActiveSection = () => {
    const scrollPosition = window.scrollY + offset

    // Update scroll state
    isScrolled.value = window.scrollY > 50

    // Find active section
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i])
      if (section && section.offsetTop <= scrollPosition) {
        activeSection.value = sectionIds[i]
        break
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const sectionTop = section.offsetTop - 80 // Account for fixed navigation
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      })
    }
  }

  onMounted(() => {
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  return {
    activeSection: readonly(activeSection),
    isScrolled: readonly(isScrolled),
    scrollToSection,
  }
}
