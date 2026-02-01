import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://kekelis-studio.vercel.app';

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cormorant_garamond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant-garamond',
});

export const metadata: Metadata = {
  title: {
    default: "Kekeli's Studio — Every Frame, a Story Worth Telling",
    template: "%s | Kekeli's Studio",
  },
  description:
    "Kekeli's Studio — Professional videographer and photographer in Accra, Ghana for brands, events and people. Every Frame, a Story Worth Telling.",
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/cropped-ChatGPT-Image-Jan-6-2026-02_13_53-PM-1.png',
  },
  openGraph: {
    title: "Kekeli's Studio — Every Frame, a Story Worth Telling",
    description:
      "Professional videographer and photographer in Accra, Ghana for brands, events and people.",
    url: siteUrl,
    siteName: "Kekeli's Studio",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Kekeli's Studio",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kekeli's Studio — Every Frame, a Story Worth Telling",
    description:
      "Professional videographer and photographer in Accra, Ghana for brands, events and people. Every Frame, a Story Worth Telling.",
    images: ['/og-image.jpg'],
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="" />
        <link rel="preconnect" href="https://maps.google.com" crossOrigin="" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'ProfessionalService'],
              name: "Kekeli's Studio",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              telephone: '+233544555569',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Accra',
                addressCountry: 'GH',
              },
              areaServed: {
                '@type': 'City',
                name: 'Accra',
              },
              sameAs: ['https://www.instagram.com/kekeli_photography_/'],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${cormorant_garamond.variable} font-inter`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
