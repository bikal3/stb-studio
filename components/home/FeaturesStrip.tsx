const features = [
  {
    title: 'Tattoos',
    description: 'Custom designs crafted for you.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M28 6l6 6-16 16-4 2 2-4L28 6z" />
        <path d="M24 10l6 6" />
        <path d="M10 30c-2 2-4 2-6 4" strokeLinecap="round" />
        <circle cx="32" cy="8" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Custom Engraving',
    description: 'Phone cases, mirrors & more. By order only.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M20 4v6M20 30v6M4 20h6M30 20h6" strokeLinecap="round" />
        <path d="M20 4l2.5 9.5L32 12l-7.5 7.5L27 30l-7-7-7 7 2.5-10.5L8 12l9.5 2.5z" />
      </svg>
    ),
  },
  {
    title: 'Quality & Safety',
    description: 'Top hygiene standards. Your safety, our priority.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M20 4l14 5v10c0 8-6 14-14 17C6 33 0 27 0 19V9z" transform="translate(3 2)" />
        <path d="M13 20l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
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
