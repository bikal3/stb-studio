import type { ServiceItem } from '@/lib/content'

type Props = {
  service: ServiceItem
}

export default function ServiceCard({ service }: Props) {
  return (
    <article className="group relative flex flex-col gap-3 bg-warm-white p-6 transition-transform duration-500 ease-soft hover:-translate-y-1 sm:flex-row sm:items-start sm:gap-8 sm:p-7">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-0.5 bg-accent-ink/35 transition-colors duration-500 group-hover:bg-accent-ink"
      />

      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-h3 font-light text-ink">{service.name}</h3>
        <p className="mt-2 font-sans text-[0.9375rem] leading-relaxed text-muted">
          {service.description}
        </p>
        {service.duration && (
          <p className="mt-3 text-eyebrow uppercase font-sans text-muted">{service.duration}</p>
        )}
      </div>

      {service.price && (
        <p className="shrink-0 font-sans text-[0.9375rem] font-medium text-accent-ink sm:pt-1 sm:text-right">
          {service.price}
        </p>
      )}
    </article>
  )
}
