<template>
  <section id="certifications" class="section">
    <div class="container">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-8 text-md-light-primary dark:text-md-dark-primary"
        >
          Education & Certifications
        </h2>

        <p
          class="text-lg text-center text-md-light-on-surface dark:text-md-dark-on-surface mb-12 max-w-3xl mx-auto"
        >
          Explore Simone Livraghi's portfolio of advanced certifications, demonstrating his
          commitment to lifelong learning, technical mastery, and innovation in AI, cloud, software
          architecture, and secure content delivery.
        </p>

        <!-- Education Section -->
        <div class="mb-16">
          <h3
            class="text-2xl font-semibold text-center mb-8 text-md-light-secondary dark:text-md-dark-secondary"
          >
            Education
          </h3>
          <div class="grid md:grid-cols-2 gap-6">
            <EducationCard
              v-for="(education, index) in educationData"
              :key="index"
              :education="education"
            />
          </div>
        </div>

        <!-- Certifications Section -->
        <div>
          <h3
            class="text-2xl font-semibold text-center mb-8 text-md-light-secondary dark:text-md-dark-secondary"
          >
            Certifications & Specializations
          </h3>
          <div class="space-y-8">
            <CertificationProvider
              v-for="(provider, index) in certificationProviders"
              :key="index"
              :provider="provider"
            />
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-sm text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant">
            Simone Livraghi continually invests in deepening his expertise to deliver innovation,
            security, and technical excellence in every project.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EducationCard from '@/molecules/EducationCard.vue'
import CertificationProvider from '@/molecules/CertificationProvider.vue'
import type { Education, CertificationProvider as CertificationProviderType } from '@/types'
import { onMounted } from 'vue'

// Education data from CV
const educationData: Education[] = [
  {
    degree: "Master's degree in Computer Science Engineering",
    institution: 'Università degli Studi di Pavia',
    location: 'Pavia, Italy',
    period: 'Oct. 2001 - Jul. 2006',
    grade: '110/110',
    thesis: 'Radiosity algorithms: Computational cost and real-time application.',
    description:
      'Comprehensive computer science and engineering program focusing on software systems, algorithms, and computational methods.',
  },
  {
    degree: 'State Examination for Chartered Engineer',
    institution: 'Università degli Studi di Pavia',
    location: 'Pavia, Italy',
    period: 'Sep. 2006',
    description:
      'Professional engineering certification enabling practice as a chartered engineer in Italy.',
  },
]

