import { philosophyQuoteContent } from '@/lib/content'

export default function PhilosophyQuote() {
  return (
    <section className="bg-ink-light px-8 py-12 text-center">
      <div className="w-8 h-px bg-muted mx-auto mb-6" />
      <blockquote className="font-serif italic text-warm-white text-xl leading-relaxed max-w-xs mx-auto">
        &ldquo;{philosophyQuoteContent.quote}&rdquo;
      </blockquote>
      <div className="w-8 h-px bg-muted mx-auto mt-6 mb-4" />
      <p className="text-[10px] tracking-[3px] text-muted uppercase font-sans">
        {philosophyQuoteContent.attribution}
      </p>
    </section>
  )
}
