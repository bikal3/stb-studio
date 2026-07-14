import type { ServiceItem } from '@/lib/content'

type Props = {
  service: ServiceItem
}

export default function ServiceCard({ service }: Props) {
  return (
    <div className="bg-warm-white px-5 py-4 border-l-2 border-accent">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-[12px] tracking-[2px] uppercase text-ink font-sans font-semibold">
          {service.name}
        </p>
        {service.price && (
          <p className="text-[12px] text-accent font-sans font-semibold whitespace-nowrap">
            {service.price}
          </p>
        )}
      </div>
      <p className="text-[13px] text-muted font-sans mt-1 leading-relaxed">
        {service.description}
      </p>
      {service.duration && (
        <p className="text-[11px] text-muted font-sans mt-1">{service.duration}</p>
      )}
    </div>
  )
}
