import { whatsappUrl, instagramUrl } from '@/lib/links'
import { siteConfig } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-7 flex justify-between items-center">
      <div>
        <p className="text-[12px] tracking-[3px] text-warm-white uppercase font-sans">
          {siteConfig.name}
        </p>
        <p className="text-[10px] text-muted font-sans mt-1">{siteConfig.location}</p>
      </div>
      <div className="text-right flex flex-col gap-1">
        <a
          href={instagramUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-muted font-sans hover:text-warm-white transition-colors"
          aria-label="Instagram"
        >
          Instagram
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-muted font-sans hover:text-warm-white transition-colors"
          aria-label="WhatsApp"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  )
}
