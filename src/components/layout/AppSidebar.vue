<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import BrandLogo from '@/components/base/BrandLogo.vue'
import { brand, navItems } from '@/data/navigation'

defineProps<{ activeId: string; open: boolean }>()
defineEmits<{ close: [] }>()
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 z-30 bg-ink/40 lg:hidden"
    aria-hidden="true"
    @click="$emit('close')"
  />
  <aside
    id="app-sidebar"
    class="fixed inset-y-0 left-0 z-40 flex w-72 shrink-0 flex-col gap-4 overflow-y-auto border-r border-line bg-white px-5 py-3 transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0"
    :class="open ? 'translate-x-0' : '-translate-x-full'"
  >
    <BrandLogo />

    <nav aria-label="Principal">
      <ul class="flex flex-col gap-1">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="item.href"
            :aria-current="item.id === activeId ? 'page' : undefined"
            class="flex items-center gap-4 rounded-md px-3 py-2.5 font-display text-sm font-bold uppercase transition-colors"
            :class="item.id === activeId ? 'bg-brand-soft text-ink' : 'text-ink hover:bg-surface'"
          >
            <component :is="item.icon" class="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            <span class="flex-1">{{ item.label }}</span>
            <span
              v-if="item.isPro"
              class="rounded-sm bg-brand px-1.5 py-0.5 text-[10px] font-bold leading-none text-white"
            >
              PRO
            </span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="flex flex-col items-center gap-2">
      <BaseButton block>{{ brand.ctaLabel }}</BaseButton>
      <p class="text-sm text-ink">{{ brand.ctaCaption }}</p>
    </div>
  </aside>
</template>
