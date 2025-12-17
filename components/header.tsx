'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
              T
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TyperVX
            </h1>
          </div>

          <ul className="hidden md:flex gap-8">
            {['Features', 'Install', 'Usage', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <Link
            href="https://github.com/kevinmartz/TyperVX"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-4 py-2 rounded-lg text-sm font-medium hover:border-primary/60 transition-all duration-200 hover:shadow-[0_0_20px_rgba(178,120,255,0.2)]"
          >
            GitHub
          </Link>
        </div>
      </nav>
    </header>
  )
}
