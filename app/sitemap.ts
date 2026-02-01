import type { MetadataRoute } from 'next';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://kekelis-studio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{ path: string; changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/', changeFrequency: 'weekly' },
    { path: '/portfolio', changeFrequency: 'weekly' },
    { path: '/about', changeFrequency: 'monthly' },
    { path: '/contact', changeFrequency: 'monthly' },
    { path: '/book-a-session', changeFrequency: 'monthly' },
    { path: '/get-a-quote', changeFrequency: 'monthly' },
    { path: '/blog', changeFrequency: 'weekly' },
  ];

  return routes.map(({ path, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority: path === '/' ? 1 : 0.7,
  }));
}
