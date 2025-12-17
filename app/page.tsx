'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Installation from '@/components/installation'
import Usage from '@/components/usage'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Ambient background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        {isLoaded && (
          <>
            <Hero />
            <Features />
            <Installation />
            <Usage />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </main>
  )
}
