<template>
  <BaseCard variant="default" :hover="true" class="p-6 h-full">
    <div class="flex items-start justify-between mb-3">
      <div class="flex-1">
        <h4 class="text-lg font-semibold text-md-light-primary dark:text-md-dark-primary mb-1">
          {{ education.degree }}
        </h4>
        <h5 class="text-md font-medium text-md-light-secondary dark:text-md-dark-secondary mb-1">
          {{ education.institution }}
        </h5>
        <p
          class="text-sm text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant mb-2"
        >
          {{ education.location }}
        </p>
      </div>
      <span
        class="px-3 py-1 text-sm font-medium bg-md-light-primary-container dark:bg-md-dark-primary-container text-md-light-on-primary-container dark:text-md-dark-on-primary-container rounded-full flex-shrink-0"
      >
        {{ education.period }}
      </span>
    </div>

    <div v-if="education.grade" class="mb-3">
      <span
        class="px-2 py-1 text-xs font-semibold bg-md-light-tertiary-container dark:bg-md-dark-tertiary-container text-md-light-on-tertiary-container dark:text-md-dark-on-tertiary-container rounded-full"
      >
        Grade: {{ education.grade }}
      </span>
    </div>

    <p class="text-sm text-md-light-on-surface dark:text-md-dark-on-surface mb-3">
      {{ education.description }}
    </p>

    <div
      v-if="education.thesis"
      class="mt-4 pt-3 border-t border-md-light-outline-variant dark:border-md-dark-outline-variant"
    >
      <h6 class="text-xs font-semibold text-md-light-primary dark:text-md-dark-primary mb-1">
        Thesis:
      </h6>
      <p class="text-xs text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant">
        "{{ education.thesis }}"
      </p>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/atoms/BaseCard.vue'
import type { Education } from '@/types'

interface Props {
  education: Education
}

defineProps<Props>()
</script>
