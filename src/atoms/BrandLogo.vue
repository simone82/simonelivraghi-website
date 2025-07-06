<template>
  <div :class="containerClasses">
    <img
      v-if="!showDualGitHub"
      :src="logoSrc"
      :alt="altText"
      :class="logoClasses"
      @error="onImageError"
    />
    <!-- GitHub with dual theme support -->
    <div v-else class="relative w-full h-full flex items-center justify-center">
      <img
        :src="lightLogoSrc"
        :alt="altText"
        :class="[...logoClasses, 'dark:hidden']"
        @error="onImageError"
      />
      <img
        :src="darkLogoSrc"
        :alt="altText"
        :class="[...logoClasses, 'hidden', 'dark:block']"
        @error="onImageError"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  brand: 'linkedin' | 'github' | 'gmail'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'monochrome'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'default',
})

const imageError = ref(false)

const showDualGitHub = computed(() => props.brand === 'github' && !imageError.value)

const logoSrc = computed(() => {
  if (imageError.value) {
    // Fallback to emoji if image fails to load
    const fallbacks = {
      linkedin: '💼',
      github: '🐙',
      gmail: '📧',
    }
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <text x="12" y="16" text-anchor="middle" font-size="14">${fallbacks[props.brand]}</text>
      </svg>
    `)}`
  }

  const logoMap = {
    linkedin: '/LI-Logo.png',
    github: '/GitHub_Lockup_Light.svg', // Default to light for single image use
    gmail: '/gmail.webp',
  }

  return logoMap[props.brand]
})

const lightLogoSrc = computed(() => '/GitHub_Lockup_Light.svg')
const darkLogoSrc = computed(() => '/GitHub_Lockup_Dark.svg')

const altText = computed(() => {
  const altMap = {
    linkedin: 'LinkedIn',
    github: 'GitHub',
    gmail: 'Gmail',
  }
  return altMap[props.brand]
})

const logoClasses = computed(() => {
  const baseClasses = [
    'object-contain',
    'transition-all',
    'duration-200',
  ]

  // All logos use consistent height with auto width to maintain aspect ratio
  const sizeClasses = {
    sm: ['h-4', 'w-auto', 'max-w-12'],
    md: ['h-6', 'w-auto', 'max-w-16'],
    lg: ['h-8', 'w-auto', 'max-w-20'],
    xl: ['h-10', 'w-auto', 'max-w-24'],
  }

  const variantClasses = {
    default: ['filter-none'],
    monochrome: ['filter', 'grayscale', 'hover:grayscale-0'],
  }

  // Brand-specific adjustments for better visibility
  const brandSpecificClasses = []
  
  // Gmail logo might need slightly larger size to be more visible
  if (props.brand === 'gmail') {
    const gmailSizeClasses = {
      sm: ['h-5', 'w-auto', 'max-w-12'], // Slightly larger
      md: ['h-7', 'w-auto', 'max-w-16'], // Slightly larger
      lg: ['h-9', 'w-auto', 'max-w-20'], // Slightly larger
      xl: ['h-11', 'w-auto', 'max-w-24'], // Slightly larger
    }
    return [
      ...baseClasses,
      ...gmailSizeClasses[props.size],
      ...variantClasses[props.variant],
      ...brandSpecificClasses,
    ]
  }

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...variantClasses[props.variant],
    ...brandSpecificClasses,
  ]
})

const containerClasses = computed(() => {
  const baseContainerClasses = [
    'flex',
    'items-center',
    'justify-center',
    'min-w-fit',
  ]

  // Container sizes to ensure consistent minimum space
  const containerSizeClasses = {
    sm: ['min-h-[16px]'],
    md: ['min-h-[24px]'],
    lg: ['min-h-[32px]'],
    xl: ['min-h-[40px]'],
  }

  return [
    ...baseContainerClasses,
    ...containerSizeClasses[props.size],
  ]
})

const onImageError = () => {
  imageError.value = true
}
</script>