import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })

export const metadata: Metadata = {
  title: {
    default: "Pollux Studio — Privacy-First Tools for Open Platforms",
    template: "%s | Pollux Studio",
  },
  description:
    "Pollux Studio is an open-source software collective building privacy-first, system-aware tools. We empower users through clarity, control, and transparent design, operating close to the system layer to explain how systems behave.",
  keywords: [
    "Pollux Studio",
    "Open Source",
    "Privacy First",
    "System Tools",
    "Ubuntu Touch",
    "UX Infrastructure",
    "Transparency",
    "User Control",
    "System Awareness",
    "Ethical Software",
  ],
  authors: [{ name: "Pollux Studio", url: "https://polluxstudio.in" }],
  creator: "Pollux Studio",
  publisher: "Pollux Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/pollux-favicon.png",
    shortcut: "/pollux-favicon.png",
    apple: "/pollux-favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://polluxstudio.in",
    title: "Pollux Studio — Clarity, Control, Trust",
    description:
      "Building privacy-first, system-aware tools that explain how systems behave. Join us in creating open, user-respecting ecosystems.",
    siteName: "Pollux Studio",
    images: [
      {
        url: "/pollux-logo-white.png",
        width: 1200,
        height: 630,
        alt: "Pollux Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pollux Studio — Privacy-First Tools",
    description:
      "Building privacy-first, system-aware tools that explain how systems behave. We prioritize correctness, clarity, and long-term reliability.",
    images: ["/pollux-logo-white.png"],
    creator: "@polluxstudio",
  },
  alternates: {
    canonical: "https://polluxstudio.in",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}