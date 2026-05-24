const features = [
  {
    num: '01',
    title: 'Tattoos',
    description: "Every tattoo tells a story. Whether it's your vision, your memory, or your favourite design, our artists bring it to life with creativity, precision, and care. Any style, any design — customized the way you want it.",
  },
  {
    num: '02',
    title: 'Custom Engraving',
    description: 'Personalised engravings on phone cases, mirrors & more. By order only.',
  },
  {
    num: '03',
    title: 'Quality & Safety',
    description: 'Sterile equipment, premium inks and top hygiene standards on every visit.',
  },
]

export default function FeaturesStrip() {
  return (
    <section className="bg-cream px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-warm-grey">
        {features.map((f) => (
          <div key={f.title} className="md:px-8 first:pl-0 last:pr-0">
            <p className="text-[11px] font-sans text-accent tracking-[2px] mb-3">{f.num}</p>
            <h3 className="font-serif italic font-light text-ink text-xl mb-3">{f.title}</h3>
            <p className="text-[11px] font-sans text-muted leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
