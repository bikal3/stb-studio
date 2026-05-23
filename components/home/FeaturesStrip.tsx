const features = [
  {
    title: 'Tattoos',
    description: 'Custom designs crafted for you.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        {/* needle tip */}
        <path d="M30 6 L42 18 L20 40 L12 42 L14 34 Z" />
        <path d="M26 10 L38 22" />
        {/* ink drop */}
        <path d="M8 42 C8 38 14 34 14 34" />
        {/* decorative dots around */}
        <circle cx="38" cy="10" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="10" cy="38" r="1" fill="currentColor" stroke="none" />
        {/* small lotus/flower motif */}
        <path d="M6 28 Q8 24 10 28 Q12 24 14 28" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: 'Custom Engraving',
    description: 'Phone cases, mirrors & more. By order only.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        {/* diamond / gem shape */}
        <polygon points="24,6 36,18 24,42 12,18" />
        <polygon points="24,6 36,18 24,20 12,18" strokeWidth="1" />
        <line x1="12" y1="18" x2="36" y2="18" strokeWidth="1" />
        {/* sparkle lines */}
        <line x1="24" y1="2" x2="24" y2="5" strokeWidth="1.2" />
        <line x1="38" y1="10" x2="41" y2="8" strokeWidth="1.2" />
        <line x1="10" y1="10" x2="7" y2="8" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Quality & Safety',
    description: 'Top hygiene standards. Your safety, our priority.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        {/* shield */}
        <path d="M24 4 L40 10 L40 24 C40 34 32 41 24 44 C16 41 8 34 8 24 L8 10 Z" />
        {/* inner shield line */}
        <path d="M24 10 L34 14 L34 24 C34 30 29 35 24 37 C19 35 14 30 14 24 L14 14 Z" strokeWidth="0.8" />
        {/* checkmark */}
        <path d="M17 24 L22 29 L31 18" strokeWidth="1.8" />
      </svg>
    ),
  },
]

export default function FeaturesStrip() {
  return (
    <section className="bg-ink px-8 py-10">
      <div className="grid grid-cols-3 divide-x divide-warm-grey/20">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center px-6 gap-3">
            <span className="text-accent">{f.icon}</span>
            <p className="text-[11px] tracking-[3px] uppercase font-sans text-warm-white font-semibold">
              {f.title}
            </p>
            <p className="text-[11px] font-sans text-muted leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
