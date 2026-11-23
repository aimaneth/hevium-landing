import type { MetadataRoute } from 'next';
import { HOME } from '@/lib/seo';

export const dynamic = 'force-static';

// Root landing page on hevium.xyz; public/robots.txt references this sitemap directly.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: HOME, changeFrequency: 'weekly', priority: 1 }];
}
