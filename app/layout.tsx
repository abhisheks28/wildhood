import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
})

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wildhoodphoto.in'),
  title: 'Wildhood Photo | Nature & Wildlife Photography',
  description: "Explore stunning wildlife, nature, and landscape photography. Capturing nature's wild essence through unforgettable moments.",
  keywords: [
    'Wildhood Photo',
    'Wildlife Photography',
    'Nature Photography',
    'Landscape Photography',
    'Photographer India',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Wildhood Photo',
    description: "Capturing nature's wild essence.",
    url: 'https://wildhoodphoto.in',
    siteName: 'Wildhood Photo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#1A3A34' }],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navigation />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
