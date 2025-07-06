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
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  href?: string
  to?: string | object
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  href: undefined,
  to: undefined,
  tag: 'button',
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const buttonClasses = computed(() => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline:
      'border-2 border-md-light-outline dark:border-md-dark-outline text-md-light-primary dark:text-md-dark-primary hover:bg-md-light-primary hover:text-md-light-on-primary dark:hover:bg-md-dark-primary dark:hover:text-md-dark-on-primary',
    ghost:
      'text-md-light-primary dark:text-md-dark-primary hover:bg-md-light-surface-container-high dark:hover:bg-md-dark-surface-container-high',
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

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
