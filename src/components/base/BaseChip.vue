<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  label: string
  icon?: Component
  active?: boolean
}>()

defineEmits<{ select: [] }>()
</script>

<template>
  <button
    type="button"
    :aria-pressed="active"
    class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
    :class="active ? 'bg-brand text-white' : 'bg-surface text-ink hover:bg-line'"
    @click="$emit('select')"
  >
    <component :is="icon" v-if="icon" class="h-4 w-4" aria-hidden="true" />
    {{ label }}
  </button>
</template>