// Certifications data organized by provider
const certificationProviders: CertificationProviderType[] = [
  {
    name: 'DeepLearning.AI (Coursera)',
    certifications: [
      {
        title: 'Generative AI with Large Language Models',
        description:
          'Learned advanced methods for designing, fine-tuning, and deploying generative AI applications using cutting-edge language models. Specialized in prompt engineering and integration of LLMs into scalable, real-world systems.',
        skills: [
          'LLMs',
          'Prompt Engineering',
          'Fine-tuning',
          'Generative AI',
          'System Integration',
        ],
      },
      {
        title: 'AI Agentic Design Patterns with AutoGen',
        description:
          'Mastered the architecture of autonomous, tool-augmented AI agents and multi-step workflows, enabling next-generation enterprise solutions.',
        skills: ['AutoGen', 'AI Agents', 'Autonomous Systems', 'Enterprise AI', 'Workflow Design'],
      },
      {
        title: 'Serverless Agentic Workflows with Amazon Bedrock',
        description:
          'Built and managed serverless AI workflows using Amazon Bedrock, focusing on reliability, scalability, and enterprise deployment.',
        skills: ['Amazon Bedrock', 'Serverless', 'AI Workflows', 'AWS', 'Enterprise Deployment'],
      },
      {
        title: 'MCP: Build Rich-Context AI Applications with Anthropic',
        description:
          'Specialized in developing context-rich AI applications using the Model Context Protocol (MCP), connecting tools, data, and dynamic context at scale.',
        skills: [
          'Model Context Protocol',
          'Anthropic',
          'Context Engineering',
          'AI Applications',
          'Scale',
        ],
      },
      {
        title: 'Long-Term Agentic Memory with LangGraph',
        description:
          'Engineered AI agents with persistent, evolving memory using LangGraph—pushing the boundaries of context retention and adaptive intelligence.',
        skills: [
          'LangGraph',
          'Agent Memory',
          'Context Retention',
          'Adaptive Intelligence',
          'Persistent Memory',
        ],
      },
    ],
  },
  {
    name: 'Coursera',
    certifications: [
      {
        title: 'Generative AI with LLMs',
        description:
          'Practical and theoretical training for building and operationalizing AI solutions based on large language models.',
        skills: ['Generative AI', 'LLMs', 'AI Operations', 'ML Engineering', 'AI Solutions'],
      },
    ],
  },
  {
    name: 'Udemy',
    certifications: [
      {
        title: 'LangChain: Develop LLM-Powered Applications',
        description:
          'Gained practical skills in creating advanced AI solutions that bridge LLMs with external data and APIs via LangChain.',
        skills: [
          'LangChain',
          'LLM Applications',
          'API Integration',
          'External Data',
          'AI Development',
        ],
      },
      {
        title: 'Building Recommender Systems with ML and AI',
        description:
          'Designed and deployed recommendation systems leveraging modern AI and ML techniques for personalized user experiences.',
        skills: [
          'Recommender Systems',
          'Machine Learning',
          'Personalization',
          'User Experience',
          'AI/ML',
        ],
      },
      {
        title: 'Event-Driven Architecture: The Complete Guide',
        description:
          'Achieved expertise in event-driven, scalable architectures including event sourcing, CQRS, and real-time streaming patterns.',
        skills: [
          'Event-Driven Architecture',
          'Event Sourcing',
          'CQRS',
          'Real-time Streaming',
          'Scalable Systems',
        ],
      },
      {
        title: "Rust: The Complete Beginner's Guide 2023",
        description:
          'Introduced to systems programming with Rust, emphasizing safety, concurrency, and robust application design.',
        skills: [
          'Rust',
          'Systems Programming',
          'Concurrency',
          'Memory Safety',
          'Application Design',
        ],
      },
      {
        title: 'Exploring Web3 & Blockchain: Key Concepts & Industry Cases',
        description:
          'Explored blockchain and Web3 fundamentals, understanding their impact and applications in enterprise contexts.',
        skills: [
          'Web3',
          'Blockchain',
          'Cryptocurrency',
          'Decentralized Systems',
          'Enterprise Applications',
        ],
      },
      {
        title: 'Management Skills: Build Employee Engagement & Performance',
        description:
          'Enhanced people management skills for building engaged, high-performance teams and driving organizational results.',
        skills: [
          'Management',
          'Employee Engagement',
          'Performance Management',
          'Team Building',
          'Leadership',
        ],
      },
    ],
  },
  {
    name: 'Globant University',
    certifications: [
      {
        title: 'Green IT Principles and Concepts',
        description:
          'Adopted sustainable IT strategies and green infrastructure design principles for eco-friendly enterprise solutions.',
        skills: [
          'Green IT',
          'Sustainable Technology',
          'Infrastructure Design',
          'Environmental Impact',
          'Eco-friendly Solutions',
        ],
      },
      {
        title: 'Blockchain and Cryptocurrencies',
        description:
          'Mastered core blockchain technologies and cryptocurrency concepts relevant to modern software and data architectures.',
        skills: [
          'Blockchain',
          'Cryptocurrency',
          'Distributed Ledger',
          'Smart Contracts',
          'Data Architecture',
        ],
      },
    ],
  },
  {
    name: 'Google Widevine',
    certifications: [
      {
        title: 'Widevine Modular DRM Certification',
        description:
          'Certified in modular Digital Rights Management (DRM) and DASH streaming at Google Widevine headquarters (Kirkland, WA, USA). Enabled secure, scalable video delivery and integration with Chromecast and multi-platform streaming systems.',
        skills: [
          'Widevine DRM',
          'DASH Streaming',
          'Digital Rights Management',
          'Chromecast',
          'Secure Video Delivery',
        ],
        location: 'Kirkland, WA, USA',
        special: true,
      },
    ],
  },
]

onMounted(() => {})
</script>
