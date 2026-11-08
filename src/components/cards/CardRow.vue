<script setup lang="ts">
import { computed } from 'vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseStat from '@/components/base/BaseStat.vue'
import { formatChange, formatPopulation, formatPrice } from '@/composables/useFormatters'
import type { BadgeTone, TradingCard } from '@/types'

const props = defineProps<{ card: TradingCard }>()

const gradeLabel = computed(() => {
  const { grader, value } = props.card.grade
  return value === undefined ? grader : `${grader} ${value}`
})

const gradeTone = computed<BadgeTone>(() => {
  const map: Record<TradingCard['grade']['grader'], BadgeTone> = {
    PSA: 'psa',
    BGS: 'bgs',
    Raw: 'plain',
  }
  return map[props.card.grade.grader]
})

const trend = computed(() => (props.card.monthlyChange >= 0 ? 'up' : 'down'))
</script>

<template>
  <article class="flex flex-col gap-4 border-b border-line px-2 py-5 md:flex-row md:items-center md:gap-6 md:px-5">
    <div class="flex flex-1 items-center gap-5">
      <img
        :src="card.image"
        :alt="`${card.name} #${card.number}, ${card.set}`"
        class="h-24 w-16 shrink-0 rounded-sm object-cover shadow-sm"
        loading="lazy"
        width="64"
        height="96"
      />
      <div class="flex min-w-0 flex-col gap-1.5">
        <p class="text-base text-ink">{{ card.set }}</p>
        <h2 class="text-xl font-semibold leading-tight md:text-2xl">{{ card.name }} #{{ card.number }}</h2>
        <div class="flex flex-wrap items-center gap-2">
          <BaseBadge>{{ card.variant }}</BaseBadge>
          <BaseBadge :tone="gradeTone">{{ gradeLabel }}</BaseBadge>
        </div>
      </div>
    </div>

    <dl class="flex items-center justify-between gap-4 md:w-96 md:shrink-0">
      <BaseStat class="md:w-20" label="Pop" :value="formatPopulation(card.population)" />
      <BaseStat class="md:w-32" label="1M % Change" :value="formatChange(card.monthlyChange)" :trend="trend" />
      <BaseStat class="md:w-32" label="Last Sold" :value="formatPrice(card.lastSold)" />
    </dl>
  </article>
</template>
