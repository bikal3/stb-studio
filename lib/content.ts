export const siteConfig = {
  name: "STB Studio",
  location: "Kathmandu, Nepal",
  description: "A sanctuary for art and self-expression. Every tattoo is a story. Every piece, a companion for life.",
  url: "https://bikal3.github.io/stb-studio",
};

export const openingHours = {
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ] as const,
  opens: "11:00 am",
  closes: "7:00 pm",
};

export const heroContent = {
  eyebrow: "Tattoo Studio · Kathmandu",
  headline: ["Ink.", "Object.", "Identity."] as string[],
  subtext: "A home for self-expression, meaningful art and lasting stories.",
  cta: "Book a Consult",
};

export const artistContent = {
  name: "Susmita Tamang Bhandari",
  label: "The Artist",
  pullQuote: "This is not just a place of work, but a place of belonging.",
  disciplines: ["Fine Line", "Mandala", "Micro Realism", "Floral", "Blackwork"],
  // Condensed from `bio` below, for the home page introduction.
  studioIntro:
    "A tattoo studio, Susmita believes, is a place where people arrive happy, grieving, excited or nervous — and leave with the same quiet smile. STB Studio was built to be that room.",
  bio: "Susmita Tamang Bhandari believes that a tattoo studio is a place where one can learn valuable life lessons, similar to a hospital. While hospitals show the harsh realities of life, tattoo studios offer a sense of acceptance. People from all walks of life visit tattoo studios - from those who are happy, to those who are grieving, excited, or nervous. Despite the initial emotions, there is a sense of satisfaction and a natural smile that emerges after getting a tattoo. Tattoos are magical. Contrary to popular belief, tattoo studios are often misunderstood as intimidating establishments, associated with unsavory characters, blaring music, and a run-down atmosphere. However, your perception will drastically change once you step into a reputable studio and immerse yourself in the unique experience it offers. Regardless of the size or meaning behind a tattoo, as long as it brings happiness and fulfills ones desires, the experience of creating art together is truly magical.",
  philosophy:
    "STB Studio is designed with a color scheme of black, white, and grey. Black symbolizes risk, white represents opportunities, and grey embodies magic. This signifies that one should not rush into opportunities or give up when faced with risks. Instead, take your time, embrace the process, and let the magic unfold.",
  sanctuaryQuote:
    "This place is my sanctuary. It's where my heart truly lies. It's where I thrive. Sharing my art with the world and bringing joy to others, I am not only chasing a dream, but living it.",
  visionStatement:
    "I launch my own studio, a sanctuary for artists like myself, where we can truly feel at home, free to create and express our passion. This is not just a place of work, but a place of belonging. It is now the moment to bring this vision to life in my hometown and establish deeper connections with my community than I have ever before.",
};

export const philosophyQuoteContent = {
  quote: "Tattoos are magical. This is not just a place of work, but a place of belonging.",
  attribution: "— Susmita Tamang Bhandari",
};

export type ServiceItem = {
  name: string;
  description: string;
  duration: string | null;
  price: string;
};

export type ServiceCategory = {
  category: string;
  items: ServiceItem[];
};

export const services: ServiceCategory[] = [
  {
    category: "Tattoo Sessions",
    items: [
      {
        name: "Micro Session",
        description: "Minimal symbols · fine line · small placements",
        duration: "30–60 min",
        price: "Rs 3,000 – 6,000",
      },
      {
        name: "Signature Session",
        description: "Custom STB design · mandala · symbolic work",
        duration: "2–4 hours",
        price: "Rs 8,000 – 18,000",
      },
      {
        name: "Immersive Session",
        description: "Full concept design · large scale body art",
        duration: "Half day / Full day",
        price: "Rs 20,000 – 60,000+",
      },
      {
        name: "Private Design Experience",
        description: "Full custom consultation + exclusive design creation. No repeat designs.",
        duration: null,
        price: "From Rs 15,000",
      },
    ],
  },
  {
    category: "STB Objects",
    items: [
      {
        name: "Custom Phone Cases",
        description: "Hand-detailed tattoo-style design. Signature pieces only.",
        duration: null,
        price: "Rs 1,500 – 10,000",
      },
      {
        name: "Mirror Artworks",
        description: "Functional object turned into art piece.",
        duration: null,
        price: "Rs 3,000 – 30,000+",
      },
      {
        name: "Object Drop Series",
        description: "Limited edition sculptural artworks (pinecone mandala / experimental pieces)",
        duration: null,
        price: "Rs 10,000 – 45,000+",
      },
    ],
  },
  {
    category: "STB Custom Experience",
    items: [
      {
        name: "Design Consultation",
        description:
          "Personal concept creation (tattoo + object + identity). Waived if proceeding with tattoo or object order.",
        duration: null,
        price: "Rs 2,000 – 5,000",
      },
      {
        name: "Signature Collab",
        description: "You + artist co-create a design system: tattoo + matching object (case / mirror / art piece).",
        duration: null,
        price: "Rs 10,000 – 50,000+",
      },
    ],
  },
  {
    category: "STB Limited Drops",
    items: [
      {
        name: "🔥 IGNITION",
        description: "Fire / Origin · Creation • Energy • Power",
        duration: null,
        price: "Rs 10,000 – 45,000+",
      },
      {
        name: "🌑 OBSIDIAN",
        description: "Earth / Shadow · Silence • Strength • Depth",
        duration: null,
        price: "Rs 10,000 – 45,000+",
      },
      {
        name: "🌊 TIDAL",
        description: "Water / Flow · Healing • Motion • Balance",
        duration: null,
        price: "Rs 10,000 – 45,000+",
      },
      {
        name: "🩸 RITUAL",
        description: "Blood / Intensity · Transformation • Emotion • Release",
        duration: null,
        price: "Rs 10,000 – 45,000+",
      },
      {
        name: "☀️ HALO",
        description: "Light / Sacred · Clarity • Elevation • Ascension",
        duration: null,
        price: "Rs 10,000 – 45,000+",
      },
    ],
  },
];

