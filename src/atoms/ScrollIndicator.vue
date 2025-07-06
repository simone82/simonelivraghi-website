<template>
  <div 
    :class="containerClasses"
    @click="$emit('click')"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 48 48" 
      :class="svgClasses"
    >
      <!-- Light theme elements -->
      <g class="light-theme-group dark:hidden">
        <!-- Background surface with stronger contrast -->
        <circle 
          cx="24" 
          cy="24" 
          r="20" 
          fill="#006A68"
          opacity="0.30"
          filter="drop-shadow(0 2px 8px rgba(0, 106, 104, 0.25))"
        />
        
        <!-- Outer ring for elevation -->
        <circle 
          cx="24" 
          cy="24" 
          r="19" 
          fill="none" 
          stroke="#006A68" 
          stroke-width="1.5" 
          opacity="0.60"
        />
        
        <!-- Main directional indicator -->
        <g transform="translate(24, 24)">
          <!-- Primary arrow -->
          <path 
            d="M0 -8 L0 6 M-5 1 L0 6 L5 1" 
            fill="none" 
            stroke="#006A68" 
            stroke-width="4" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            opacity="0.95"
          />
          
          <!-- Secondary arrow for motion -->
          <path 
            d="M-4 -2 L0 2 L4 -2" 
            fill="none" 
            stroke="#006A68" 
            stroke-width="3" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            opacity="0.75"
          />
          
          <!-- Tertiary arrow for depth -->
          <path 
            d="M-3 -6 L0 -3 L3 -6" 
            fill="none" 
            stroke="#006A68" 
            stroke-width="2.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            opacity="0.55"
          />
        </g>
        
        <!-- Highlight for dimensionality -->
        <circle 
          cx="18" 
          cy="18" 
          r="3" 
          fill="#006A68" 
          opacity="0.20"
        />
      </g>
      
      <!-- Dark theme elements -->
      <g class="dark-theme-group hidden dark:block">
        <!-- Background surface with strong contrast for dark theme -->
        <circle 
          cx="24" 
          cy="24" 
          r="20" 
          fill="#57D9D7"
          opacity="0.35"
          filter="drop-shadow(0 2px 8px rgba(87, 217, 215, 0.30))"
        />
        
        <!-- Outer ring for elevation -->
        <circle 
          cx="24" 
          cy="24" 
          r="19" 
          fill="none" 
          stroke="#57D9D7" 
          stroke-width="1.5" 
          opacity="0.70"
        />
        
        <!-- Main directional indicator -->
        <g transform="translate(24, 24)">
          <!-- Primary arrow -->
          <path 
            d="M0 -8 L0 6 M-5 1 L0 6 L5 1" 
            fill="none" 
            stroke="#57D9D7" 
            stroke-width="4" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            opacity="1"
          />
          
          <!-- Secondary arrow for motion -->
          <path 
            d="M-4 -2 L0 2 L4 -2" 
            fill="none" 
            stroke="#57D9D7" 
            stroke-width="3" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            opacity="0.80"
          />
          
          <!-- Tertiary arrow for depth -->
          <path 
            d="M-3 -6 L0 -3 L3 -6" 
            fill="none" 
            stroke="#57D9D7" 
            stroke-width="2.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            opacity="0.60"
          />
        </g>
        
        <!-- Highlight for dimensionality -->
        <circle 
          cx="18" 
          cy="18" 
          r="3" 
          fill="#57D9D7" 
          opacity="0.25"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
})

defineEmits<{
  click: []
}>()

const containerClasses = computed(() => [
  'cursor-pointer',
  'transition-all',
  'duration-300',
  'hover:scale-110',
  'active:scale-95',
  'flex',
  'items-center',
  'justify-center',
])

const svgClasses = computed(() => {
  const sizeClasses = {
    sm: ['w-8', 'h-8'],
    md: ['w-10', 'h-10'], 
    lg: ['w-14', 'h-14'], // Made slightly larger for better visibility
    xl: ['w-18', 'h-18'], // Made slightly larger for better visibility
  }
  
  return [
    ...sizeClasses[props.size],
    'drop-shadow-sm',
    'transition-all',
    'duration-300',
  ]
})
</script>

<style scoped>
/* Ensure proper Material Design 3 color variables are available */
svg {
  --md-sys-color-primary: #006A68;
  --md-sys-color-primary-container: #006A68;
}

/* Dark theme overrides */
@media (prefers-color-scheme: dark) {
  svg {
    --md-sys-color-primary: #57D9D7;
    --md-sys-color-primary-container: #57D9D7;
  }
}

/* Manual dark theme class support */
html[data-theme="dark"] svg,
.dark svg {
  --md-sys-color-primary: #57D9D7;
  --md-sys-color-primary-container: #57D9D7;
}
</style>