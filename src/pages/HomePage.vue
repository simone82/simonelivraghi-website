<template>
  <div>
    <HeroSection />
    <AboutSection />
    <!-- Other sections will be added here -->
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <CertificationsSection />
    <ValuesSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/organisms/HeroSection.vue'
import AboutSection from '@/organisms/AboutSection.vue'
import SkillsSection from '@/organisms/SkillsSection.vue'
import ExperienceSection from '@/organisms/ExperienceSection.vue'
import ProjectsSection from '@/organisms/ProjectsSection.vue'
import CertificationsSection from '@/organisms/CertificationsSection.vue'
import ValuesSection from '@/organisms/ValuesSection.vue'
import ContactSection from '@/organisms/ContactSection.vue'
</script>
