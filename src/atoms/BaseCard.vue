<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'outlined'
  hover?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  hover: true,
  clickable: false,
})

const cardClasses = computed(() => {
  const baseClasses = 'card'
  
  const variantClasses = {
    default: '',
    elevated: 'shadow-xl',
    outlined: 'border-2 border-md-light-outline dark:border-md-dark-outline'
  }
  
  const interactionClasses = [
    props.hover ? 'hover:shadow-xl hover:bg-md-light-surface-container-high dark:hover:bg-md-dark-surface-container-high' : '',
    props.clickable ? 'cursor-pointer' : ''
  ].filter(Boolean)
  
  return [
    baseClasses,
    variantClasses[props.variant],
    ...interactionClasses
  ].join(' ')
})
</script>