<template>
  <section id="about" class="section bg-md-light-surface-container/30 dark:bg-md-dark-surface-container/30">
    <div class="container">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-md-light-primary dark:text-md-dark-primary">
          About Me
        </h2>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="space-y-6">
            <div class="prose prose-lg max-w-none">
              <p class="text-lg text-md-light-on-surface dark:text-md-dark-on-surface leading-relaxed">
                I'm an experienced AI Systems Engineer and Software Architect with over 10 years 
                in the technology industry. My passion lies in designing and implementing 
                innovative AI-driven solutions that solve complex business challenges.
              </p>
              
              <p class="text-lg text-md-light-on-surface dark:text-md-dark-on-surface leading-relaxed">
                Throughout my career, I've led cross-functional teams, architected scalable 
                systems, and delivered cutting-edge AI applications across various industries. 
                My expertise spans from low-level system design to high-level architecture.
              </p>
              
              <p class="text-lg text-md-light-on-surface dark:text-md-dark-on-surface leading-relaxed">
                I believe in continuous learning and staying at the forefront of technological 
                advancement. When I'm not coding or architecting systems, you'll find me 
                exploring the latest AI research papers and mentoring aspiring engineers.
              </p>
            </div>

            <BaseButton
              variant="outline"
              size="lg"
              tag="a"
              :href="personalInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full CV on LinkedIn
            </BaseButton>
          </div>

          <!-- Statistics -->
          <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            <BaseCard
              v-for="stat in statistics"
              :key="stat.label"
              class="text-center p-8"
              :hover="true"
            >
              <div class="text-3xl md:text-4xl font-bold text-md-light-primary dark:text-md-dark-primary mb-2">
                {{ stat.value }}
              </div>
              <div class="text-sm md:text-base text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant">
                {{ stat.label }}
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/atoms/BaseButton.vue'
import BaseCard from '@/atoms/BaseCard.vue'
import type { PersonalInfo } from '@/types'

const personalInfo: PersonalInfo = {
  name: 'Simone Livraghi',
  title: 'AI Systems Engineer & Software Architect',
  location: 'Milan, Italy',
  email: 'simone@example.com',
  linkedin: 'https://linkedin.com/in/simonelivraghi',
  github: 'https://github.com/simonelivraghi',
  bio: 'Experienced AI Systems Engineer and Software Architect with over 10 years in the technology industry.',
}

const statistics = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '15+', label: 'Teams Led' },
]
</script>