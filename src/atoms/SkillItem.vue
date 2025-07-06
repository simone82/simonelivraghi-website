<template>
  <div
    class="skill-item bg-md-light-surface-container dark:bg-md-dark-surface-container rounded-lg px-4 py-2 text-sm font-medium text-md-light-on-surface dark:text-md-dark-on-surface hover:bg-md-light-surface-container-high dark:hover:bg-md-dark-surface-container-high transition-colors duration-200"
  >
    {{ skill }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  skill: string
}

defineProps<Props>()
</script>
