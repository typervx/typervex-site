'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass mt-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-foreground mb-4">TyperVX</h4>
            <p className="text-sm text-foreground/60">
              Professional typography tool for Adobe Photoshop with advanced features and intuitive interface.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/kevinmartz/TyperVX"
                  target="_blank"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/kevinmartz/TyperVX/releases/latest"
                  target="_blank"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Latest Release
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/kevinmartz/TyperVX/issues"
                  target="_blank"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Report Issues
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/kevinmartz/TyperVX/blob/main/CHANGELOG.md"
                  target="_blank"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <span className="text-sm text-foreground/60">Version 1.0+</span>
              </li>
              <li>
                <span className="text-sm text-foreground/60">Status: Active</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8">
          <p className="text-sm text-center text-foreground/50">
            &copy; {currentYear} TyperVX. Built with modern design principles. Ah shit, here we go again.
          </p>
        </div>
      </div>
    </footer>
  )
}
