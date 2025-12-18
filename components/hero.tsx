"use client"

import Link from "next/link"
import { Download, ArrowRight, Github } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* ASCII Art Title - Terminal Style */}
        <div className="mb-8 overflow-x-auto">
          <pre className="font-mono text-[8px] sm:text-xs md:text-sm text-primary leading-tight inline-block text-left">
            {`████████╗██╗   ██╗██████╗ ███████╗██████╗ ██╗   ██╗██╗  ██╗
╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗██║   ██║╚██╗██╔╝
   ██║    ╚████╔╝ ██████╔╝█████╗  ██████╔╝██║   ██║ ╚███╔╝ 
   ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  ██╔══██╗╚██╗ ██╔╝ ██╔██╗ 
   ██║      ██║   ██║     ███████╗██║  ██║ ╚████╔╝ ██╔╝ ██╗
   ╚═╝      ╚═╝   ╚═╝     ╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝`}
          </pre>
        </div>

        {/* Subtitle */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
          Advanced Typography Tool for <span className="text-secondary">Adobe Photoshop</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Take control of your typography workflow. Enhanced keyboard shortcuts, intelligent folder management, and
          multiple themes.
          <br />
          <span className="text-primary font-mono text-sm">Built for designers who demand efficiency.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="https://github.com/kevinmartz/TyperVX/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-mono font-semibold hover:bg-primary/90 transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            DOWNLOAD
          </Link>
          <Link
            href="/features"
            className="flex items-center gap-2 border border-border hover:border-primary/50 px-6 py-3 rounded-md font-mono font-semibold text-muted-foreground hover:text-foreground transition-all"
          >
            FEATURES
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="https://github.com/kevinmartz/TyperVX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border hover:border-primary/50 px-6 py-3 rounded-md font-mono font-semibold text-muted-foreground hover:text-foreground transition-all"
          >
            <Github className="w-5 h-5" />
            GITHUB
          </Link>
        </div>
      </div>
    </section>
  )
}
