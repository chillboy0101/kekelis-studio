import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Content10 from '@/components/Content10';
import Content17 from '@/components/Content17';
import Layout19 from '@/components/Layout19';
import Content24 from '@/components/Content24';
import Cta006 from '@/components/Cta006';
import Footer from '@/components/Footer';
import HomeSeo from '@/components/HomeSeo';

import type { Metadata } from 'next';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://kekelis-studio.vercel.app';

export const metadata: Metadata = {
  title: 'Home',
  description:
    "Kekeli's Studio — professional videography and photography for brands, events and people. View the portfolio and book a session.",
  alternates: {
    canonical: `${siteUrl}/`,
  },
};

export default function Home() {
  return (
    <main>
      <Header variant="transparent" hireMeHref="/contact" />
      <Hero />
      <Content10 />
      <Content17 />
      <Layout19 />
      <Content24 />
      <HomeSeo />
      <Cta006 />
      <Footer />
    </main>
  );
}
