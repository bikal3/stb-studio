import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/content'

// Static export: emitted once at build time to out/sitemap.xml.
export const dynamic = 'force-static'

const ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/gallery', priority: 0.9 },
  { path: '/services', priority: 0.8 },
  { path: '/about', priority: 0.7 },
  { path: '/book', priority: 0.8 },
  { path: '/aftercare', priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: 'monthly',
    priority,
  }))
}
