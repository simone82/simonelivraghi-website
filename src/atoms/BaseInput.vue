<template>
  <div class="base-input">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-md-light-on-surface dark:text-md-dark-on-surface mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-md-light-error dark:text-md-dark-error">*</span>
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :class="inputClasses"
      :value="modelValue"
      v-bind="$attrs"
      @input="updateValue"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <div v-if="error" class="mt-1 text-sm text-md-light-error dark:text-md-dark-error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  id?: string
  type?: 'text' | 'email' | 'tel' | 'password' | 'number'
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

const isFocused = ref(false)

const inputClasses = computed(() => {
  const baseClasses =
    'block w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-0'

  const stateClasses = props.error
    ? 'border-md-light-error dark:border-md-dark-error bg-md-light-error-container/10 dark:bg-md-dark-error-container/10'
    : isFocused.value
      ? 'border-md-light-primary dark:border-md-dark-primary bg-md-light-surface dark:bg-md-dark-surface'
      : 'border-md-light-outline dark:border-md-dark-outline bg-md-light-surface dark:bg-md-dark-surface hover:border-md-light-outline-variant dark:hover:border-md-dark-outline-variant'

  const textClasses =
    'text-md-light-on-surface dark:text-md-dark-on-surface placeholder-md-light-on-surface-variant dark:placeholder-md-dark-on-surface-variant'

  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

  return [baseClasses, stateClasses, textClasses, disabledClasses].join(' ')
})

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}
</script>
