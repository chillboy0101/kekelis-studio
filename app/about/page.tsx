import Header from '@/components/Header';
import Hero2 from '@/components/Hero2';
import Content16 from '@/components/Content16';
import Content22 from '@/components/Content22';
import Team002 from '@/components/Team002';
import Cta006 from '@/components/Cta006';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://kekelis-studio.vercel.app';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Learn about Kekeli's Studio — the story, the style, and the team behind our photography and videography work.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <main>
      <Header variant="transparent" hireMeHref="/contact" />
      <Hero2 />
      <Content16 />
      <Content22 />
      <Team002 />
      <Cta006 showButton={false} />
      <Footer />
    </main>
  );
}
