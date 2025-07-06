<template>
  <div>
    <HeroSection />
    <AboutSection />
    <!-- Other sections will be added here -->
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
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
import ExperienceSection from '@/organisms/ExperienceSection.vue'
import ProjectsSection from '@/organisms/ProjectsSection.vue'
import ContactSection from '@/organisms/ContactSection.vue'
</script>
