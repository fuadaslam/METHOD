'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Methodology from '@/components/Methodology'
import Coaching from '@/components/Coaching'
import Facilities from '@/components/Facilities'
import Plans from '@/components/Plans'
import JoinUs from '@/components/JoinUs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Methodology />
      <Coaching />
      <Facilities />
      <Plans />
      <JoinUs />
      <Footer />
    </main>
  )
}

