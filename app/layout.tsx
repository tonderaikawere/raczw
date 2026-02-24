import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const _siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const _googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: 'Redemption Apostolic Church | Love, Peace & Unity',
  description: 'Welcome to Redemption Apostolic Church - A growing family of over 1,200 members across Zimbabwe, united in Love, Peace, and Unity under the Royal Blue Ribbon Covenant.',
  generator: 'Kawerify Tech',
  metadataBase: new URL(_siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Redemption Apostolic Church | Love, Peace & Unity',
    description: 'Welcome to Redemption Apostolic Church - A growing family of over 1,200 members across Zimbabwe, united in Love, Peace, and Unity under the Royal Blue Ribbon Covenant.',
    images: [
      {
        url: '/images/hero-worship.png',
        width: 1200,
        height: 630,
        alt: 'Redemption Apostolic Church congregation worshipping',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redemption Apostolic Church | Love, Peace & Unity',
    description: 'Welcome to Redemption Apostolic Church - A growing family of over 1,200 members across Zimbabwe, united in Love, Peace, and Unity under the Royal Blue Ribbon Covenant.',
    images: ['/images/hero-worship.png'],
  },
  verification: _googleSiteVerification
    ? {
        google: _googleSiteVerification,
      }
    : undefined,
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_geist.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
