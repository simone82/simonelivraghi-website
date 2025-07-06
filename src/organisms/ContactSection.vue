<template>
  <section
    id="contact"
    class="section bg-md-light-surface-container/30 dark:bg-md-dark-surface-container/30"
  >
    <div class="container">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-8 text-md-light-primary dark:text-md-dark-primary"
        >
          Get in Touch
        </h2>

        <p
          class="text-lg text-center text-md-light-on-surface dark:text-md-dark-on-surface mb-12 max-w-2xl mx-auto"
        >
          I'm always interested in discussing new opportunities, collaborations, or just having a
          conversation about technology and innovation.
        </p>

        <div class="bg-md-light-surface dark:bg-md-dark-surface rounded-lg shadow-lg p-6 md:p-8">
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div class="grid md:grid-cols-2 gap-6">
              <BaseInput
                id="name"
                v-model="form.name"
                label="Full Name"
                placeholder="Your full name"
                required
                :error="errors.name"
              />
              <BaseInput
                id="email"
                v-model="form.email"
                type="email"
                label="E-mail"
                placeholder="your.email@example.com"
                required
                :error="errors.email"
              />
            </div>

            <BaseInput
              id="company"
              v-model="form.company"
              label="Company"
              placeholder="Your company (optional)"
              :error="errors.company"
            />

            <BaseInput
              id="subject"
              v-model="form.subject"
              label="Subject"
              placeholder="What's this about?"
              required
              :error="errors.subject"
            />

            <BaseTextarea
              id="message"
              v-model="form.message"
              label="Question"
              placeholder="Tell me about your project or inquiry..."
              :rows="6"
              required
              :error="errors.message"
            />

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <BaseButton type="submit" size="lg" :disabled="isSubmitting" class="sm:w-auto">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </BaseButton>

              <BaseButton
                type="button"
                variant="outline"
                size="lg"
                :disabled="isSubmitting"
                class="sm:w-auto"
                @click="resetForm"
              >
                Clear Form
              </BaseButton>
            </div>
          </form>

          <div
            v-if="submitStatus"
            class="mt-6 p-4 rounded-lg text-center"
            :class="submitStatusClasses"
          >
            {{ submitMessage }}
          </div>
        </div>

        <div class="mt-12 text-center">
          <p
            class="text-sm text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant mb-4"
          >
            Or reach out directly:
          </p>
          <div class="flex justify-center gap-8">
            <a
              :href="`mailto:${personalInfo.email}`"
              class="text-md-light-primary dark:text-md-dark-primary hover:text-md-light-primary-container dark:hover:text-md-dark-primary-container transition-colors duration-200"
              aria-label="Send Email"
            >
              <BaseIcon icon="📧" size="lg" />
              <span class="sr-only">Email</span>
            </a>
            <a
              :href="personalInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-md-light-primary dark:text-md-dark-primary hover:text-md-light-primary-container dark:hover:text-md-dark-primary-container transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <BaseIcon icon="💼" size="lg" />
              <span class="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import BaseIcon from '@/atoms/BaseIcon.vue'
import BaseInput from '@/atoms/BaseInput.vue'
import BaseTextarea from '@/atoms/BaseTextarea.vue'
import BaseButton from '@/atoms/BaseButton.vue'
import type { PersonalInfo } from '@/types'

const personalInfo: PersonalInfo = {
  name: 'Simone Livraghi',
  title: 'AI Systems Engineer & Software Architect',
  location: 'Milan, Italy',
  email: 'simone@example.com',
  linkedin: 'https://www.linkedin.com/in/slivraghi',
  github: 'https://github.com/simonelivraghi',
  bio: 'Experienced AI Systems Engineer and Software Architect with over 10 years in the technology industry.',
}

// Form state
const form = reactive({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | null>(null)
const submitMessage = ref('')

// Form validation
const validateForm = () => {
  let isValid = true

  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })

  if (!form.name.trim()) {
    errors.name = 'Full name is required'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'E-mail is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Question is required'
    isValid = false
  }

  return isValid
}

// Submit form to Google Forms
const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Google Forms submission endpoint
    const formData = new FormData()
    formData.append('entry.1060704342', form.name) // Full name
    formData.append('entry.1399715446', form.email) // E-mail
    formData.append('entry.455434414', form.company) // Company
    formData.append('entry.1086913374', form.subject) // Subject
    formData.append('entry.277625567', form.message) // Question

    await fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSewRzyfbQw30c8dCAIlcVRrvSw2KFRoVxvZNTdOqYj-77QxRg/formResponse',
      {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Required for Google Forms
      }
    )

    // Since we're using no-cors, we can't check the response
    // We'll assume success if no error is thrown
    submitStatus.value = 'success'
    submitMessage.value = "Thank you for your message! I'll get back to you soon."
    resetForm()
  } catch (error) {
    console.error('Form submission error:', error)
    submitStatus.value = 'error'
    submitMessage.value =
      'Sorry, there was an error sending your message. Please try again or contact me directly.'
  } finally {
    isSubmitting.value = false
  }
}

// Reset form
const resetForm = () => {
  form.name = ''
  form.email = ''
  form.company = ''
  form.subject = ''
  form.message = ''
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })
  submitStatus.value = null
}

// Computed classes for submit status
const submitStatusClasses = computed(() => {
  return submitStatus.value === 'success'
    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
})
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
