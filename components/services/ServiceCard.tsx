import type { ServiceItem } from '@/lib/content'

type Props = {
  service: ServiceItem
}

export default function ServiceCard({ service }: Props) {
  return (
    <div className="bg-warm-white px-5 py-4 border-l-2 border-accent">
      <p className="text-[12px] tracking-[2px] uppercase text-ink font-sans font-semibold">
        {service.name}
      </p>
      <p className="text-[11px] text-muted font-sans mt-1 leading-relaxed">
        {service.description}
      </p>
      {service.duration && (
        <p className="text-[11px] text-muted font-sans mt-1">{service.duration}</p>
      )}
    </div>
  )
}
