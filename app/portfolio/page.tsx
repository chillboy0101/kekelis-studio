import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta006 from '@/components/Cta006';
import Layout20 from '@/components/Layout20';

import type { Metadata } from 'next';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://kekelis-studio.vercel.app';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    "Browse the Kekeli's Studio portfolio — highlights from our photography and videography projects for brands, events and people.",
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
};

export default function PortfolioPage() {
  return (
    <main>
      <Header />
      <Layout20 />
      <Cta006 />
      <Footer />
    </main>
  );
}
