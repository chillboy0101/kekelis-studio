import Header from '@/components/Header';
import Blog008 from '@/components/Blog008';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://kekelis-studio.vercel.app';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Read updates and stories from Kekeli's Studio — photography and videography insights, highlights, and behind-the-scenes.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function BlogPage() {
  return (
    <main>
      <Header />
      <Blog008 />
      <Footer />
    </main>
  );
}
