import Hero from '@/components/home/Hero'
import FeaturesStrip from '@/components/home/FeaturesStrip'
import GalleryPreview from '@/components/home/GalleryPreview'
import ArtistStrip from '@/components/home/ArtistStrip'
import ServicesPreview from '@/components/home/ServicesPreview'
import OpenHours from '@/components/home/OpenHours'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesStrip />
      <GalleryPreview />
      <ArtistStrip />
      <ServicesPreview />
      <OpenHours />
    </>
  )
}
