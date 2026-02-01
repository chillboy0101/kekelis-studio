import type { Metadata } from 'next';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://kekelis-studio.vercel.app';

export const metadata: Metadata = {
  title: 'Book a Session',
  description:
    "Book a photography or videography session with Kekeli's Studio. Share your details and preferred date/time and we’ll confirm availability.",
  alternates: {
    canonical: `${siteUrl}/book-a-session`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
