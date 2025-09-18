import './globals.css'
import { Footer, ResizableNavbar, MobileDockNavbar } from '@/components/Layout'
import { Metadata } from 'next'

import { ThemeProvider } from 'next-themes'
import Aoscompo from '@/utils/aos'

// ✅ Import Google Fonts with next/font
import { Inter, Montserrat, Oswald, DM_Sans } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

// Global metadata for the entire site
export const metadata: Metadata = {
  metadataBase: new URL('https://nightshield.ai'),
  title: {
    default: 'NightShield - AI Surveillance That Protects Venues Before It\'s Too Late',
    template: '%s | NightShield'
  },
  description: 'Advanced AI surveillance system that detects threats and protects nightlife venues, casinos, and events in real-time. Prevent incidents before they happen with NightShield\'s cutting-edge security technology.',
  keywords: [
    'AI surveillance',
    'venue security',
    'threat detection',
    'nightclub security',
    'casino security',
    'event venue security',
    'real-time monitoring',
    'AI security system',
    'nightlife safety',
    'crowd monitoring',
    'incident prevention',
    'security technology'
  ],
  authors: [{ name: 'NightShield AI' }],
  creator: 'NightShield AI',
  publisher: 'NightShield AI',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nightshield.ai',
    title: 'NightShield - AI Surveillance That Protects Venues Before It\'s Too Late',
    description: 'Advanced AI surveillance system that detects threats and protects nightlife venues, casinos, and events in real-time. Prevent incidents before they happen.',
    siteName: 'NightShield',
    images: [
      {
        url: '/images/logo/TRANSPARENT LOGO + TEXT.png',
        width: 1200,
        height: 630,
        alt: 'NightShield AI Surveillance System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NightShield - AI Surveillance That Protects Venues Before It\'s Too Late',
    description: 'Advanced AI surveillance system that detects threats and protects nightlife venues, casinos, and events in real-time.',
    images: ['/images/logo/TRANSPARENT LOGO + TEXT.png'],
    creator: '@nightshield_ai',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google Search Console verification code
  },
  alternates: {
    canonical: 'https://nightshield.ai',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${oswald.variable} ${dmSans.variable}`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Aoscompo>
            <ResizableNavbar disableMobile={true} />
            <MobileDockNavbar />
            {children}
            <Footer />
          </Aoscompo>
        </ThemeProvider>
      </body>
    </html>
  )
}
