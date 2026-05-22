import { heroContent, services, aftercareInstructions, artistContent, servicesPreview } from '@/lib/content'

describe('heroContent', () => {
  it('has the STB tagline lines', () => {
    expect(heroContent.headline).toEqual(['Ink.', 'Object.', 'Identity.'])
  })
})

describe('services', () => {
  it('has 4 categories', () => {
    expect(services).toHaveLength(4)
  })

  it('first category is Tattoo Sessions with 4 items', () => {
    expect(services[0].category).toBe('Tattoo Sessions')
    expect(services[0].items).toHaveLength(4)
  })

  it('Micro Session has correct price', () => {
    const micro = services[0].items[0]
    expect(micro.name).toBe('Micro Session')
    expect(micro.price).toBe('Rs 3,000 – 6,000')
  })
})

describe('servicesPreview', () => {
  it('has exactly 3 items', () => {
    expect(servicesPreview).toHaveLength(3)
  })
})

describe('aftercareInstructions', () => {
  it('has at least 6 instructions', () => {
    expect(aftercareInstructions.length).toBeGreaterThanOrEqual(6)
  })
})

describe('artistContent', () => {
  it('has the correct artist name', () => {
    expect(artistContent.name).toBe('Susmita Tamang Bomjan')
  })
})
