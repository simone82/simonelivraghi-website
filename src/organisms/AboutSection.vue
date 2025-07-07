<template>
  <section
    id="about"
    class="section bg-md-light-surface-container/30 dark:bg-md-dark-surface-container/30"
  >
    <div class="container">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-16 text-md-light-primary dark:text-md-dark-primary"
        >
          About Me
        </h2>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="space-y-6">
            <div class="prose prose-lg max-w-none">
              <p
                class="text-lg text-md-light-on-surface dark:text-md-dark-on-surface leading-relaxed"
              >
                I'm a highly experienced <strong>AI Systems Engineer</strong> and
                <strong>Software Architect</strong>
                with 15+ years of expertise in designing and implementing distributed,
                high-scalability architectures and AI-driven platforms.
              </p>

              <p
                class="text-lg text-md-light-on-surface dark:text-md-dark-on-surface leading-relaxed"
              >
                Currently serving as AI Software Development Lifecycle Lead at Globant, I specialize
                in microservices, event-driven architectures, big data pipelines, and enterprise AI
                agentic systems. My work includes architecting the FIFA+ platform serving millions
                of users globally.
              </p>

              <p
                class="text-lg text-md-light-on-surface dark:text-md-dark-on-surface leading-relaxed"
              >
                My expertise includes integrating AI-powered development tools like LangChain,
                LangGraph, and Model Context Protocol (MCP) services. I hold Google Widevine
                certification for modular DRM and DASH streaming, obtained at Google headquarters in
                Kirkland, WA.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
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
              <BaseButton
                size="lg"
                tag="a"
                href="/cv-20250706.pdf"
                download="Simone_Livraghi_CV.pdf"
              >
                Download CV
              </BaseButton>
            </div>
          </div>

          <!-- Statistics -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <BaseCard
              v-for="stat in statistics"
              :key="stat.label"
              class="text-center p-8"
              :hover="true"
            >
              <div
                class="text-3xl md:text-4xl font-bold text-md-light-primary dark:text-md-dark-primary mb-2"
              >
                {{ stat.value }}
              </div>
              <div
                class="text-sm md:text-base text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant"
              >
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
  email: 'simone.livraghi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/slivraghi',
  github: 'https://github.com/simone82',
  bio: 'Experienced AI Systems Engineer and Software Architect with over 15 years in the technology industry.',
}

const statistics = [
  { value: '15+', label: 'Years Experience' },
  { value: 'FIFA+', label: 'Platform Architect' },
  { value: 'Globant', label: 'AI Lifecycle Lead' },
  { value: 'Widevine', label: 'Google Certified' },
  { value: '10+', label: 'AI Tools Integrated' },
  { value: 'Milan', label: 'Based In Italy' },
]
</script>
