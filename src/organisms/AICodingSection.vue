<template>
  <section
    id="ai-coding"
    v-track-section="'ai-coding'"
    class="section bg-md-light-surface/50 dark:bg-md-dark-surface/50"
  >
    <div class="container">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-8 text-md-light-primary dark:text-md-dark-primary"
        >
          AI Coding
        </h2>

        <p
          class="text-lg text-center text-md-light-on-surface dark:text-md-dark-on-surface mb-12 max-w-3xl mx-auto"
        >
          Context engineering is now a foundational practice for building robust, AI-powered
          software. If you want reliable, scalable results, you need more than "vibe coding"—you
          need a professional approach that puts structured context and memory at the heart of your
          workflow.
        </p>

        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Main Content -->
          <div class="space-y-8">
            <!-- What is Context Engineering -->
            <BaseCard class="p-6" :hover="true">
              <h3
                class="text-xl font-semibold mb-4 text-md-light-primary dark:text-md-dark-primary"
              >
                What is Context Engineering?
              </h3>
              <p class="text-md-light-on-surface dark:text-md-dark-on-surface leading-relaxed">
                Context engineering means thoughtfully designing all the information your AI agent
                or software system needs: from system instructions and user prompts to conversation
                history, business rules, project documentation, and real-time data. This isn't just
                prompt tuning—it's about engineering a complete environment where both humans and AI
                can collaborate with shared understanding.
              </p>
            </BaseCard>

            <!-- Memory in LLM Agents -->
            <BaseCard class="p-6" :hover="true">
              <h3
                class="text-xl font-semibold mb-4 text-md-light-primary dark:text-md-dark-primary"
              >
                The Critical Role of Memory in LLM Agents
              </h3>
              <p class="text-md-light-on-surface dark:text-md-dark-on-surface leading-relaxed mb-4">
                A vital aspect of context engineering is LLM agent memory design—how your AI
                manages, recalls, and uses information over time. Memory isn't just a technical
                feature: it's what turns an LLM from a short-term assistant into a true team member,
                capable of learning, adapting, and improving its output session after session.
              </p>
              <p class="text-md-light-on-surface dark:text-md-dark-on-surface leading-relaxed">
                If context is the "right now," memory is the "what happened before, and why"—and the
                combination is what unlocks real augmented intelligence.
              </p>
            </BaseCard>

            <!-- Professional Benefits -->
            <BaseCard class="p-6" :hover="true">
              <h3
                class="text-xl font-semibold mb-4 text-md-light-primary dark:text-md-dark-primary"
              >
                From Vibe Coding to Professional Engineering
              </h3>
              <p class="text-md-light-on-surface dark:text-md-dark-on-surface leading-relaxed mb-4">
                "Vibe coding" leaves knowledge undocumented, teams confused, and projects fragile.
                In contrast, context engineering—especially with agent memory—delivers:
              </p>
              <ul class="space-y-2 text-md-light-on-surface dark:text-md-dark-on-surface">
                <li class="flex items-start gap-2">
                  <span class="text-md-light-primary dark:text-md-dark-primary">•</span>
                  <span>Traceable, explainable decisions</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-md-light-primary dark:text-md-dark-primary">•</span>
                  <span>Seamless collaboration between humans and AI</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-md-light-primary dark:text-md-dark-primary">•</span>
                  <span>Continuous improvement (the AI gets better over time, not worse)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-md-light-primary dark:text-md-dark-primary">•</span>
                  <span
                    >True scalability (systems, knowledge, and people can grow without chaos)</span
                  >
                </li>
              </ul>
            </BaseCard>
          </div>

          <!-- Memory Benefits & CTA -->
          <div class="space-y-8">
            <!-- Memory Benefits -->
            <BaseCard class="p-6" :hover="true">
              <h3
                class="text-xl font-semibold mb-4 text-md-light-primary dark:text-md-dark-primary"
              >
                With Well-Designed Memory, Your AI Agent Can:
              </h3>
              <ul class="space-y-3 text-md-light-on-surface dark:text-md-dark-on-surface">
                <li class="flex items-start gap-3">
                  <span class="text-md-light-secondary dark:text-md-dark-secondary text-xl"
                    >🧠</span
                  >
                  <span>Recall key project requirements and business rules</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-md-light-secondary dark:text-md-dark-secondary text-xl"
                    >📋</span
                  >
                  <span>Track long-running tasks and past decisions</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-md-light-secondary dark:text-md-dark-secondary text-xl"
                    >🏗️</span
                  >
                  <span>Build up expertise about your codebase, architecture, or product</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-md-light-secondary dark:text-md-dark-secondary text-xl"
                    >⚡</span
                  >
                  <span
                    >Minimize repetitive onboarding or re-explaining, increasing productivity</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-md-light-secondary dark:text-md-dark-secondary text-xl"
                    >🛡️</span
                  >
                  <span>Reduce errors caused by forgotten context or task history</span>
                </li>
              </ul>
            </BaseCard>

            <!-- Professional Results -->
            <BaseCard class="p-6" :hover="true">
              <h3
                class="text-xl font-semibold mb-4 text-md-light-primary dark:text-md-dark-primary"
              >
                Why This Matters for Professional Software with AI
              </h3>
              <div class="space-y-3 text-md-light-on-surface dark:text-md-dark-on-surface">
                <div class="flex items-start gap-3">
                  <span class="text-md-light-tertiary dark:text-md-dark-tertiary font-semibold"
                    >No More Guessing:</span
                  >
                  <span
                    >When AI works with rich context and long-term memory, you get tailored,
                    accurate solutions—not generic or error-prone code.</span
                  >
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-md-light-tertiary dark:text-md-dark-tertiary font-semibold"
                    >Fewer Mistakes:</span
                  >
                  <span
                    >Most AI "hallucinations" and misunderstandings are really context or memory
                    failures. A well-designed memory system keeps the AI grounded in project
                    reality.</span
                  >
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-md-light-tertiary dark:text-md-dark-tertiary font-semibold"
                    >Consistency:</span
                  >
                  <span
                    >Context and memory together ensure anyone—or any agent—can reliably reproduce
                    results, onboard faster, and maintain system integrity.</span
                  >
                </div>
              </div>
            </BaseCard>

            <!-- Context Engineering Benefits -->
            <BaseCard
              class="p-6 text-center bg-md-light-primary-container/20 dark:bg-md-dark-primary-container/20"
              :hover="true"
            >
              <h3
                class="text-xl font-semibold mb-4 text-md-light-primary dark:text-md-dark-primary"
              >
                Context Engineering + Memory = True Augmented Intelligence
              </h3>
              <p class="text-md-light-on-surface dark:text-md-dark-on-surface leading-relaxed">
                By investing in context engineering and agent memory design, you create AI-augmented
                teams that are resilient, intelligent, and ready for production. This is how you
                move from ad-hoc, improvisational coding to systematic, professional software
                development—leveraging AI as a real partner, not just a tool.
              </p>
            </BaseCard>
          </div>
        </div>

        <!-- Closing Text -->
        <div class="mt-16 text-center max-w-4xl mx-auto">
          <p
            class="text-2xl md:text-3xl font-bold text-md-light-primary dark:text-md-dark-primary mb-4"
          >
            Ready to stop coding by vibes and start building with context and memory?
          </p>
          <p class="text-xl md:text-2xl text-md-light-on-surface dark:text-md-dark-on-surface">
            Let's make your next project truly intelligent.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseCard from '@/atoms/BaseCard.vue'
import { onMounted } from 'vue'

onMounted(() => {})
</script>
