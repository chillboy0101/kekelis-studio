import type { Metadata } from 'next';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://kekelis-studio.vercel.app';

export const metadata: Metadata = {
  title: 'Get a Quote',
  description:
    "Request a quote from Kekeli's Studio for photography or videography. Tell us what you need and we’ll reply within 24 hours.",
  alternates: {
    canonical: `${siteUrl}/get-a-quote`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
