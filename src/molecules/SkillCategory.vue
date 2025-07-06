<template>
  <div class="skill-category">
    <h3
      class="text-lg font-semibold text-md-light-primary dark:text-md-dark-primary mb-4 text-center"
    >
      {{ category.title }}
    </h3>
    <div class="flex flex-wrap gap-2 justify-center">
      <SkillItem v-for="skill in category.skills" :key="skill" :skill="skill" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillItem from '@/atoms/SkillItem.vue'
import type { SkillCategory } from '@/types'

interface Props {
  category: SkillCategory
}

defineProps<Props>()
</script>
