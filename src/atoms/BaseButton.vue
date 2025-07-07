<template>
  <component
    :is="tag"
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
import { computed, useSlots } from 'vue'
import { useAnalytics } from '@/composables/useAnalytics'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  href?: string
  to?: string | object
  tag?: string
  trackingLabel?: string
  trackingSection?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  href: undefined,
  to: undefined,
  tag: 'button',
  trackingLabel: undefined,
  trackingSection: undefined,
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const slots = useSlots()
const { trackButtonClick, trackExternalLink } = useAnalytics()

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
    // Get button text from slot content or tracking label
    const buttonText =
      props.trackingLabel || (slots.default?.()[0]?.children as string) || 'Unknown Button'

    // Track button click with analytics
    trackButtonClick(buttonText, props.variant, props.trackingSection)

    // Track external links separately
    if (
      props.href &&
      (props.href.startsWith('http') || props.href.startsWith('//')) &&
      !props.href.includes('simonelivraghi.com')
    ) {
      trackExternalLink(props.href, buttonText)
    }

    emit('click', event)
  }
}
</script>