export const servicesPreview: ServiceItem[] = [
  services[0].items[0], // Micro Session
  services[0].items[1], // Signature Session
  services[0].items[2], // Immersive Session
];

export const aftercareInstructions: string[] = [
  "Keep your plastic wrap on the newly tattooed area for at least 1 hour.",
  "Clean it with water and pat dry once you unwrap the bandage.",
  "After two days, apply a very thin layer of aftercare balm. Apply twice a day.",
  "Your ink will peel and scab — this is absolutely normal. Do not pick the scab; doing so risks harming yourself and your design.",
  "Do not swim or soak in a spa or bath for at least two weeks. Showering is fine, but do not scrub the tattoo.",
  "Excess tattoo ink may stain linen — protect these items. Avoid direct sunlight.",
  "If you have any questions or concerns about aftercare, please contact us.",
];

export const touchUpPolicy: string[] = [
  "Due to the individuality of tattoos and how they react with different skin, touch-ups may be required from time to time. A touch-up is designed to repair small discrepancies including minor ink drop-out and colour fading.",
  "Subject to following correct aftercare instructions, the complimentary touch-up is available within 3 months of your original tattoo date. After the 3-month expiry, touch-up appointments will be quoted at the standard rate.",
  "The complimentary touch-up can only be redeemed at the original studio location and cannot be transferred.",
  "The touch-up appointment must be completed by the original artist. If unavailable, an alternate artist will be appointed at the studio's discretion.",
  "Failure to follow correct aftercare instructions will void your complimentary touch-up.",
  "Areas not eligible for complimentary touch-up: Hands, Fingers, Feet, Toes, Neck, Face (non-cosmetic), Lips (non-cosmetic), Elbows.",
];

export const noRefundPolicy =
  "All payments made to STB Studio are non-refundable under any circumstances, regardless of changes in situation, unmet expectations, or missed appointments.";

export const tattooHistoryContent = {
  heading: "The Art & Its Roots",
  nepalHeading: "Nepal's Tattoo Traditions",
  intro:
    "The history of tattooing is rich and varied, with each culture bringing its own unique traditions and meanings to the art form. In ancient Egypt, tattoos were used for religious purposes, often depicting symbols of protection or devotion to a particular deity. In the Polynesian Islands, tattoos were a way to showcase social status and lineage, with intricate designs representing a person's place within their community.",
  nepal:
    "The exact origin of tattooing in Nepali society remains unknown, but the practice has been a significant aspect of people's social lives since ancient times. It is a longstanding tradition observed in various ethnic groups such as the Newars, Tharu, Gurungs, and Magars. Women in Tebahal and Thimi, Bhaktapur, often get tattoos during special occasions. Leg tattoos, known as 'Lha Chyogu' in Newari, symbolize strength. Tharu tribe members receive tattoos called \"Godhani\" featuring nature-inspired designs. Gurung and Magar women adorn their faces with designs representing the sun, moon, and stars.",
  today:
    "Today, tattooing has become a universal form of self-expression, with people from all walks of life using tattoos to showcase their personal beliefs, interests, and experiences. Whether it's a small symbol with deep personal meaning or a full-body masterpiece, tattoos continue to be a powerful form of artistic expression and cultural significance.",
};

export const studioServiceContent = {
  intro:
    "Our studio is a welcoming and inclusive space where clients can feel comfortable and confident in their choice of tattoo. We prioritize cleanliness and safety, using only the highest quality equipment and following strict sterilization protocols.",
  detail:
    "At STB Studio, our skilled tattoo artists specialize in realism, blackwork, geometric, mandala, fineline, Japanese, micro realism and more, creating meaningful designs that you can proudly display. Whether you desire a small, delicate tattoo or a detailed back piece, we ensure that each design receives the same level of care and attention to detail.",
};

export const galleryPreviewCount = 6;

export const beYourselfContent = {
  heading: "Be Unapologetically You",
  body: "Life is too short to be concerned with the opinions of others. It's perfectly fine to express yourself. It's perfectly fine to have one tattoo, and it's also perfectly fine to have a hundred. Just be yourself. STB Studio supports you in being yourself.",
};

export const aftercareIntro =
  "It's important to care for your tattoo, no matter its size. Follow these guidelines to keep your ink looking its best.";

export const aftercareSignOff = "ENJOY YOUR NEW INK, FROM THE STB STUDIO TEAM.";

export const bookingCtaLabel = "Book a Consult";
