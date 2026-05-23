const features = [
  {
    title: 'Tattoos',
    description: 'Custom designs crafted for you.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        {/* machine body */}
        <rect x="10" y="8" width="22" height="14" rx="2" />
        {/* coil detail on body */}
        <line x1="15" y1="13" x2="27" y2="13" strokeWidth="1" />
        <line x1="15" y1="16" x2="27" y2="16" strokeWidth="1" />
        {/* side contact screw */}
        <circle cx="35" cy="12" r="3" />
        <line x1="35" y1="10" x2="35" y2="14" strokeWidth="1" />
        {/* grip / handle */}
        <rect x="17" y="22" width="8" height="16" rx="3" />
        {/* grip texture lines */}
        <line x1="17" y1="26" x2="25" y2="26" strokeWidth="0.8" />
        <line x1="17" y1="29" x2="25" y2="29" strokeWidth="0.8" />
        <line x1="17" y1="32" x2="25" y2="32" strokeWidth="0.8" />
        {/* needle tube */}
        <line x1="21" y1="38" x2="21" y2="44" strokeWidth="1.2" />
        {/* needle tip point */}
        <path d="M19 44 L21 47 L23 44" />
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
