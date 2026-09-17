import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Sans, Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { KEYWORDS, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/content/site";
import { person } from "@/content/person";
import { OG_IMAGE, snippet } from "@/lib/metadata";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

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

// Review-phase variant fonts. Remove the unused ones once a variant is chosen.
const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#131416",
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
  jobTitle: "Telecom Architect",
  description: SITE_DESCRIPTION,
  sameAs: [person.links.linkedin, person.links.academy],
  knowsAbout: KEYWORDS,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${instrument.variable} ${plexMono.variable} ${newsreader.variable} ${manrope.variable}`}
    >
      <body className="min-h-dvh">
        {/* Marks JS as available so reveal-on-scroll can safely hide content
            until it enters the viewport. Without JS, everything stays visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
