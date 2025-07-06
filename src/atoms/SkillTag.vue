<template>
  <span :class="tagClasses">
    {{ skill }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  skill: string
  variant?: 'default' | 'small'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const tagClasses = computed(() => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'rounded-full',
    'font-medium',
    'bg-md-light-secondary-container',
    'dark:bg-md-dark-secondary-container',
    'text-md-light-on-secondary-container',
    'dark:text-md-dark-on-secondary-container',
    'transition-colors',
    'duration-200',
  ]

  const variantClasses = {
    default: ['px-3', 'py-1', 'text-sm'],
    small: ['px-2', 'py-0.5', 'text-xs'],
  }

  return [...baseClasses, ...variantClasses[props.variant]]
})
</script>
