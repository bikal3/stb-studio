const features = [
  {
    num: '01',
    title: 'Tattoos',
    description: "Every tattoo tells a story. Whether it's your vision, your memory, or your favourite design, our artists bring it to life with creativity, precision, and care. Any style, any design — customized the way you want it.",
  },
  {
    num: '02',
    title: 'Custom Engraving',
    description: "Your ideas, gently engraved on phone cases and mirrors. Quietly personal, made just for you — crafted only after your order.",
  },
  {
    num: '03',
    title: 'Quality & Safety',
    description: "Where hygiene meets creativity. We maintain a clean, comfortable environment with sterilised equipment, while our artists thoughtfully work with your ideas to create satisfying results.",
  },
  {
    num: '04',
    title: 'STB Limited Drops (Art Only)',
    description: "Carefully detailed mandala artworks inspired by elements, energy and identity. Quietly expressive, each piece is created with meaning and intention.",
  },
]

export default function FeaturesStrip() {
  return (
    <section className="bg-cream px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-warm-grey">
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
