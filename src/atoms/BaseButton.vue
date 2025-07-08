<template>
  <component
    :is="tag"
    v-track-button="trackingConfig || undefined"
    :class="buttonClasses"
    :disabled="disabled"
    :href="href"
    :to="to"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  href?: string
  to?: string | object
  tag?: string
  // Analytics tracking props
  trackingSectionId?: string
  trackingButtonId?: string
  trackingButtonText?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  href: undefined,
  to: undefined,
  tag: 'button',
  trackingSectionId: undefined,
  trackingButtonId: undefined,
  trackingButtonText: undefined,
})

const emit = defineEmits<{
  click: [event: Event]
}>()

// Analytics tracking configuration
const trackingConfig = computed(() => {
  // Only return config if all required tracking props are provided
  if (props.trackingSectionId && props.trackingButtonId) {
    return {
      sectionId: props.trackingSectionId,
      buttonId: props.trackingButtonId,
      buttonText: props.trackingButtonText,
    }
  }
  return undefined
})

const buttonClasses = computed(() => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform active:scale-95'

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline:
      'border-2 border-md-light-outline dark:border-md-dark-outline text-md-light-primary dark:text-md-dark-primary hover:bg-md-light-primary hover:text-md-light-on-primary dark:hover:bg-md-dark-primary dark:hover:text-md-dark-on-primary hover:border-md-light-primary dark:hover:border-md-dark-primary hover:shadow-md',
    ghost:
      'text-md-light-primary dark:text-md-dark-primary hover:bg-md-light-surface-container-high dark:hover:bg-md-dark-surface-container-high hover:shadow-sm',
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const disabledClasses = props.disabled
    ? 'opacity-50 cursor-not-allowed active:scale-100'
    : 'cursor-pointer hover:-translate-y-0.5 hover:shadow-lg'

  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    disabledClasses,
  ].join(' ')
})

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>
