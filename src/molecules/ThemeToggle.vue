<template>
  <BaseButton
    variant="ghost"
    size="md"
    :aria-label="themeToggleLabel"
    :title="themeToggleLabel"
    class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg backdrop-blur-sm"
    @click="toggleTheme"
  >
    <BaseIcon :icon="themeIcon" size="lg" aria-hidden="true" />
  </BaseButton>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '@/atoms/BaseButton.vue'
import BaseIcon from '@/atoms/BaseIcon.vue'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const themeIcon = computed(() => {
  return isDark.value ? '☀️' : '🌙'
})

const themeToggleLabel = computed(() => {
  return `Switch to ${isDark.value ? 'light' : 'dark'} mode`
})
</script>
