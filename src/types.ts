export type AnimationCategory =
  | 'all'
  | 'buttons'
  | 'images'
  | 'menus'
  | 'cards'
  | 'transforms'
  | 'keyframes'
  | 'loaders'
  | 'clip-path'

export interface AnimationItem {
  id: string
  title: string
  category: AnimationCategory
  html: string
  scale?: number
  description?: string
}
