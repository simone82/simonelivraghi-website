<template>
  <li>
    <a
      :href="href"
      :class="linkClasses"
      @click.prevent="handleClick"
      :aria-current="isActive ? 'page' : undefined"
    >
      {{ label }}
    </a>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  href: string
  label: string
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false,
})

const emit = defineEmits<{
  navigate: [href: string]
}>()

const linkClasses = computed(() => {
  const baseClasses = 'relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200'
  const colorClasses = props.isActive
    ? 'text-md-light-primary dark:text-md-dark-primary'
    : 'text-md-light-on-surface dark:text-md-dark-on-surface hover:text-md-light-primary dark:hover:text-md-dark-primary'
  const bgClasses = props.isActive
    ? 'bg-md-light-primary-container/20 dark:bg-md-dark-primary-container/20'
    : 'hover:bg-md-light-surface-container-high dark:hover:bg-md-dark-surface-container-high'
  
  return [baseClasses, colorClasses, bgClasses].join(' ')
})

const handleClick = () => {
  emit('navigate', props.href)
}
</script>

<style scoped>
.relative::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.2s ease-in-out;
}

.text-md-light-primary::after,
.dark .text-md-dark-primary::after {
  width: 80%;
}
</style>