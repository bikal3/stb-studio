import Hero from '@/components/home/Hero'
import FeaturesStrip from '@/components/home/FeaturesStrip'
import ArtistStrip from '@/components/home/ArtistStrip'
import GalleryPreview from '@/components/home/GalleryPreview'
import ServicesPreview from '@/components/home/ServicesPreview'
import PhilosophyQuote from '@/components/home/PhilosophyQuote'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesStrip />
      <ArtistStrip />
      <GalleryPreview />
      <ServicesPreview />
      <PhilosophyQuote />
    </>
  )
}
