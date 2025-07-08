<template>
  <section id="projects" v-track-section="'projects'" class="section">
    <div class="container">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-8 text-md-light-primary dark:text-md-dark-primary"
        >
          Featured Projects
        </h2>

        <p
          class="text-lg text-center text-md-light-on-surface dark:text-md-dark-on-surface mb-12 max-w-3xl mx-auto"
        >
          Key projects and achievements from my career in AI systems, distributed architectures, and
          enterprise platforms.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
        </div>

        <div class="mt-12 text-center">
          <p class="text-sm text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant">
            Each project represents a commitment to innovation and technical excellence.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/molecules/ProjectCard.vue'
import type { Project } from '@/types'
import { onMounted } from 'vue'

// Featured projects extracted from career experience
const projects: Project[] = [
  {
    title: 'AI-Powered Development Lifecycle Platform',
    description:
      'Comprehensive AI-driven development platform integrating next-generation AI tools including Cursor.AI, GitHub Copilot Agent, and custom MCP services to revolutionize enterprise software development workflows.',
    technologies: [
      'LangChain',
      'LangGraph',
      'Model Context Protocol (MCP)',
      'Cursor.AI',
      'GitHub Copilot Agent',
      'Prompt Engineering',
      'Context Engineering',
      'Globant Enterprise AI',
    ],
    highlights: [
      'Integrated 10+ AI-powered development tools',
      'Designed MCP integration strategies',
      'Implemented AI agent memory management',
      'Delivered enterprise training workshops',
      'Enhanced development team productivity',
    ],
    category: 'AI & Development',
  },
  {
    title: 'FIFA+ Video Streaming Platform',
    description:
      'Highly scalable distributed architecture supporting millions of concurrent users for FIFA+ video streaming platform with real-time event processing and microservices architecture.',
    technologies: [
      'Go',
      'Python',
      'Kotlin',
      'Apache Kafka',
      'Kubernetes',
      'Knative',
      'Event Sourcing',
      'CQRS',
      'gRPC',
      'Microservices',
    ],
    highlights: [
      'Built for millions of concurrent users',
      'Implemented event-driven architecture',
      'Optimized for high-scale performance',
      'Serverless and container-based deployment',
      'Real-time streaming capabilities',
    ],
    category: 'Streaming & Media',
  },
  {
    title: 'Real-Time Big Data Lambda Architecture',
    description:
      'Modern lambda architecture migration from Hadoop/Spark to Apache Kafka and Flink for real-time big data processing, enabling personalized user experiences and event-driven analytics.',
    technologies: [
      'Apache Kafka',
      'Apache Flink',
      'Apache Beam',
      'Kubernetes',
      'BigQuery',
      'Elasticsearch',
      'Druid.io',
      'Change Data Capture',
      'Event Streaming',
    ],
    highlights: [
      'Migrated from Hadoop to modern streaming',
      'Implemented real-time personalization',
      'Enabled event-driven big data processing',
      'Automated production deployments',
      'Eliminated manual operations',
    ],
    category: 'Big Data & Analytics',
  },
  {
    title: 'Microservices Platform Transformation',
    description:
      'Complete platform redesign from monolithic to microservices architecture using Docker, Apache Kafka, and NoSQL databases with OAuth2 security and RESTful APIs.',
    technologies: [
      'Docker',
      'Apache Kafka',
      'MongoDB',
      'Elasticsearch',
      'OAuth2',
      'RESTful APIs',
      'Python',
      'Microservices',
      'Event Choreography',
    ],
    highlights: [
      'Segmented platform into microservices',
      'Implemented asynchronous communication',
      'Introduced containerization with Docker',
      'Designed OAuth2 authorization system',
      'Enabled independent service deployment',
    ],
    category: 'Architecture & Infrastructure',
  },
  {
    title: 'Secure Video Streaming with DRM',
    description:
      'Advanced video streaming platform with multiple DRM implementations including Google Widevine and Microsoft PlayReady, supporting Android, Chromecast, and DASH streaming.',
    technologies: [
      'Android',
      'Google Widevine DRM',
      'Microsoft PlayReady DRM',
      'DASH Streaming',
      'Chromecast',
      'RESTful APIs',
      'Video Processing',
    ],
    highlights: [
      'Implemented multi-DRM support',
      'Achieved Widevine certification',
      'Built cross-platform streaming',
      'Integrated Chromecast support',
      'Designed secure content delivery',
    ],
    category: 'Media & Security',
  },
  {
    title: 'Enterprise AI Agentic Systems',
    description:
      'Scalable AI agent platform with ReAct-based components, RAG systems, and distributed AI architectures for automating complex business processes in enterprise environments.',
    technologies: [
      'CrewAI',
      'AutoGPT',
      'ReAct Components',
      'RAG Systems',
      'Apache Kafka',
      'Apache Flink',
      'Python',
      'Distributed AI',
      'Enterprise AI',
    ],
    highlights: [
      'Built custom AI agents from scratch',
      'Implemented RAG capabilities',
      'Designed distributed AI architectures',
      'Automated complex business processes',
      'Integrated with enterprise systems',
    ],
    category: 'AI & Automation',
  },
]

onMounted(() => {})
</script>
