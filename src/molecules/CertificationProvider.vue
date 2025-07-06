<template>
  <div class="mb-8">
    <h4 class="text-xl font-semibold text-md-light-primary dark:text-md-dark-primary mb-6">
      {{ provider.name }}
    </h4>
    
    <div class="grid gap-6">
      <CertificationCard
        v-for="(certification, index) in provider.certifications"
        :key="index"
        :certification="certification"
        :provider-name="provider.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CertificationCard from '@/molecules/CertificationCard.vue'
import type { CertificationProvider } from '@/types'

interface Props {
  provider: CertificationProvider
}

defineProps<Props>()
</script>