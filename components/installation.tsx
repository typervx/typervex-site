'use client'

export default function Installation() {
  return (
    <section id="install" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get <span className="text-primary">Started</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Installation is quick and straightforward. Choose your preferred method.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Method 1 */}
          <div className="glass-accent group p-8 rounded-2xl hover:border-primary/60 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
              <span>⭐</span> Recommended
            </h3>
            <p className="text-foreground/70 mb-6">Download the latest release and run the installer.</p>
            
            <div className="space-y-3 mb-6">
              <p className="text-sm font-mono bg-black/30 p-3 rounded-lg text-secondary">
                1. Download from GitHub Releases
              </p>
              <p className="text-sm font-mono bg-black/30 p-3 rounded-lg text-secondary">
                2. Extract the archive
              </p>
              <p className="text-sm font-mono bg-black/30 p-3 rounded-lg text-secondary">
                3. Run: install_win.cmd (Windows)
              </p>
              <p className="text-sm font-mono bg-black/30 p-3 rounded-lg text-secondary">
                Or: chmod +x install_mac.sh && ./install_mac.sh (macOS)
              </p>
            </div>

            <a
              href="https://github.com/kevinmartz/TyperVX/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block glass px-6 py-2 rounded-lg font-medium hover:border-primary/60 transition-all"
            >
              Download Now →
            </a>
          </div>

          {/* Method 2 */}
          <div className="glass group p-8 rounded-2xl hover:border-primary/60 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>💻</span> Build from Source
            </h3>
            <p className="text-foreground/70 mb-6">Advanced: Build directly from the repository.</p>
            
            <div className="space-y-3 mb-6">
              <p className="text-sm font-mono bg-black/30 p-3 rounded-lg text-secondary">
                git clone https://github.com/kevinmartz/TyperVX.git
              </p>
              <p className="text-sm font-mono bg-black/30 p-3 rounded-lg text-secondary">
                cd TyperVX && npm install
              </p>
              <p className="text-sm font-mono bg-black/30 p-3 rounded-lg text-secondary">
                npm run build
              </p>
              <p className="text-sm font-mono bg-black/30 p-3 rounded-lg text-secondary">
                Then run the installer
              </p>
            </div>

            <a
              href="https://github.com/kevinmartz/TyperVX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block glass px-6 py-2 rounded-lg font-medium hover:border-primary/60 transition-all"
            >
              View Repository →
            </a>
          </div>
        </div>

        <div className="glass mt-8 p-6 rounded-xl border-l-2 border-primary/60">
          <p className="text-sm text-foreground/70">
            <span className="font-semibold text-foreground">Requirements:</span> Windows 10+ or macOS 12.8+, Adobe Photoshop CC 2015 or newer. Some portable Photoshop builds may have compatibility issues.
          </p>
        </div>
      </div>
    </section>
  )
}
