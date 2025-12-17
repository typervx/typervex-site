import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-mono font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">TYPER</span>VX
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional typography tool for Adobe Photoshop with advanced features and intuitive interface.
            </p>
          </div>

          <div>
            <h4 className="font-mono font-bold text-foreground mb-4">LINKS</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/kevinmartz/TyperVX"
                  target="_blank"
                  className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/kevinmartz/TyperVX/releases/latest"
                  target="_blank"
                  className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  Latest Release
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/kevinmartz/TyperVX/issues"
                  target="_blank"
                  className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  Report Issues
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold text-foreground mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/kevinmartz/TyperVX/blob/main/CHANGELOG.md"
                  target="_blank"
                  className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <span className="text-sm font-mono text-muted-foreground">Version: VX</span>
              </li>
              <li>
                <span className="text-sm font-mono text-primary">Status: Active</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-mono text-muted-foreground">
            &copy; {currentYear} TyperVX. Made with <span className="text-primary">{"<3"}</span>
          </p>
          <p className="text-xs font-mono text-muted-foreground/60 italic">ah shit, here we go again</p>
        </div>
      </div>
    </footer>
  )
}
