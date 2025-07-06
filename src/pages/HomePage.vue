<template>
  <div>
    <HeroSection />
    <AboutSection />
    <!-- Other sections will be added here -->
    <SkillsSection />
    <div id="experience" class="section">
      <div class="container">
        <h2 class="text-3xl font-bold text-center text-md-light-primary dark:text-md-dark-primary">
          Experience - Coming Soon
        </h2>
      </div>
    </div>
    <div id="projects" class="section">
      <div class="container">
        <h2 class="text-3xl font-bold text-center text-md-light-primary dark:text-md-dark-primary">
          Projects - Coming Soon
        </h2>
      </div>
    </div>
    <div id="certifications" class="section">
      <div class="container">
        <h2 class="text-3xl font-bold text-center text-md-light-primary dark:text-md-dark-primary">
          Certifications - Coming Soon
        </h2>
      </div>
    </div>
    <div id="values" class="section">
      <div class="container">
        <h2 class="text-3xl font-bold text-center text-md-light-primary dark:text-md-dark-primary">
          Values - Coming Soon
        </h2>
      </div>
    </div>
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/organisms/HeroSection.vue'
import AboutSection from '@/organisms/AboutSection.vue'
import SkillsSection from '@/organisms/SkillsSection.vue'
import ContactSection from '@/organisms/ContactSection.vue'
</script>
