import {
  Dribbble,
  CircleDot,
  Volleyball,
  Disc,
  Skull,
  Swords,
  Goal,
  Shield,
  Trophy,
  Dumbbell,
  Users,
} from 'lucide-vue-next'
import type { Category } from '@/types'

export const categories: Category[] = [
  { id: 'basketball', label: 'Basketball', icon: Dribbble },
  { id: 'baseball', label: 'Baseball', icon: CircleDot },
  { id: 'football', label: 'Football', icon: Volleyball },
  { id: 'pokemon', label: 'Pokemon', icon: Disc },
  { id: 'one-piece', label: 'One Piece', icon: Skull },
  { id: 'hockey', label: 'Hockey', icon: Swords },
  { id: 'soccer', label: 'Soccer', icon: Goal },
  { id: 'marvel', label: 'Marvel', icon: Shield },
  { id: 'multi-sport', label: 'Multi-Sport', icon: Trophy },
  { id: 'ufc-mma', label: 'UFC/MMA', icon: Dumbbell },
  { id: 'wrestling', label: 'Wrestling', icon: Users },
]

export const priceGuideLinks: { label: string; href: string }[] = [
  { label: 'baseball cards', href: '#' },
  { label: 'basketball cards', href: '#' },
  { label: 'football cards', href: '#' },
  { label: 'hockey cards', href: '#' },
  { label: 'Pokemon cards', href: '#' },
]
