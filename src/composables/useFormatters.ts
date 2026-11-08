const numberFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export function formatPrice(value: number): string {
  if (value >= 1000) return `$${numberFormatter.format(value / 1000)}k`
  return `$${numberFormatter.format(value)}`
}

export function formatChange(value: number): string {
  const sign = value > 0 ? '+' : value < 0 ? '-' : ''
  return `${sign}${numberFormatter.format(Math.abs(value))}%`
}

export function formatPopulation(value: number | null): string {
  return value === null ? 'N/A' : value.toLocaleString('en-US')
}
