<script setup lang="ts">
import type { BadgeTone } from '@/types'

withDefaults(defineProps<{ tone?: BadgeTone }>(), { tone: 'neutral' })

const tones: Record<BadgeTone, string> = {
  neutral: 'border-line text-ink',
  psa: 'border-grade-psa text-grade-psa',
  bgs: 'border-grade-bgs text-grade-bgs',
  plain: 'border-transparent text-ink',
}
</script>

<template>
  <span
    class="inline-flex items-center rounded border px-2.5 py-1 text-sm font-semibold leading-none"
    :class="tones[tone]"
  >
    <slot />
  </span>
</template>
