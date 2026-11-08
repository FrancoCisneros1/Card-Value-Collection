<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    value: string
    trend?: 'up' | 'down' | 'none'
  }>(),
  { trend: 'none' },
)

const trendClasses = {
  up: 'text-positive',
  down: 'text-negative',
  none: 'text-ink',
} as const
</script>

<template>
  <div class="flex flex-col items-start leading-tight md:items-end">
    <span class="text-xs text-ink-muted md:text-ink">{{ label }}</span>
    <span class="font-display text-base font-bold" :class="trendClasses[trend]">{{ value }}</span>
  </div>
</template>
