import type { ServiceCategory } from '@/lib/content'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/ui/Reveal'
import ServiceCard from './ServiceCard'

type Props = {
  category: ServiceCategory
  index: number
  dark?: boolean
}

export default function ServiceCategorySection({ category, index, dark = false }: Props) {
  return (
    <Section surface={dark ? 'cream-dark' : 'cream'} size="sm">
      <Container width="narrow">
        <Reveal className="flex items-baseline gap-4">
          <SectionLabel className="translate-y-px">
            {String(index + 1).padStart(2, '0')}
          </SectionLabel>
          <h2 className="font-serif text-h2 font-light text-ink">{category.category}</h2>
        </Reveal>

        <div className="mt-8 flex flex-col gap-2.5">
          {category.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 70}>
              <ServiceCard service={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
