import Hero from '@/components/home/Hero'
import FeaturesStrip from '@/components/home/FeaturesStrip'
import GalleryPreview from '@/components/home/GalleryPreview'
import PhilosophyQuote from '@/components/home/PhilosophyQuote'
import ArtistStrip from '@/components/home/ArtistStrip'
import ServicesPreview from '@/components/home/ServicesPreview'
import OpenHours from '@/components/home/OpenHours'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesStrip />
      <GalleryPreview />
      <PhilosophyQuote />
      <ArtistStrip />
      <ServicesPreview />
      <OpenHours />
    </>
  )
}
