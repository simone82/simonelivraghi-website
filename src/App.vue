<template>
  <div id="app" class="min-h-screen">
    <AppNavigation />

    <main>
      <RouterView />
    </main>

    <ThemeToggle />
    <CookieConsentBanner />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavigation from '@/organisms/AppNavigation.vue'
import ThemeToggle from '@/molecules/ThemeToggle.vue'
import CookieConsentBanner from '@/organisms/CookieConsentBanner.vue'
import { useTheme } from '@/composables/useTheme'

// Initialize theme system
useTheme()
</script>

<style>
#app {
  font-family: 'JetBrains Mono', 'Fira Code', 'Source Code Pro', monospace;
}
</style>
