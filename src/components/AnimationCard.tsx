import type { AnimationItem } from '../types.ts'

interface AnimationCardProps {
  item: AnimationItem
}

export function AnimationCard({ item }: AnimationCardProps) {
  return (
    <div className="group relative flex flex-col h-[280px] rounded-lg bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 transition-colors duration-200 overflow-hidden shadow-sm">
      {/* Discreet corner badge with subtle contrast backing */}
      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-neutral-800/80 z-20 pointer-events-none">
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider group-hover:text-neutral-300 transition-colors">
          #{item.id}
        </span>
        <span className="text-neutral-600 text-[10px]">•</span>
        <span className="text-[11px] font-medium text-neutral-300 group-hover:text-white transition-colors">
          {item.title}
        </span>
      </div>

      {/* Animation viewport with authentic background */}
      <div
        className={`anim-bg anim-bg-${item.id} w-full h-full relative flex items-center justify-center pt-6 pb-2 px-3 overflow-hidden select-none`}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) {
            e.preventDefault()
          }
        }}
      >
        <div
          className={`anim-scope anim-${item.id} flex items-center justify-center shrink-0`}
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
