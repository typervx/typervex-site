import Link from "next/link"
import { Github, Bug } from "lucide-react"

export default function Credits() {
  const credits = [
    { name: "Swirt", role: "Original TypeRTools Creator", note: "Inspiration & Foundation" },
    { name: "SeanR & Sakushi", role: "TypeR Fork Maintainers", note: "Base for TyperVX" },
    { name: "TypeR Team", role: "Bug Fixes & Maintenance", note: "Keeping the dream alive" },
  ]

  return (
    <section id="credits" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="section-header font-mono mb-2">
            <span className="text-secondary">**</span>
            <span className="text-foreground">CREDITS</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">// Special thanks</p>
        </div>

        {/* Credits Table */}
        <div className="terminal-card p-6 mb-8">
          <div className="space-y-4">
            {credits.map((credit, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-border/30 last:border-0"
              >
                <div>
                  <span className="font-mono font-bold text-foreground">{credit.name}</span>
                  <span className="text-muted-foreground mx-2">—</span>
                  <span className="text-sm text-muted-foreground">{credit.role}</span>
                </div>
                <span className="text-sm text-primary font-mono mt-1 md:mt-0">{credit.note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="terminal-card p-6">
            <h3 className="font-mono font-bold text-foreground mb-4 flex items-center gap-2">
              <Bug className="w-5 h-5 text-primary" />
              Need Help?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Found a bug or have a feature request? Open an issue on GitHub.
            </p>
            <Link
              href="https://github.com/kevinmartz/TyperVX/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border hover:border-primary/50 px-4 py-2 rounded-md font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Open Issue
            </Link>
          </div>
          <div className="terminal-card p-6">
            <h3 className="font-mono font-bold text-foreground mb-4 flex items-center gap-2">
              <Github className="w-5 h-5 text-primary" />
              Follow Updates
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Star the repository to stay updated with the latest releases.
            </p>
            <Link
              href="https://github.com/kevinmartz/TyperVX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border hover:border-primary/50 px-4 py-2 rounded-md font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Visit GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
