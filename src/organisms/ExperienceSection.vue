<template>
  <section
    id="experience"
    class="section bg-md-light-surface-container/30 dark:bg-md-dark-surface-container/30"
  >
    <div class="container">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-8 text-md-light-primary dark:text-md-dark-primary"
        >
          Professional Experience
        </h2>

        <p
          class="text-lg text-center text-md-light-on-surface dark:text-md-dark-on-surface mb-12 max-w-3xl mx-auto"
        >
          Over 15 years of experience in software architecture, AI systems engineering, and team
          leadership across various industries and technologies.
        </p>

        <div class="relative">
          <!-- Timeline line -->
          <div
            class="absolute left-8 top-0 bottom-0 w-0.5 bg-md-light-primary dark:bg-md-dark-primary opacity-20"
          ></div>

          <div class="space-y-12">
            <ExperienceItem
              v-for="(experience, index) in experiences"
              :key="index"
              :experience="experience"
              :index="index"
            />
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-sm text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant">
            Ready to bring this experience to your next project.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceItem from '@/molecules/ExperienceItem.vue'
import type { Experience } from '@/types'
import { useAnalytics } from '@/composables/useAnalytics'
import { onMounted } from 'vue'

const { trackSectionView } = useAnalytics()

// Professional experience data from CV
const experiences: Experience[] = [
  {
    title: 'AI Software Development Lifecycle Lead',
    company: 'Globant',
    location: 'Milan, Italy',
    period: 'Mar. 2025 – Present',
    description:
      'Research, design, and optimize the agile software development lifecycle with advanced AI-based tools. Analyze, integrate, and deploy cutting-edge AI-powered development platforms to enhance team productivity and code quality within enterprise environments.',
    achievements: [
      'Evaluated and integrated next-generation AI-powered development tools including Cursor.AI, Trae, GitHub Copilot Agent, Cline, Kilo, JetBrains Junie, Claudie-Code, Gemini-CLI, and Globant CODA - Neo Agent',
      'Designed integration strategies for Model Context Protocol (MCP) services for seamless AI-driven coding support',
      'Led initiatives in prompt engineering and context engineering to refine AI-assisted development processes',
      'Researched and implemented strategies for short-term and long-term memory management in AI agents',
      'Developed custom tools for AI-supported development using LangChain, LangGraph, and Globant Enterprise AI',
      'Organized and delivered internal company workshop on AI-driven development lifecycle management',
      'Supported the structuring of AI-oriented development teams',
    ],
    skills: [
      'AI-powered software development',
      'Agile lifecycle optimization',
      'AI coding assistants',
      'Prompt engineering',
      'Context engineering',
      'LangChain',
      'LangGraph',
      'MCP integration',
      'Technical training',
      'Team leadership',
    ],
  },
  {
    title: 'AI Software Engineer',
    company: 'Globant',
    location: 'Milan, Italy',
    period: 'Jan. 2025 – Present',
    description:
      'Transform software development and business processes by strategically applying artificial intelligence and agentic systems. Specialize in designing, building, and optimizing AI-driven architectures that integrate seamlessly with enterprise systems.',
    achievements: [
      'Defined and implemented strategies and tooling to enhance development processes with AI',
      'Analyzed software development workflows using AI pair programming and agentic systems',
      'Designed and deployed AI agentic systems to automate complex business processes',
      'Built scalable AI agents and ReAct-based components from scratch',
      'Engineered integrations between AI agents and data systems for RAG capabilities',
      'Developed AI applications using LangChain, LangGraph, CrewAI, and AutoGPT',
      'Designed global enterprise agentic systems using advanced enterprise AI platforms',
      "Contributed to adopting emerging AI standards like Google A2A and Anthropic's Model Context Protocol",
      'Prototyped distributed AI architectures leveraging Apache Kafka and Apache Flink',
    ],
    skills: [
      'Generative AI',
      'Software Architecture',
      'Platform Architecture',
      'Prompt Engineering',
      'LangChain',
      'LangGraph',
      'CrewAI',
      'Python',
      'Go Lang',
      'Kafka',
      'Apache Flink',
      'Event sourcing',
      'AWS',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Globant',
    location: 'Milan, Italy',
    period: 'Jan. 2024 – Jan. 2025',
    description:
      'Specialized in designing and developing highly scalable architectures to support millions of users for the FIFA+ video streaming platform. Built and optimized distributed systems for concurrent computation.',
    achievements: [
      'Developed REST, gRPC, and streaming microservices for FIFA+ platform',
      'Leveraged advanced patterns such as Event Sourcing, Event Streaming, and CQRS with Apache Kafka',
      'Implemented serverless solutions and data mesh architectures using Knative on Kubernetes',
      'Optimized systems for high-scale concurrent computation',
      'Ensured flexibility, efficiency, and reliability in distributed systems',
    ],
    skills: [
      'Software architecture',
      'Microservices',
      'Go Lang',
      'Python',
      'Kotlin',
      'Kafka',
      'Kubernetes',
      'Knative',
      'Event sourcing',
      'CQRS',
      'Performance analysis',
      'Observability',
      'OpenTelemetry',
      'AWS',
      'Google Cloud Platform',
    ],
  },
  {
    title: 'Head of Big Data & Personalization',
    company: 'Globant',
    location: 'Milan, Italy',
    period: 'Sep. 2023 – Jan. 2024',
    description:
      'Managed the FIFA+ Big Data infrastructure and team. Collaborated with the team to maintain and evolve the existing ETL infrastructure built on Apache Flink.',
    achievements: [
      'Led Big Data infrastructure team for FIFA+ platform',
      'Maintained and evolved ETL infrastructure based on Apache Flink',
      'Managed team collaboration and infrastructure optimization',
      'Ensured scalability and reliability of big data systems',
    ],
    skills: [
      'Team Leadership',
      'Big Data Architecture',
      'Apache Flink',
      'ETL Infrastructure',
      'Data Engineering',
      'Team Management',
    ],
  },
  {
    title: 'Head of Big Data & Personalization',
    company: 'CHILI',
    location: 'Milan, Italy',
    period: 'Jan. 2018 – Sep. 2023',
    description:
      "Managed the company's Big Data infrastructure and team. Led the evolution from Hadoop/Spark to a modern lambda architecture with Kafka and Apache Flink for real-time processing.",
    achievements: [
      'Maintained and evolved ETL infrastructure from Cloudera Hadoop cluster with Spark jobs',
      'Introduced Apache Flink and migrated to lambda architecture',
      'Enabled event-driven Big Data with real-time processing capabilities',
      'Implemented real-time computation for personalized user experiences',
      'Migrated real-time processing to Kubernetes for better scalability',
      'Automated production environment and eliminated manual operations',
      'Implemented Change Data Capture-based event-driven processing',
    ],
    skills: [
      'Team management',
      'Big Data Architecture',
      'Apache Kafka',
      'Apache Flink',
      'BigQuery',
      'ElasticSearch',
      'Druid.io',
      'Kubernetes',
      'AWS Lambda',
      'Knative',
      'Python',
      'Java',
      'Kotlin',
      'TypeScript',
    ],
  },
  {
    title: 'Software Architect',
    company: 'CHILI',
    location: 'Milan, Italy',
    period: 'Feb. 2016 – Jan. 2018',
    description:
      'Directed a team of software engineers to redesign the CHILI platform for scalability and business growth. Led the transformation to microservices architecture.',
    achievements: [
      'Segmented platform features using microservice architecture',
      'Introduced Docker for microservices execution',
      'Implemented codebase split for independent deployable services',
      'Decoupled platform components with asynchronous communication via Apache Kafka',
      'Introduced NoSQL databases (MongoDB, Elasticsearch)',
      'Implemented fully RESTful approach for all client interactions',
      'Designed OAuth2 implementation for client authorization',
      'Migrated to DASH streaming strategy with modular DRM',
      'Migrated codebase to Python',
      'Coordinated architectural design and team development',
    ],
    skills: [
      'Software Architecture',
      'Microservices',
      'Docker',
      'Apache Kafka',
      'MongoDB',
      'Elasticsearch',
      'OAuth2',
      'RESTful APIs',
      'Python',
      'Team Leadership',
    ],
  },
  {
    title: 'Senior Java Software Engineer',
    company: 'CHILI',
    location: 'Milan, Italy',
    period: 'Mar. 2015 – Feb. 2016',
    description:
      'Designed and implemented a new billing system enabling customers to purchase digital content and subscriptions through various payment methods and promotional activities.',
    achievements: [
      'Designed billing system with digital wallet and multiple payment methods',
      'Implemented support for pre-purchased digital credit and gift cards',
      'Used OSGi framework for pluggable payment methods',
      'Enabled business promotional activities integration',
      'Managed products, discounts, and custom promotions',
    ],
    skills: [
      'Java',
      'OSGi',
      'Payment Systems',
      'Digital Wallets',
      'System Design',
      'Promotional Systems',
    ],
  },
  {
    title: 'Android Developer',
    company: 'CHILI',
    location: 'Milan, Italy',
    period: 'Mar. 2013 – Mar. 2015',
    description:
      'Developed CHILI Android application and designed RESTful API requirements. Implemented secure video streaming with DRM protection and Chromecast integration.',
    achievements: [
      'Developed CHILI Android application for content purchase and streaming',
      'Designed RESTful API requirements for platform integration',
      'Implemented video player with Google Widevine DRM for secure delivery',
      'Developed Chromecast application with Microsoft Play Ready DRM',
      'Obtained Widevine certification on modular DRM and DASH streaming at Google headquarters',
    ],
    skills: [
      'Android Development',
      'RESTful APIs',
      'Video Streaming',
      'DRM (Widevine, Play Ready)',
      'Chromecast',
      'DASH Streaming',
      'Mobile Development',
    ],
  },
]

onMounted(() => {
  trackSectionView('experience')
})
</script>
