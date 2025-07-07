import { onMounted, onUnmounted } from 'vue'
import { useAnalytics } from './useAnalytics'

export function useSectionTracking() {
  const { trackSectionView } = useAnalytics()

  let observer: IntersectionObserver | null = null
  const trackedSections = new Set<string>()

  const initializeSectionTracking = () => {
    // Clean up existing observer
    if (observer) {
      observer.disconnect()
    }

    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id

            // Only track each section once per session
            if (sectionId && !trackedSections.has(sectionId)) {
              trackedSections.add(sectionId)
              trackSectionView(sectionId)
            }
          }
        })
      },
      {
        threshold: 0.5, // Track when 50% of section is visible
        rootMargin: '0px 0px -10% 0px', // Slightly reduce the detection area
      }
    )

    // Find all section elements and observe them
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => {
      observer?.observe(section)
    })
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onMounted(() => {
    // Delay initialization to ensure DOM is ready
    setTimeout(initializeSectionTracking, 100)
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    initializeSectionTracking,
    cleanup,
  }
}
