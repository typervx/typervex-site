"use client"

const screenshots = [
  {
    src: "https://raw.githubusercontent.com/kevinmartz/TyperVX/main/sc/visual/UIshowcase.PNG",
    alt: "UI Showcase",
    label: "Main Interface",
  },
  {
    src: "https://raw.githubusercontent.com/kevinmartz/TyperVX/main/sc/visual/UIshowcase3.PNG",
    alt: "Style Editing",
    label: "Style Editor",
  },
  {
    src: "https://raw.githubusercontent.com/kevinmartz/TyperVX/main/sc/visual/UIshowcase5.PNG",
    alt: "Settings Interface",
    label: "Settings",
  },
  {
    src: "https://raw.githubusercontent.com/kevinmartz/TyperVX/main/sc/visual/Newinstaller.PNG",
    alt: "New Installer",
    label: "Multi-Language Installer",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="section-header font-mono mb-2">
            <span className="text-secondary">**</span>
            <span className="text-foreground">GALLERY</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">// Screenshots & previews</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {screenshots.map((screenshot, idx) => (
            <div key={idx} className="terminal-card overflow-hidden group">
              <div className="aspect-video bg-muted/30 relative overflow-hidden">
                <img
                  src={screenshot.src || "/placeholder.svg"}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 border-t border-border/30">
                <p className="font-mono text-sm text-muted-foreground">{screenshot.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
