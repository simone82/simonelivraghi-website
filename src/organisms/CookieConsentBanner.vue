<template>
  <Transition name="slide-up">
    <div v-if="showBanner" class="cookie-banner">
      <div class="cookie-banner__container">
        <div class="cookie-banner__content">
          <h3 class="cookie-banner__title">Cookie Consent</h3>
          <p class="cookie-banner__text">
            We use cookies to enhance your browsing experience, analyze site traffic, and
            personalize content. By clicking "Accept All", you consent to our use of cookies. You
            can manage your preferences or learn more in our
            <a href="/privacy-policy" class="cookie-banner__link">Privacy Policy</a>.
          </p>
        </div>

        <div class="cookie-banner__actions">
          <button
            class="cookie-banner__button cookie-banner__button--secondary"
            @click="acceptNecessary"
          >
            Necessary Only
          </button>
          <button
            class="cookie-banner__button cookie-banner__button--secondary"
            @click="openPreferences"
          >
            Preferences
          </button>
          <button class="cookie-banner__button cookie-banner__button--primary" @click="acceptAll">
            Accept All
          </button>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Cookie Preferences Modal -->
  <CookiePreferencesModal
    v-if="showPreferences"
    @close="closePreferences"
    @save="savePreferences"
  />
</template>

<script setup lang="ts">
import { useCookieConsent } from '@/composables/useCookieConsent'
import CookiePreferencesModal from '@/organisms/CookiePreferencesModal.vue'

const {
  showBanner,
  showPreferences,
  acceptAll,
  acceptNecessary,
  openPreferences,
  closePreferences,
  savePreferences,
} = useCookieConsent()
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--md-sys-color-surface-container-highest);
  color: var(--md-sys-color-on-surface);
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Add semi-transparent background for better readability */
.cookie-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--md-sys-color-surface);
  opacity: 0.95;
  z-index: -1;
}

.cookie-banner__container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .cookie-banner__container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.cookie-banner__content {
  flex: 1;
}

.cookie-banner__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: var(--md-sys-color-on-surface);
}

.cookie-banner__text {
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
  color: var(--md-sys-color-on-surface-variant);
}

.cookie-banner__link {
  color: var(--md-sys-color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.cookie-banner__link:hover {
  color: var(--md-sys-color-primary-container);
}

.cookie-banner__actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.cookie-banner__button {
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.cookie-banner__button--primary {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}

.cookie-banner__button--primary:hover {
  background-color: var(--md-sys-color-primary-container);
  transform: translateY(-1px);
}

.cookie-banner__button--secondary {
  background-color: var(--md-sys-color-surface-container);
  color: var(--md-sys-color-on-surface);
  border: 1px solid var(--md-sys-color-outline);
}

.cookie-banner__button--secondary:hover {
  background-color: var(--md-sys-color-surface-container-high);
  transform: translateY(-1px);
}

/* Transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    transform 0.3s ease-out,
    opacity 0.3s ease-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
