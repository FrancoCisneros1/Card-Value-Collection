import type { Component } from 'vue'

export interface NavItem {
  id: string
  label: string
  icon: Component
  href: string
  isPro?: boolean
}

export interface Category {
  id: string
  label: string
  icon: Component
}

export type Grader = 'PSA' | 'BGS' | 'Raw'

export interface CardGrade {
  grader: Grader
  value?: number
}

export interface TradingCard {
  id: string
  set: string
  name: string
  number: string
  variant: string
  grade: CardGrade
  image: string
  population: number | null
  monthlyChange: number
  lastSold: number
}

export type BadgeTone = 'neutral' | 'psa' | 'bgs' | 'plain'
export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'sm' | 'md' | 'lg'
