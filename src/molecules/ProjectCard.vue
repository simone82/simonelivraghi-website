<template>
  <BaseCard variant="default" :hover="true" class="p-6 h-full flex flex-col">
    <div class="flex-1">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-xl font-semibold text-md-light-primary dark:text-md-dark-primary">
          {{ project.title }}
        </h3>
        <span
          class="px-2 py-1 text-xs font-medium bg-md-light-tertiary-container dark:bg-md-dark-tertiary-container text-md-light-on-tertiary-container dark:text-md-dark-on-tertiary-container rounded-full"
        >
          {{ project.category }}
        </span>
      </div>

      <p class="text-md-light-on-surface dark:text-md-dark-on-surface mb-4">
        {{ project.description }}
      </p>

      <div class="mb-4">
        <h4 class="text-sm font-semibold text-md-light-primary dark:text-md-dark-primary mb-2">
          Technologies:
        </h4>
        <div class="flex flex-wrap gap-2">
          <SkillTag
            v-for="tech in project.technologies"
            :key="tech"
            :skill="tech"
            variant="small"
          />
        </div>
      </div>

      <div v-if="project.highlights && project.highlights.length > 0">
        <h4 class="text-sm font-semibold text-md-light-primary dark:text-md-dark-primary mb-2">
          Key Achievements:
        </h4>
        <ul class="space-y-1">
          <li
            v-for="(highlight, index) in project.highlights"
            :key="index"
            class="text-sm text-md-light-on-surface dark:text-md-dark-on-surface flex items-start"
          >
            <span class="text-md-light-primary dark:text-md-dark-primary mr-2 mt-1">•</span>
            {{ highlight }}
          </li>
        </ul>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/atoms/BaseCard.vue'
import SkillTag from '@/atoms/SkillTag.vue'
import type { Project } from '@/types'

interface Props {
  project: Project
}

defineProps<Props>()
</script>