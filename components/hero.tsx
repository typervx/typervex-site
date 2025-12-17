'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                Professional{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Typography Tool
                </span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                TyperVX is an enhanced fork of TypeR with advanced keyboard shortcuts, intelligent folder management, and multiple theme support for Adobe Photoshop.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://github.com/kevinmartz/TyperVX/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-accent px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center hover:border-primary/80 transition-all duration-200 hover:glow-accent group"
              >
                <span>Download Latest</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="#features"
                className="glass px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center hover:border-primary/60 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            <div className="flex gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-sm text-foreground/60">Built-in Themes</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-accent">9</p>
                <p className="text-sm text-foreground/60">Languages</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-secondary">CC 2015+</p>
                <p className="text-sm text-foreground/60">Photoshop Support</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-[500px] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <div className="glass-dark absolute inset-0 rounded-2xl overflow-hidden border-2 border-primary/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-foreground/60">Visual Preview</p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
