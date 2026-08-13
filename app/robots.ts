import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/content'

// Static export: emitted once at build time to out/robots.txt.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
