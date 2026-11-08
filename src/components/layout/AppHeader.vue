<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import BaseButton from '@/components/base/BaseButton.vue'
import BrandLogo from '@/components/base/BrandLogo.vue'

defineProps<{ menuOpen: boolean }>()
defineEmits<{ toggleMenu: [] }>()
</script>

<template>
  <header class="flex items-center justify-between gap-3 px-4 py-1 lg:justify-end">
    <div class="flex items-center gap-2 lg:hidden">
      <button
        type="button"
        class="rounded-md p-2 text-ink hover:bg-surface"
        aria-controls="app-sidebar"
        :aria-expanded="menuOpen"
        @click="$emit('toggleMenu')"
      >
        <Menu class="h-6 w-6" aria-hidden="true" />
        <span class="sr-only">Abrir menú</span>
      </button>
      <BrandLogo />
    </div>
    <div class="flex items-center gap-2">
      <BaseButton variant="secondary">Login</BaseButton>
      <BaseButton>Go Pro</BaseButton>
    </div>
  </header>
</template>
