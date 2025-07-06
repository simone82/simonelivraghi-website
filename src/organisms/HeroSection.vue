<template>
  <section id="home" class="section relative overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-br from-md-light-primary/5 to-md-light-secondary/5 dark:from-md-dark-primary/5 dark:to-md-dark-secondary/5"
    ></div>

    <div class="container relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Greeting -->
        <div class="animate-fade-in">
          <p
            class="text-lg md:text-xl text-md-light-primary dark:text-md-dark-primary font-medium mb-4"
          >
            Hello, I'm
          </p>
        </div>

        <!-- Name -->
        <div class="animate-slide-up">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span
              class="bg-gradient-to-r from-md-light-primary to-md-light-primary-container dark:from-md-dark-primary dark:to-md-dark-primary-container bg-clip-text text-transparent"
            >
              {{ personalInfo.name }}
            </span>
          </h1>
        </div>

        <!-- Title -->
        <div class="animate-slide-up delay-100">
          <p
            class="text-xl md:text-2xl lg:text-3xl font-medium text-md-light-on-surface dark:text-md-dark-on-surface mb-4"
          >
            {{ personalInfo.title }}
          </p>
        </div>

        <!-- Location -->
        <div class="animate-slide-up delay-200">
          <p
            class="text-lg md:text-xl text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant mb-8"
          >
            📍 {{ personalInfo.location }}
          </p>
        </div>

        <!-- Call to Action Buttons -->
        <div class="animate-slide-up delay-300">
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <BaseButton size="lg" class="w-full sm:w-auto" @click="scrollToContact">
              Get in Touch
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="w-full sm:w-auto"
              @click="scrollToProjects"
            >
              View My Work
            </BaseButton>
          </div>
        </div>

        <!-- Social Links -->
        <div class="animate-slide-up delay-400">
          <div class="flex justify-center gap-6">
            <a
              :href="personalInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 rounded-lg hover:bg-md-light-surface-container dark:hover:bg-md-dark-surface-container transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <BrandLogo brand="linkedin" size="xl" />
              <span class="sr-only">LinkedIn</span>
            </a>
            <a
              :href="personalInfo.github"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 rounded-lg hover:bg-md-light-surface-container dark:hover:bg-md-dark-surface-container transition-all duration-200 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <BrandLogo brand="github" size="xl" />
              <span class="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
      <ScrollIndicator 
        size="xl" 
        @click="scrollToAbout"
        aria-label="Scroll down to learn more"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/atoms/BaseButton.vue'
import BaseIcon from '@/atoms/BaseIcon.vue'
import BrandLogo from '@/atoms/BrandLogo.vue'
import ScrollIndicator from '@/atoms/ScrollIndicator.vue'
import { useScrollSpy } from '@/composables/useScrollSpy'
import type { PersonalInfo } from '@/types'

// This would typically come from a store or API
const personalInfo: PersonalInfo = {
  name: 'Simone Livraghi',
  title: 'AI Systems Engineer & Software Architect',
  location: 'Milan, Italy',
  email: 'simone.livraghi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/slivraghi',
  github: 'https://github.com/simonelivraghi',
  bio: 'Experienced AI Systems Engineer and Software Architect with over 10 years in the technology industry.',
}

const { scrollToSection } = useScrollSpy([])

const scrollToContact = () => scrollToSection('contact')
const scrollToProjects = () => scrollToSection('projects')
const scrollToAbout = () => scrollToSection('about')
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 1s ease-out;
}

.delay-100 {
  animation-delay: 0.1s;
  animation-fill-mode: both;
}

.delay-200 {
  animation-delay: 0.2s;
  animation-fill-mode: both;
}

.delay-300 {
  animation-delay: 0.3s;
  animation-fill-mode: both;
}

.delay-400 {
  animation-delay: 0.4s;
  animation-fill-mode: both;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
