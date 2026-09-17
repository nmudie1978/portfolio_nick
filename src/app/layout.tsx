import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { KEYWORDS, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/content/site";
import { person } from "@/content/person";
import { OG_IMAGE, snippet } from "@/lib/metadata";
import { Header, Footer } from "@/components/site";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07263a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: snippet(SITE_DESCRIPTION),
  keywords: KEYWORDS,
  alternates: { canonical: SITE_URL },
  authors: [{ name: person.name, url: SITE_URL }],
  creator: person.name,
  applicationName: SITE_NAME,
  openGraph: {
    title: SITE_TITLE,
    description: snippet(SITE_DESCRIPTION),
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "profile",
    locale: "en_GB",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: snippet(SITE_DESCRIPTION),
    images: [OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  url: SITE_URL,
  jobTitle: person.currentRole.title,
  worksFor: { "@type": "Organization", name: person.currentRole.organisation },
  workLocation: { "@type": "Place", name: person.currentRole.location },
  description: SITE_DESCRIPTION,
  sameAs: [person.links.linkedin, person.links.academy],
  knowsAbout: KEYWORDS,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrument.variable} ${plexMono.variable}`}
    >
      <body className="site-root">
        {/* Marks JS as available so reveal-on-scroll can safely hide content
            until it enters the viewport. Without JS, everything stays visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
