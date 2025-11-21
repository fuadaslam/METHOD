import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Methord by Binshad - The Apex of Training',
  description: 'Elite fitness, bespoke training, and peak physical performance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="smooth-scroll">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}

