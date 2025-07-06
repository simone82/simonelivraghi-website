<template>
  <section
    id="skills"
    class="section bg-md-light-surface-container/30 dark:bg-md-dark-surface-container/30"
  >
    <div class="container">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-8 text-md-light-primary dark:text-md-dark-primary"
        >
          Skills & Competences
        </h2>

        <p
          class="text-lg text-center text-md-light-on-surface dark:text-md-dark-on-surface mb-12 max-w-3xl mx-auto"
        >
          Over 15 years of experience in software architecture, AI systems engineering, and
          distributed systems. Specialized in building scalable, event-driven architectures and
          AI-driven platforms for global enterprises.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BaseCard
            v-for="category in skillCategories"
            :key="category.title"
            variant="default"
            :hover="true"
            class="p-6"
          >
            <SkillCategory :category="category" />
          </BaseCard>
        </div>

        <div class="mt-12 text-center">
          <p
            class="text-sm text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant"
          >
            Always learning and exploring new technologies to stay at the forefront of innovation.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseCard from '@/atoms/BaseCard.vue'
import SkillCategory from '@/molecules/SkillCategory.vue'
import type { SkillCategory as SkillCategoryType } from '@/types'
import { useAnalytics } from '@/composables/useAnalytics'
import { onMounted } from 'vue'

const { trackSectionView } = useAnalytics()

// Skills data organized by categories
const skillCategories: SkillCategoryType[] = [
  {
    title: 'Technical Skills',
    skills: [
      'Kotlin',
      'Java',
      'Python',
      'Golang',
      'JavaScript',
      'TypeScript',
      'Apache Kafka (Confluent)',
      'Apache Flink',
      'Apache Beam',
      'Google Looker',
      'Google BigQuery',
      'Apache Druid',
      'Elasticsearch',
      'MongoDB',
      'Kubernetes',
      'Knative',
      'ArgoCD',
      'Tekton',
      'Jenkins',
      'AWS S3',
      'AWS Lambda',
      'AWS API Gateway',
      'Microservice Architecture',
      'RESTful APIs',
      'Event-Driven Architecture',
      'Event Sourcing',
      'CQRS',
      'Actor Model',
      'Reactive Systems',
      'OAuth2',
      'Secure Streaming (DRM, DASH)',
      'Test-Driven Development',
      'CI/CD',
      'OpenTelemetry',
      'Security & Compliance',
    ],
  },
  {
    title: 'AI & Development Tools',
    skills: [
      'LangChain',
      'LangGraph',
      'Globant Enterprise AI',
      'Cursor.AI',
      'Trae',
      'GitHub Copilot Agent',
      'Cline',
      'Kilo',
      'JetBrains Junie',
      'Claudie-Code',
      'Gemini-CLI',
      'Globant CODA - Neo Agent',
      'Model Context Protocol (MCP)',
      'Prompt Engineering',
      'Context Engineering',
      'RAG Systems',
      'AI Agent Development',
      'ReAct-based Components',
      'Agentic Systems',
      'AI-powered Development',
    ],
  },
  {
    title: 'AdTech & Analytics',
    skills: [
      'Google Merchant',
      'Google Ads',
      'Facebook Campaign Manager',
      'Google AdManager',
      'Google Analytics',
      'Performance Marketing',
      'Campaign Optimization',
      'Conversion Tracking',
    ],
  },
  {
    title: 'Organizational Skills',
    skills: [
      'Team Leadership',
      'Agile Methodologies',
      'SCRUM',
      'Stakeholder Management',
      'Requirement Management',
      'Project Coordination',
      'Information Flow Management',
      'Remote Team Facilitation',
      'Workshop Organization',
      'Technical Training',
      'Test-Driven Development',
      'Iterative Delivery',
    ],
  },
  {
    title: 'Social Skills',
    skills: [
      'Excellent Communication',
      'Multilingual (Italian, English)',
      'Teamwork & Collaboration',
      'Mentoring & Coaching',
      'Cross-cultural Awareness',
      'Adaptability',
      'Team Socialization',
      'Remote Collaboration',
      'Public Speaking',
      'Technical Translation',
      'Inclusive Team Building',
    ],
  },
  {
    title: 'Artistic Skills',
    skills: [
      'Creative Problem Solving',
      'Design Thinking',
      'Technical Writing',
      'Documentation Creation',
      'UI/UX Design (Basic)',
      'Interface Design',
      'Music (Bass Guitar)',
      'Live Performance',
      'Creative Content Creation',
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      'Continuous Learning',
      'Technology Evangelism',
      'Early Technology Adoption',
      'Green IT & Sustainability',
      'Innovation Promotion',
      'Best Practices Advocacy',
      'Rapid Technology Adoption',
      'Professional Development',
      'Knowledge Sharing',
      'Technical Leadership',
    ],
  },
]

onMounted(() => {
  trackSectionView('skills')
})
</script>