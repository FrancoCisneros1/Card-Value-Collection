<script setup lang="ts">
import CardRow from '@/components/cards/CardRow.vue'
import type { TradingCard } from '@/types'

defineProps<{ cards: TradingCard[] }>()
</script>

<template>
  <section aria-label="Resultados" class="flex flex-col">
    <CardRow v-for="card in cards" :key="card.id" :card="card" />
    <p v-if="cards.length === 0" class="py-10 text-center text-ink-muted">
      No se encontraron cartas.
    </p>
  </section>
</template>
