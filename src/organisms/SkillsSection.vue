<template>
  <section
    id="skills"
    v-track-section="'skills'"
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

        <div class="space-y-8">
          <div v-for="category in skillCategories" :key="category.title" class="space-y-3">
            <h3
              class="text-lg font-semibold text-md-light-primary dark:text-md-dark-primary border-b border-md-light-outline/20 dark:border-md-dark-outline/20 pb-2"
            >
              {{ category.title }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in category.skills"
                :key="skill"
                class="inline-flex items-center px-3 py-1 text-xs font-medium bg-md-light-surface-container dark:bg-md-dark-surface-container text-md-light-on-surface dark:text-md-dark-on-surface rounded-full hover:bg-md-light-surface-container-high dark:hover:bg-md-dark-surface-container-high transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {{ skill }}
              </span>
            </div>
          </div>
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
import { skillCategories } from '@/data/skills'
import { onMounted } from 'vue'

onMounted(() => {})
</script>
