<script setup lang="ts">
import { priceGuideLinks } from '@/data/categories'
</script>

<template>
  <section class="flex flex-col gap-6" aria-labelledby="price-guide-title">
    <h1
      id="price-guide-title"
      class="text-balance font-display text-3xl font-black uppercase leading-none tracking-tight md:text-5xl"
    >
      Sports Card Price Guide
    </h1>
    <div class="flex flex-col gap-4 font-display text-sm italic leading-relaxed text-ink-muted">
      <p class="text-pretty">
        Card Ladder is the most comprehensive sports card price guide available. Search millions of
        trading cards and sales. We are the only price guide that tracks every public sale dating
        back to 2000. We have price guides for
        <template v-for="(link, index) in priceGuideLinks" :key="link.label">
          <a :href="link.href" class="text-brand hover:underline">{{ link.label }}</a
          >{{ index < priceGuideLinks.length - 1 ? ', ' : '' }}
        </template>
        and much more.
      </p>
      <p>Upgrade to Card Ladder PRO to gain access to all cards and sales data.</p>
    </div>
  </section>
</template>
