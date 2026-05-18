import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SCHOOL } from '@/lib/data'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: `${SCHOOL.name} — ${SCHOOL.tagline}`,
    template: `%s | ${SCHOOL.name}`,
  },
  description:
    'Vetri Tamil School offers Tamil language and cultural education for children in Surrey, BC. Saturday classes for all skill levels.',
  keywords: ['Tamil school', 'Surrey BC', 'Tamil language', 'heritage language', 'Tamil education'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 btn-primary"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
