import Header from '@/components/Header';
import Hero3 from '@/components/Hero3';
import Content22 from '@/components/Content22';
import Contact013 from '@/components/Contact013';
import Team002 from '@/components/Team002';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://kekelis-studio.vercel.app';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Contact Kekeli's Studio for photography and videography. Book a session, request a quote, or send a message — we reply within 24 hours.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main>
      <Header variant="transparent" hireMeHref="/contact" />
      <Hero3 />
      <Content22 />
      <Contact013 />
      <Team002 />
      <Footer />
    </main>
  );
}
