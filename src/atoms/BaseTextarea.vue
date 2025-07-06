<template>
  <div class="base-textarea">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-md-light-on-surface dark:text-md-dark-on-surface mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-md-light-error dark:text-md-dark-error">*</span>
    </label>
    <textarea
      :id="id"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :rows="rows"
      :class="textareaClasses"
      :value="modelValue"
      v-bind="$attrs"
      @input="updateValue"
      @blur="handleBlur"
      @focus="handleFocus"
    ></textarea>
    <div v-if="error" class="mt-1 text-sm text-md-light-error dark:text-md-dark-error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  id?: string
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
  rows?: number
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  required: false,
  disabled: false,
  rows: 4,
  id: undefined,
  label: undefined,
  placeholder: undefined,
  error: undefined,
  modelValue: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

const isFocused = ref(false)

const textareaClasses = computed(() => {
  const baseClasses =
    'block w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-0 resize-vertical'

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
  const target = event.target as HTMLTextAreaElement
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
