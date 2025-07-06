<template>
  <section
    id="skills"
    class="section bg-md-light-surface-container/30 dark:bg-md-dark-surface-container/30"
  >
    <div class="container">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-8 text-md-light-primary dark:text-md-dark-primary"
        >
          Skills & Competences
        </h2>

        <p
          class="text-lg text-center text-md-light-on-surface dark:text-md-dark-on-surface mb-12 max-w-3xl mx-auto"
        >
          Over 15 years of experience in software architecture, AI systems engineering, and
          distributed systems. Specialized in building scalable, event-driven architectures and
          AI-driven platforms for global enterprises.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BaseCard
            v-for="category in skillCategories"
            :key="category.title"
            variant="default"
            :hover="true"
            class="p-6"
          >
            <SkillCategory :category="category" />
          </BaseCard>
        </div>

        <div class="mt-12 text-center">
          <p class="text-sm text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant">
            Always learning and exploring new technologies to stay at the forefront of innovation.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseCard from '@/atoms/BaseCard.vue'
import SkillCategory from '@/molecules/SkillCategory.vue'
import { skillCategories } from '@/data/skills'
import { useAnalytics } from '@/composables/useAnalytics'
import { onMounted } from 'vue'

const { trackSectionView } = useAnalytics()

onMounted(() => {
  trackSectionView('skills')
})
</script>
