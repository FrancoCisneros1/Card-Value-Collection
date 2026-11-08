<script setup lang="ts">
import BaseChip from '@/components/base/BaseChip.vue'
import { categories } from '@/data/categories'

const selected = defineModel<string | null>({ default: null })

function toggle(id: string) {
  selected.value = selected.value === id ? null : id
}
</script>

<template>
  <ul class="flex flex-wrap gap-2" aria-label="Categorías">
    <li v-for="category in categories" :key="category.id">
      <BaseChip
        :label="category.label"
        :icon="category.icon"
        :active="selected === category.id"
        @select="toggle(category.id)"
      />
    </li>
  </ul>
</template>
