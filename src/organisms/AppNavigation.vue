<template>
  <header :class="headerClasses">
    <nav class="container relative" role="navigation" aria-label="Main navigation">
      <div class="flex items-center justify-between">
        <!-- Logo/Brand -->
        <a
          href="#home"
          class="text-xl font-bold text-md-light-on-surface dark:text-md-dark-on-surface hover:text-md-light-primary dark:hover:text-md-dark-primary transition-colors duration-200"
          @click.prevent="scrollToSection('home')"
        >
          Simone Livraghi
        </a>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-1">
          <NavigationItem
            v-for="item in navigationItems"
            :key="item.id"
            :href="item.href"
            :label="item.label"
            :is-active="activeSection === item.id"
            @navigate="scrollToSection(item.id)"
          />
        </ul>

        <!-- Mobile Menu Button -->
        <BaseButton
          variant="ghost"
          size="sm"
          class="md:hidden"
          :aria-label="mobileMenuLabel"
          @click="toggleMobileMenu"
        >
          <BaseIcon :icon="mobileMenuOpen ? '✕' : '☰'" size="lg" />
        </BaseButton>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="slide-down">
        <div
          v-if="mobileMenuOpen"
          class="md:hidden absolute left-0 right-0 top-full bg-md-light-surface/95 dark:bg-md-dark-surface/95 backdrop-blur-md shadow-lg border-b border-md-light-outline-variant dark:border-md-dark-outline-variant"
        >
          <ul class="flex flex-col space-y-2 p-4">
            <NavigationItem
              v-for="item in navigationItems"
              :key="item.id"
              :href="item.href"
              :label="item.label"
              :is-active="activeSection === item.id"
              @navigate="handleMobileNavigation(item.id)"
            />
          </ul>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseButton from '@/atoms/BaseButton.vue'
import BaseIcon from '@/atoms/BaseIcon.vue'
import NavigationItem from '@/molecules/NavigationItem.vue'
import { useScrollSpy } from '@/composables/useScrollSpy'
import type { NavigationItem as NavItem } from '@/types'

const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'certifications', label: 'Certifications', href: '#certifications' },
  { id: 'values', label: 'Values', href: '#values' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

const sectionIds = navigationItems.map(item => item.id)
const { activeSection, isScrolled, scrollToSection } = useScrollSpy(sectionIds)

const mobileMenuOpen = ref(false)

const headerClasses = computed(() => {
  const baseClasses = 'fixed top-0 left-0 right-0 z-40 transition-all duration-300'
  const backgroundClasses =
    isScrolled.value || mobileMenuOpen.value
      ? 'bg-md-light-surface/95 dark:bg-md-dark-surface/95 backdrop-blur-md shadow-md border-b border-md-light-outline-variant dark:border-md-dark-outline-variant'
      : 'bg-transparent'
  const paddingClasses = isScrolled.value ? 'py-3' : 'py-6'

  return [baseClasses, backgroundClasses, paddingClasses].join(' ')
})

const mobileMenuLabel = computed(() => {
  return mobileMenuOpen.value ? 'Close menu' : 'Open menu'
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleMobileNavigation = (sectionId: string) => {
  scrollToSection(sectionId)
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
