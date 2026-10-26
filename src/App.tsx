import { useState, useMemo } from 'react'
import type { AnimationCategory } from './types.ts'
import { allAnimations } from './data/animations.ts'
import { Header } from './components/Header.tsx'
import { AnimationCard } from './components/AnimationCard.tsx'

export default function App() {
  const [activeCategory, setActiveCategory] = useState<AnimationCategory>('all')

  const categoryCounts = useMemo(() => {
    const counts: Record<AnimationCategory, number> = {
      all: allAnimations.length,
      buttons: 0,
      images: 0,
      menus: 0,
      cards: 0,
      transforms: 0,
      keyframes: 0,
      loaders: 0,
      'clip-path': 0,
    }

    allAnimations.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1
    })

    return counts
  }, [])

  const filteredAnimations = useMemo(() => {
    if (activeCategory === 'all') return allAnimations
    return allAnimations.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="min-h-screen bg-black text-neutral-100 flex flex-col selection:bg-neutral-800 selection:text-white">
      <Header
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        categoryCounts={categoryCounts}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredAnimations.map((item) => (
            <AnimationCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  )
}
