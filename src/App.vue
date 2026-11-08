<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import PriceGuideIntro from '@/components/cards/PriceGuideIntro.vue'
import CategoryFilter from '@/components/cards/CategoryFilter.vue'
import CardList from '@/components/cards/CardList.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import { cards } from '@/data/cards'
import { useCardSearch } from '@/composables/useCardSearch'

const menuOpen = ref(false)
const selectedCategory = ref<string | null>(null)
const { query, results } = useCardSearch(cards)
</script>

<template>
  <div class="flex min-h-screen">
    <AppSidebar active-id="cards" :open="menuOpen" @close="menuOpen = false" />

    <div class="flex min-w-0 flex-1 flex-col">
      <AppHeader :menu-open="menuOpen" @toggle-menu="menuOpen = !menuOpen" />

      <main class="flex justify-center px-4 pb-16 pt-8 md:px-8 lg:pt-16">
        <div class="flex w-full max-w-5xl flex-col gap-8">
          <PriceGuideIntro />
          <CategoryFilter v-model="selectedCategory" />
          <div class="w-full md:max-w-xl">
            <BaseInput v-model="query" label="Buscar cartas" placeholder="Search" type="search" />
          </div>
          <CardList :cards="results" />
        </div>
      </main>
    </div>
  </div>
</template>
