<script setup lang="ts">
defineProps<{
  label: string
  placeholder?: string
  type?: string
}>()

const model = defineModel<string>({ default: '' })
</script>

<template>
  <label class="flex w-full flex-col">
    <span class="sr-only">{{ label }}</span>
    <input
      v-model="model"
      :type="type ?? 'text'"
      :placeholder="placeholder"
      class="w-full rounded border border-line px-4 py-3 text-base text-ink placeholder:text-ink-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
    />
  </label>
</template>
