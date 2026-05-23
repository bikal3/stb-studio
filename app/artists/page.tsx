import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artists — STB Studio',
  description: 'Meet the tattoo artists behind STB Studio in Kathmandu, Nepal.',
}

const artists = [
  {
    name: 'Susmita',
    fullName: 'Susmita Tamang Bomjan',
    photo: '/images/profile-pic.png',
    bio: 'Founder and lead artist of STB Studio. Susmita has been crafting custom tattoos in Kathmandu for years, specialising in fine line, floral, and micro realism. Her work is a reflection of her belief that every tattoo is a story — personal, permanent, and powerful.',
  },
]

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-ink px-6 py-12">
      <h1 className="font-serif italic font-light text-warm-white text-4xl mb-10">
        Artists
      </h1>

      <div className="grid grid-cols-2 gap-x-4 gap-y-12">
        {artists.map((artist, i) => (
          <div key={artist.name} className="flex flex-col">
            <div className="relative w-full aspect-square mb-4 overflow-hidden">
              <Image
                src={artist.photo}
                alt={artist.fullName}
                fill
                className="object-cover object-top"
              />
            </div>
            <h2 className="font-serif text-warm-white text-2xl mb-3">
              {artist.name}
            </h2>
            <p className="text-[12px] font-sans text-muted leading-relaxed mb-6">
              {artist.bio}
            </p>
            <div className="mt-auto">
              <p className="text-[11px] font-sans text-muted/50">{i + 1}/{artists.length}</p>
              <div className="w-8 h-px bg-muted/30 mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
