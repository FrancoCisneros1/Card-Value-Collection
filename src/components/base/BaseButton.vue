<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonSize, ButtonVariant } from '@/types'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: ButtonSize
    block?: boolean
    href?: string
  }>(),
  { variant: 'primary', size: 'md', block: false },
)

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary: 'bg-surface text-ink hover:bg-line',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-6 py-3 text-lg',
}

const classes = computed(() => [
  'inline-flex items-center justify-center rounded-md font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
  variants[props.variant],
  sizes[props.size],
  props.block ? 'w-full' : '',
])
</script>

<template>
  <a v-if="href" :href="href" :class="classes"><slot /></a>
  <button v-else type="button" :class="classes"><slot /></button>
</template>
