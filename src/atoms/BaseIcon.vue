<template>
  <span
    :class="iconClasses"
    :style="{ fontSize: computedSize }"
    role="img"
    :aria-label="ariaLabel"
  >
    {{ icon }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  icon: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | string
  color?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'inherit'
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'inherit',
})

const iconClasses = computed(() => {
  const baseClasses = 'inline-block'
  
  const colorClasses = {
    primary: 'text-md-light-primary dark:text-md-dark-primary',
    secondary: 'text-md-light-secondary dark:text-md-dark-secondary',
    tertiary: 'text-md-light-tertiary dark:text-md-dark-tertiary',
    error: 'text-md-light-error dark:text-md-dark-error',
    inherit: ''
  }
  
  return [baseClasses, colorClasses[props.color]].join(' ')
})

const computedSize = computed(() => {
  if (typeof props.size === 'string' && !['sm', 'md', 'lg', 'xl'].includes(props.size)) {
    return props.size
  }
  
  const sizeMap = {
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2rem'
  }
  
  return sizeMap[props.size as keyof typeof sizeMap] || sizeMap.md
})
</script>