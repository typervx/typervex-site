'use client'

export default function Usage() {
  return (
    <section id="usage" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How to <span className="text-primary">Use</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            TyperVX is designed to be intuitive and easy to use from day one.
          </p>
        </div>

        <div className="space-y-6">
          {/* Quick Start */}
          <div className="glass-accent p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🚀</span> Quick Start
            </h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/30 text-primary font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold">Open Adobe Photoshop</p>
                  <p className="text-foreground/60 text-sm mt-1">Launch your Photoshop application</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/30 text-primary font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold">Navigate to Extensions</p>
                  <p className="text-foreground/60 text-sm mt-1">Go to Window → Extensions → TyperVX</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/30 text-primary font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-semibold">Start Using</p>
                  <p className="text-foreground/60 text-sm mt-1">TyperVX is ready to enhance your typography workflow</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-4 text-primary">Assign Keyboard Shortcuts</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Edit any style and find the Keyboard Shortcut section. Click the shortcut field and press your desired keys. Supports Ctrl+Number, brackets, punctuation, and symbol combinations with full conflict detection.
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-4 text-accent">Manage Folders</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Organize styles into folders. Open folders apply styles automatically. Closed folders show colored borders and are inactive. Copy shortcuts between folders with automatic matching of style types.
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-4 text-secondary">Switch Themes</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Access theme settings in the main interface. Choose from Default, Purple Ocean (default), Midnight, Neon Pink, and Pinky Pink. All themes feature smooth transitions and consistent UI design.
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-4 text-primary">Copy Shortcuts</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Use the copy shortcuts feature to transfer shortcuts between folders. The system automatically matches compatible style types (OT→OT, ST→ST) with manual review for complete control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
