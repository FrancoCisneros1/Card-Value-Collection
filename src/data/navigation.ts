import {
  Layers,
  Tag,
  Globe,
  BarChart3,
  PersonStanding,
  Rss,
  LayoutDashboard,
  GalleryHorizontal,
  Search,
  Eye,
  TrendingUp,
  BriefcaseBusiness,
} from 'lucide-vue-next'
import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  { id: 'cards', label: 'Cards', icon: Layers, href: '#' },
  { id: 'shop', label: 'Shop', icon: Tag, href: '#' },
  { id: 'showcase', label: 'Showcase', icon: Globe, href: '#' },
  { id: 'indexes', label: 'Indexes', icon: BarChart3, href: '#' },
  { id: 'players', label: 'Players', icon: PersonStanding, href: '#' },
  { id: 'feed', label: 'Feed', icon: Rss, href: '#' },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '#', isPro: true },
  { id: 'collection', label: 'Collection', icon: GalleryHorizontal, href: '#', isPro: true },
  { id: 'sales-history', label: 'Sales History', icon: Search, href: '#', isPro: true },
  { id: 'watchlist', label: 'Watchlist', icon: Eye, href: '#', isPro: true },
  { id: 'compare', label: 'Compare', icon: TrendingUp, href: '#', isPro: true },
  { id: 'industry', label: 'Industry', icon: BriefcaseBusiness, href: '#', isPro: true },
]

export const brand = {
  name: 'Card Ladder',
  ctaLabel: 'Try Card Ladder Pro!',
  ctaCaption: 'with a 7-day free trial',
} as const
