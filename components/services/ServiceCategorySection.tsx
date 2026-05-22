import type { ServiceCategory } from '@/lib/content'
import ServiceCard from './ServiceCard'

type Props = {
  category: ServiceCategory
  dark?: boolean
}

export default function ServiceCategorySection({ category, dark = false }: Props) {
  return (
    <section className={`px-8 py-10 ${dark ? 'bg-cream-dark' : 'bg-warm-white'}`}>
      <h2 className="font-serif italic font-light text-2xl text-ink mb-6">
        {category.category}
      </h2>
      <div className="flex flex-col gap-3">
        {category.items.map((item) => (
          <ServiceCard key={item.name} service={item} />
        ))}
      </div>
    </section>
  )
}
