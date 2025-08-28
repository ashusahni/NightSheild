import './globals.css'
import Footer from '@/components/Layout/Footer'
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${oswald.variable} ${dmSans.variable}`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Aoscompo>
            {children}
            <Footer />
          </Aoscompo>
        </ThemeProvider>
      </body>
    </html>
  )
}
