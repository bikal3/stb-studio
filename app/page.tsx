import Hero from '@/components/home/Hero'
import ArtistStrip from '@/components/home/ArtistStrip'
import GalleryPreview from '@/components/home/GalleryPreview'
import ServicesPreview from '@/components/home/ServicesPreview'
import PhilosophyQuote from '@/components/home/PhilosophyQuote'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ArtistStrip />
      <GalleryPreview />
      <ServicesPreview />
      <PhilosophyQuote />
    </>
  )
}
