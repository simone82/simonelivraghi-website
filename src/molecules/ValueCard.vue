<template>
  <BaseCard
variant="default"
:hover="true" class="p-6 h-full flex flex-col"
:class="cardClasses">
    <div class="flex items-center mb-4">
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4 flex-shrink-0"
        :class="iconClasses"
      >
        {{ value.icon }}
      </div>
      <h3 class="text-xl font-semibold text-md-light-primary dark:text-md-dark-primary flex-1">
        {{ value.title }}
      </h3>
    </div>

    <p class="text-md-light-on-surface dark:text-md-dark-on-surface leading-relaxed flex-1">
      {{ value.description }}
    </p>

    <div
      class="mt-4 pt-4 border-t border-md-light-outline-variant dark:border-md-dark-outline-variant"
    >
      <div class="w-full h-2 rounded-full" :class="accentClasses"></div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/atoms/BaseCard.vue'
import type { Value } from '@/types'
import { computed } from 'vue'

interface Props {
  value: Value
}

const props = defineProps<Props>()

const cardClasses = computed(() => {
  return ['group', 'transition-all', 'duration-300']
})

const iconClasses = computed(() => {
  const colorMap = {
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30',
    blue: 'bg-blue-100 dark:bg-blue-900/30',
    purple: 'bg-purple-100 dark:bg-purple-900/30',
    orange: 'bg-orange-100 dark:bg-orange-900/30',
    teal: 'bg-teal-100 dark:bg-teal-900/30',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/30',
  }

  return [
    colorMap[props.value.color as keyof typeof colorMap] ||
      'bg-md-light-primary-container dark:bg-md-dark-primary-container',
    'group-hover:scale-110',
    'transition-transform',
    'duration-300',
  ]
})

const accentClasses = computed(() => {
  const colorMap = {
    emerald: 'bg-gradient-to-r from-emerald-400 to-emerald-600',
    blue: 'bg-gradient-to-r from-blue-400 to-blue-600',
    purple: 'bg-gradient-to-r from-purple-400 to-purple-600',
    orange: 'bg-gradient-to-r from-orange-400 to-orange-600',
    teal: 'bg-gradient-to-r from-teal-400 to-teal-600',
    indigo: 'bg-gradient-to-r from-indigo-400 to-indigo-600',
  }

  return [
    colorMap[props.value.color as keyof typeof colorMap] ||
      'bg-gradient-to-r from-md-light-primary to-md-light-secondary',
    'opacity-70',
    'group-hover:opacity-100',
    'transition-opacity',
    'duration-300',
  ]
})
</script>
