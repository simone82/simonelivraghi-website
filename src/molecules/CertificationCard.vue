<template>
  <BaseCard
    variant="default"
    :hover="true"
    class="p-6"
    :class="{ 'ring-2 ring-md-light-tertiary dark:ring-md-dark-tertiary': certification.special }"
  >
    <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
      <div class="flex-1">
        <h5 class="text-lg font-semibold text-md-light-primary dark:text-md-dark-primary mb-2">
          {{ certification.title }}
          <span
            v-if="certification.special"
            class="ml-2 text-sm font-normal text-md-light-tertiary dark:text-md-dark-tertiary"
          >
            ⭐ Industry Certification
          </span>
        </h5>
        <p
          v-if="certification.location"
          class="text-sm text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant mb-2"
        >
          📍 {{ certification.location }}
        </p>
      </div>
    </div>

    <p class="text-md-light-on-surface dark:text-md-dark-on-surface mb-4">
      {{ certification.description }}
    </p>

    <div v-if="certification.skills && certification.skills.length > 0">
      <h6 class="text-sm font-semibold text-md-light-primary dark:text-md-dark-primary mb-2">
        Skills & Technologies:
      </h6>
      <div class="flex flex-wrap gap-2">
        <SkillTag
          v-for="skill in certification.skills"
          :key="skill"
          :skill="skill"
          variant="small"
        />
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/atoms/BaseCard.vue'
import SkillTag from '@/atoms/SkillTag.vue'
import type { Certification } from '@/types'

interface Props {
  certification: Certification
  providerName: string
}

defineProps<Props>()
</script>
