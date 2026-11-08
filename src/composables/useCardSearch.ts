import { computed, ref, type Ref } from 'vue'
import type { TradingCard } from '@/types'

export function useCardSearch(source: Ref<TradingCard[]> | TradingCard[]) {
  const query = ref('')

  const results = computed(() => {
    const list = Array.isArray(source) ? source : source.value
    const term = query.value.trim().toLowerCase()
    if (!term) return list
    return list.filter((card) =>
      [card.name, card.set, card.variant, `#${card.number}`]
        .join(' ')
        .toLowerCase()
        .includes(term),
    )
  })

  return { query, results }
}
