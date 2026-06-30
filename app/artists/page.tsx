import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists — STB Studio",
  description: "Meet the tattoo artists behind STB Studio in Kathmandu, Nepal.",
};

const artists = [
  {
    name: "Susmita",
    fullName: "Susmita Tamang Bhandari",
    photo: "/images/profile-pic.png",
    specialty: "Fine Line · Floral · Micro Realism",
    bio: "Founder and lead artist of STB Studio. Susmita has been crafting custom tattoos in Kathmandu for years. Her work reflects a belief that every tattoo is a story — personal, permanent, and powerful.",
  },
  {
    name: "Aarav",
    fullName: "Aarav Shrestha",
    photo: "/images/fine-line/IMG_8814.JPG",
    specialty: "Blackwork · Geometric · Old School",
    bio: "Aarav brings bold precision to every piece. With a background in graphic design, he specialises in blackwork and geometric patterns that are clean, intentional, and built to last a lifetime.",
  },
  {
    name: "Priya",
    fullName: "Priya Rai",
    photo: "/images/colour-tattoo/IMG_8807.JPG",
    specialty: "Colour · Watercolour · Illustrative",
    bio: "Priya is known for her vibrant colour work and illustrative style. She approaches each tattoo like a painting — layering colour and texture to create pieces that feel alive on the skin.",
  },
  {
    name: "Rohan",
    fullName: "Rohan Gurung",
    photo: "/images/black-and-grey/IMG_8862.jpg",
    specialty: "Black & Grey · Portrait · Realism",
    bio: "Rohan specialises in hyper-realistic black and grey tattoos. His portraits capture emotion with stunning accuracy, making him the go-to artist for memorial pieces and detailed realism.",
  },
  {
    name: "Maya",
    fullName: "Maya Tamang",
    photo: "/images/floral/IMG_8824.jpg",
    specialty: "Floral · Mandala · Dotwork",
    bio: "Maya draws inspiration from nature and sacred geometry. Her intricate mandala and dotwork pieces have a meditative quality — each dot placed with intention, each petal drawn with care.",
  },
  {
    name: "Kiran",
    fullName: "Kiran Lama",
    photo: "/images/micro-realism/IMG_8808.jpg",
    specialty: "Micro Realism · Fine Detail · Minimalist",
    bio: "Kiran is a master of the small scale. Working in micro realism and minimalist styles, he proves that the most powerful tattoos are often the ones that say the most with the least.",
  },
];

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-warm-white max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-[10px] tracking-[4px] uppercase font-sans text-accent mb-2">Our Team</p>
        <h1 className="font-serif italic font-light text-ink text-4xl">Artists</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
        {artists.map((artist, i) => (
          <div key={artist.name} className="flex flex-col">
            <div className="relative w-full aspect-square mb-4 overflow-hidden bg-warm-grey">
              <Image
                src={artist.photo}
                alt={artist.fullName}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1152px) 33vw, 384px"
                className="object-cover object-top"
              />
            </div>
            <h2 className="font-serif text-ink text-xl mb-1">{artist.name}</h2>
            <p className="text-[10px] tracking-[2px] uppercase font-sans text-accent mb-2">{artist.specialty}</p>
            <p className="text-[11px] font-sans text-muted leading-relaxed mb-4">{artist.bio}</p>
            <div className="mt-auto">
              <p className="text-[10px] font-sans text-warm-grey">
                {i + 1}/{artists.length}
              </p>
              <div className="w-6 h-px bg-warm-grey mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
