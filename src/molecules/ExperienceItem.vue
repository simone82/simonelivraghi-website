<template>
  <div class="relative pl-20">
    <!-- Timeline dot -->
    <div
      class="absolute left-6 top-4 w-4 h-4 bg-md-light-primary dark:bg-md-dark-primary rounded-full border-4 border-md-light-surface dark:border-md-dark-surface"
    ></div>

    <BaseCard variant="default" :hover="true" class="p-6">
      <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-md-light-primary dark:text-md-dark-primary mb-1">
            {{ experience.title }}
          </h3>
          <h4 class="text-lg font-medium text-md-light-secondary dark:text-md-dark-secondary mb-1">
            {{ experience.company }}
          </h4>
          <p class="text-sm text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant">
            {{ experience.location }}
          </p>
        </div>
        <div class="mt-2 md:mt-0 md:ml-4">
          <span
            class="px-3 py-1 text-sm font-medium bg-md-light-primary-container dark:bg-md-dark-primary-container text-md-light-on-primary-container dark:text-md-dark-on-primary-container rounded-full"
          >
            {{ experience.period }}
          </span>
        </div>
      </div>

      <p class="text-md-light-on-surface dark:text-md-dark-on-surface mb-4">
        {{ experience.description }}
      </p>

      <div v-if="experience.achievements && experience.achievements.length > 0" class="mb-4">
        <h5 class="text-sm font-semibold text-md-light-primary dark:text-md-dark-primary mb-2">
          Key Achievements:
        </h5>
        <ul class="space-y-1">
          <li
            v-for="(achievement, index) in experience.achievements"
            :key="index"
            class="text-sm text-md-light-on-surface dark:text-md-dark-on-surface flex items-start"
          >
            <span class="text-md-light-primary dark:text-md-dark-primary mr-2 mt-1">•</span>
            {{ achievement }}
          </li>
        </ul>
      </div>

      <div v-if="experience.skills && experience.skills.length > 0" class="mt-4">
        <h5 class="text-sm font-semibold text-md-light-primary dark:text-md-dark-primary mb-2">
          Technologies & Skills:
        </h5>
        <div class="flex flex-wrap gap-2">
          <SkillTag
            v-for="skill in experience.skills"
            :key="skill"
            :skill="skill"
            variant="small"
          />
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import BaseCard from '@/atoms/BaseCard.vue'
import SkillTag from '@/atoms/SkillTag.vue'
import type { Experience } from '@/types'

interface Props {
  experience: Experience
  index: number
}

defineProps<Props>()
</script>