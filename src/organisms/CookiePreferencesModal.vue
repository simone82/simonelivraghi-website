<template>
  <Teleport to="body">
    <div class="modal-overlay" @click="handleOverlayClick">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <h2 class="modal__title">Cookie Preferences</h2>
          <button @click="$emit('close')" class="modal__close" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="modal__body">
          <p class="modal__description">
            Manage your cookie preferences below. You can enable or disable different types of cookies based on your preferences.
          </p>
          
          <div class="cookie-category">
            <div class="cookie-category__header">
              <div class="cookie-category__info">
                <h3 class="cookie-category__title">Necessary Cookies</h3>
                <p class="cookie-category__description">
                  These cookies are essential for the website to function properly. They cannot be disabled.
                </p>
              </div>
              <div class="toggle toggle--disabled">
                <input type="checkbox" checked disabled />
                <span class="toggle__slider"></span>
              </div>
            </div>
          </div>
          
          <div class="cookie-category">
            <div class="cookie-category__header">
              <div class="cookie-category__info">
                <h3 class="cookie-category__title">Analytics Cookies</h3>
                <p class="cookie-category__description">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
              <div class="toggle">
                <input 
                  type="checkbox" 
                  v-model="localPreferences.analytics"
                  id="analytics-toggle"
                />
                <label for="analytics-toggle" class="toggle__slider"></label>
              </div>
            </div>
          </div>
          
          <div class="cookie-category">
            <div class="cookie-category__header">
              <div class="cookie-category__info">
                <h3 class="cookie-category__title">Marketing Cookies</h3>
                <p class="cookie-category__description">
                  These cookies are used to track visitors across websites to display relevant advertisements.
                </p>
              </div>
              <div class="toggle">
                <input 
                  type="checkbox" 
                  v-model="localPreferences.marketing"
                  id="marketing-toggle"
                />
                <label for="marketing-toggle" class="toggle__slider"></label>
              </div>
            </div>
          </div>
          
          <div class="cookie-category">
            <div class="cookie-category__header">
              <div class="cookie-category__info">
                <h3 class="cookie-category__title">Preference Cookies</h3>
                <p class="cookie-category__description">
                  These cookies remember your preferences and choices to provide a personalized experience.
                </p>
              </div>
              <div class="toggle">
                <input 
                  type="checkbox" 
                  v-model="localPreferences.preferences"
                  id="preferences-toggle"
                />
                <label for="preferences-toggle" class="toggle__slider"></label>
              </div>
            </div>
          </div>
        </div>
        
        <div class="modal__footer">
          <button @click="$emit('close')" class="modal__button modal__button--secondary">
            Cancel
          </button>
          <button @click="handleSave" class="modal__button modal__button--primary">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCookieConsent, type CookiePreferences } from '@/composables/useCookieConsent'

const emit = defineEmits<{
  close: []
  save: [preferences: CookiePreferences]
}>()

const { preferences } = useCookieConsent()

// Local state for preferences
const localPreferences = ref<CookiePreferences>({
  necessary: true,
  analytics: preferences.value.analytics,
  marketing: preferences.value.marketing,
  preferences: preferences.value.preferences
})

const handleOverlayClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    emit('close')
  }
}

const handleSave = () => {
  emit('save', localPreferences.value)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 1rem;
}

.modal {
  background-color: var(--md-sys-color-surface);
  border-radius: 1rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid var(--md-sys-color-outline-variant);
}

.modal__title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: var(--md-sys-color-on-surface);
}

.modal__close {
  background: none;
  border: none;
  color: var(--md-sys-color-on-surface-variant);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
}

.modal__close:hover {
  background-color: var(--md-sys-color-surface-container);
}

.modal__body {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
}

.modal__description {
  color: var(--md-sys-color-on-surface-variant);
  margin-bottom: 2rem;
  line-height: 1.5;
}

.cookie-category {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--md-sys-color-outline-variant);
}

.cookie-category:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.cookie-category__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.cookie-category__info {
  flex: 1;
}

.cookie-category__title {
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  color: var(--md-sys-color-on-surface);
}

.cookie-category__description {
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
  color: var(--md-sys-color-on-surface-variant);
}

.toggle {
  position: relative;
  width: 48px;
  height: 24px;
  flex-shrink: 0;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--md-sys-color-surface-container-high);
  transition: background-color 0.2s ease;
  border-radius: 24px;
}

.toggle__slider::before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: var(--md-sys-color-on-surface-variant);
  transition: transform 0.2s ease;
  border-radius: 50%;
}

.toggle input:checked + .toggle__slider {
  background-color: var(--md-sys-color-primary);
}

.toggle input:checked + .toggle__slider::before {
  transform: translateX(24px);
  background-color: var(--md-sys-color-on-primary);
}

.toggle--disabled {
  opacity: 0.6;
  pointer-events: none;
}

.toggle--disabled .toggle__slider {
  background-color: var(--md-sys-color-primary);
}

.toggle--disabled .toggle__slider::before {
  transform: translateX(24px);
  background-color: var(--md-sys-color-on-primary);
}

.modal__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.5rem;
  border-top: 1px solid var(--md-sys-color-outline-variant);
}

.modal__button {
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal__button--primary {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}

.modal__button--primary:hover {
  background-color: var(--md-sys-color-primary-container);
}

.modal__button--secondary {
  background-color: var(--md-sys-color-surface-container);
  color: var(--md-sys-color-on-surface);
  border: 1px solid var(--md-sys-color-outline);
}

.modal__button--secondary:hover {
  background-color: var(--md-sys-color-surface-container-high);
}
</style>