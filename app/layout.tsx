import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '8-Week Mental Wellness Coaching Program | Mindful Horizons',
  description: 'Transform your mental health with Dr. Elena Voss\'s evidence-based 8-week program. Reduce anxiety, build emotional balance, and create lasting change.',
  generator: 'v0.app',
  keywords: ['mental health', 'wellness coaching', 'anxiety', 'emotional balance', 'Dr. Elena Voss'],
  creator: 'Mindful Horizons',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mindfulhorizons.com',
    siteName: 'Mindful Horizons',
    title: '8-Week Mental Wellness Coaching Program | Mindful Horizons',
    description: 'Transform your mental health with Dr. Elena Voss\'s evidence-based 8-week program.',
    images: [
      {
        url: '/images/dr-elena.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Elena Voss - Mental Wellness Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '8-Week Mental Wellness Coaching Program | Mindful Horizons',
    description: 'Transform your mental health with Dr. Elena Voss\'s evidence-based 8-week program.',
    images: ['/images/dr-elena.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

import RippleEffect from '@/components/RippleEffect'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <RippleEffect />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
