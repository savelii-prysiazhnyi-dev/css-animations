import type { AnimationCategory } from '../types.ts'

interface HeaderProps {
  activeCategory: AnimationCategory
  onSelectCategory: (category: AnimationCategory) => void
  categoryCounts: Record<AnimationCategory, number>
}

const CATEGORIES: { id: AnimationCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'images', label: 'Images' },
  { id: 'menus', label: 'Menus' },
  { id: 'cards', label: 'Cards' },
  { id: 'transforms', label: 'Transforms' },
  { id: 'keyframes', label: 'Keyframes' },
  { id: 'loaders', label: 'Loaders' },
  { id: 'clip-path', label: 'Clip-Path' },
]

export function Header({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800 px-4 py-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-white opacity-90" />
          <h1 className="text-sm font-bold tracking-widest text-white uppercase font-mono">
            CSS Animations
          </h1>
        </div>

        <nav className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map(({ id, label }) => {
            const isActive = activeCategory === id
            const count = categoryCounts[id] ?? 0

            return (
              <button
                key={id}
                onClick={() => onSelectCategory(id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                <span>{label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    isActive ? 'bg-neutral-200 text-neutral-900 font-semibold' : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
