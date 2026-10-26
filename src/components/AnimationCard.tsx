import type { AnimationItem } from '../types.ts'

interface AnimationCardProps {
  item: AnimationItem
}

export function AnimationCard({ item }: AnimationCardProps) {
  return (
    <div className="group relative flex flex-col min-h-[280px] rounded-lg bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 transition-colors duration-200 overflow-hidden shadow-sm">
      <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20 pointer-events-none">
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider group-hover:text-neutral-400 transition-colors">
          #{item.id}
        </span>
        <span className="text-neutral-700 text-[10px]">•</span>
        <span className="text-[11px] font-medium text-neutral-400 group-hover:text-neutral-200 transition-colors">
          {item.title}
        </span>
      </div>

      <div
        className={`anim-bg anim-bg-${item.id} w-full flex-1 flex items-center justify-center pt-8 pb-3 px-4 overflow-hidden select-none`}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) {
            e.preventDefault()
          }
        }}
      >
        <div
          className={`anim-scope anim-${item.id}`}
          style={{
            transform: `scale(${item.scale ?? 0.6})`,
            transformOrigin: 'center center',
          }}
          dangerouslySetInnerHTML={{ __html: item.html }}
        />
      </div>
    </div>
  )
}
