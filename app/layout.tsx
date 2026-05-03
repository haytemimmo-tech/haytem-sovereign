import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://haytemsovereign.com"),
alternates: {
  canonical: "/",
},
  openGraph: {
  title: "Hassaneine Haytem | HAYTEM SOVEREIGN",
  description: "Global Market Architect & Sovereign-Level Strategic Advisor.",
  url: "https://haytemsovereign.com",
  siteName: "HAYTEM SOVEREIGN",
  images: [
    {
      url: "https://haytemsovereign.com/og-image.jpg",
      width: 1200,
      height: 630,
    },
  ],
  locale: "en_US",
  type: "website",
},
  title: 'Hassaneine Haytem | HAYTEM SOVEREIGN — Global Market Architect & Private Wealth Advisor',
  description:
    'Hassaneine Haytem is a sovereign-level strategic advisor operating at the intersection of institutional advisory, private wealth architecture, and emerging Eldorado real estate intelligence. Where Capital Becomes Legacy.',
  keywords: [
  "Hassaneine Haytem",
  "Haytem Sovereign",

  "Global Market Architect",
  "Private Wealth Advisor",
  "Strategic Investment Advisor",

  "Real Estate Investment Advisor",
  "Luxury Real Estate Investment",
  "Off Market Real Estate",
  "Family Office Real Estate",
  "International Real Estate Consultant",

  "Marrakech luxury villas",
  "Luxury villas Marrakech Morocco",
  "Real estate Marrakech Morocco",

  "Dubai Real Estate Investment",
  "Monaco Real Estate Investment",
  "Batumi Real Estate Investment",
  "Luxury real estate Batumi",

  "Lustica Bay real estate",
  "Montenegro luxury real estate",

  "Emerging Markets Real Estate",
  "off market property advisor",
  "Private wealth real estate advisor"
],
  authors: [{ name: 'Hassaneine Haytem' }],
  creator: 'Hassaneine Haytem',
  publisher: 'HAYTEM SOVEREIGN',
  
  twitter: {
    card: 'summary_large_image',
    title: 'HAYTEM SOVEREIGN | Where Capital Becomes Legacy.',
    description:
      'Sovereign-level strategic advisory. Private wealth architecture. Emerging Eldorado Investment Intelligence.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Inter:wght@300;400;500;600&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Hassaneine Haytem',
              jobTitle: 'Global Market Architect',
              description:
                'Sovereign-level strategic advisor at the intersection of institutional advisory, private wealth architecture, and emerging Eldorado real estate intelligence.',
              worksFor: {
                '@type': 'Organization',
                name: 'HAYTEM SOVEREIGN',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '60 Paya Lebar Road #06-28, Paya Lebar Square',
                  addressLocality: 'Singapore',
                  postalCode: '409051',
                  addressCountry: 'SG',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'mandate@haytemsovereign.com',
                  contactType: 'Business',
                },
              },
              knowsAbout: [
                'Private Wealth Management',
                'Foreign Direct Investment',
                'Sovereign Asset Optimization',
                'Off-Market Real Estate',
                'Family Office Advisory',
                'Emerging Market Intelligence',
              ],
            }),
          }}
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
