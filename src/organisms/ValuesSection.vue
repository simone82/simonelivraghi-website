<template>
  <section
    id="values"
    class="section bg-md-light-surface-container/30 dark:bg-md-dark-surface-container/30"
  >
    <div class="container">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-8 text-md-light-primary dark:text-md-dark-primary"
        >
          Core Values & Philosophy
        </h2>

        <p
          class="text-lg text-center text-md-light-on-surface dark:text-md-dark-on-surface mb-12 max-w-3xl mx-auto"
        >
          The principles that guide my approach to technology, leadership, and creating meaningful
          impact in every project and collaboration.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard v-for="(value, index) in values" :key="index" :value="value" />
        </div>

        <div class="mt-12 text-center">
          <p class="text-sm text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant">
            These values shape every decision, every line of code, and every collaboration.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ValueCard from '@/molecules/ValueCard.vue'
import type { Value } from '@/types'
import { onMounted } from 'vue'

// Core values data from copywriter
const values: Value[] = [
  {
    title: 'Sustainability & Green IT',
    description:
      'Technology must serve not just business, but the planet. I advocate for infrastructure and solutions that are energy-efficient, future-ready, and environmentally responsible—because every line of code shapes our world.',
    icon: '🌱',
    color: 'emerald',
  },
  {
    title: 'Openness & Standardization',
    description:
      "I believe true progress comes from sharing knowledge. That's why I support open standards like MCP and A2A, ensuring that AI and software can evolve together, transparently and collaboratively.",
    icon: '🤝',
    color: 'blue',
  },
  {
    title: 'Intelligent Design, Lasting Impact',
    description:
      "Systems should be built not just for today, but for tomorrow. I'm committed to creating architectures that are resilient, context-aware, and built to remember—solutions that grow and adapt over time.",
    icon: '🏗️',
    color: 'purple',
  },
  {
    title: 'Continuous Learning & Curiosity',
    description:
      'Stagnation is the enemy of innovation. I champion a mindset of relentless curiosity—experimenting, evolving, and never settling for "good enough." Every challenge is a chance to learn and raise the bar.',
    icon: '🧠',
    color: 'orange',
  },
  {
    title: 'Empowering People',
    description:
      'Technology is about people. From mentoring teams to enabling businesses, my work centers on empowering others to achieve more—through clear communication, shared knowledge, and authentic collaboration.',
    icon: '👥',
    color: 'teal',
  },
  {
    title: 'Integrity & Responsibility',
    description:
      "Whether I'm leading a team or architecting critical systems, I operate with transparency, responsibility, and a commitment to doing what's right—for clients, users, and the wider community.",
    icon: '⚖️',
    color: 'indigo',
  },
]

onMounted(() => {})
</script>
