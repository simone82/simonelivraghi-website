<template>
  <div :class="containerClasses">
    <!-- GitHub dual-theme logo -->
    <template v-if="brand === 'github'">
      <img
        :src="BRAND_ASSETS.logos.github.dark"
        :alt="altText"
        :class="logoClasses"
        class="dark:hidden"
        @error="onImageError"
      />
      <img
        :src="BRAND_ASSETS.logos.github.light"
        :alt="altText"
        :class="logoClasses"
        class="hidden dark:block"
        @error="onImageError"
      />
    </template>

    <!-- Standard single-theme logos -->
    <img v-else :src="logoSrc" :alt="altText" :class="logoClasses" @error="onImageError" />

    <!-- Fallback emoji for all brands if images fail -->
    <span v-if="imageError" :class="fallbackClasses" role="img" :aria-label="altText">
      {{ BRAND_ASSETS.fallbacks[brand] }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { BRAND_ASSETS } from '@/config'

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

const logoSrc = computed(() => {
  const logo = BRAND_ASSETS.logos[props.brand as keyof typeof BRAND_ASSETS.logos]
  return typeof logo === 'string' ? logo : logo.light
})

const altText = computed(() => {
  const brandNames = {
    linkedin: 'LinkedIn',
    github: 'GitHub',
    gmail: 'Gmail',
  }
  return brandNames[props.brand]
})

const logoClasses = computed(() => {
  const sizeConfig = {
    sm: 'h-4 w-auto max-w-12',
    md: 'h-6 w-auto max-w-16',
    lg: 'h-8 w-auto max-w-20',
    xl: 'h-10 w-auto max-w-24',
  }

  const variantConfig = {
    default: '',
    monochrome: 'filter grayscale hover:grayscale-0',
  }

  return [
    'object-contain transition-all duration-200',
    sizeConfig[props.size],
    variantConfig[props.variant],
  ]
    .filter(Boolean)
    .join(' ')
})

const fallbackClasses = computed(() => {
  const sizeConfig = {
    sm: 'text-sm w-4 h-4',
    md: 'text-base w-6 h-6',
    lg: 'text-lg w-8 h-8',
    xl: 'text-xl w-10 h-10',
  }

  return [
    'flex items-center justify-center transition-all duration-200',
    sizeConfig[props.size],
  ].join(' ')
})

const containerClasses = computed(() => {
  const sizeConfig = {
    sm: 'min-h-4',
    md: 'min-h-6',
    lg: 'min-h-8',
    xl: 'min-h-10',
  }

  return ['flex items-center justify-center min-w-fit', sizeConfig[props.size]].join(' ')
})

const onImageError = () => {
  imageError.value = true
}
</script>
