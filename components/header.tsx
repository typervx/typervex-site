"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Github, Download, Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Features", "About", "Gallery", "Install", "Usage"]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"
        }`}
    >
      {/* Terminal-style top bar */}
      <div className="bg-card/80 border-b border-border/30 py-1 px-4 font-mono text-xs text-muted-foreground hidden md:block">
        <span className="text-primary">root@typervx</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-secondary">~</span>
        <span className="text-muted-foreground">$</span>
        <span className="ml-2">./typervx --info</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center font-mono font-bold text-primary group-hover:bg-primary/20 transition-colors">
              T
            </div>
            <span className="text-lg font-pixel tracking-tighter text-foreground group-hover:text-primary transition-colors">
              TYPERVX
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  [{item}]
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://github.com/kevinmartz/TyperVX/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-mono text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </Link>
            <Link
              href="https://github.com/kevinmartz/TyperVX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border hover:border-primary/50 px-4 py-2 rounded-md font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/30 pt-4">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    $ cd /{item.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-4 pt-4 border-t border-border/30">
              <Link
                href="https://github.com/kevinmartz/TyperVX/releases/latest"
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-mono text-sm"
              >
                <Download className="w-4 h-4" />
                Download
              </Link>
              <Link
                href="https://github.com/kevinmartz/TyperVX"
                target="_blank"
                className="flex items-center justify-center gap-2 border border-border px-4 py-2 rounded-md font-mono text-sm"
              >
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
