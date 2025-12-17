import { Monitor, Apple, Cpu } from "lucide-react"

export default function About() {
  const supportedApps = ["Cursor", "Windsurf", "VS Code", "VSCode Forks"]

  const technicalInfo = [
    { label: "Base", value: "TypeR 2.1.0" },
    { label: "GUI", value: "Adobe CEP" },
    { label: "Config", value: "JSON" },
    { label: "License", value: "MIT" },
    { label: "Source", value: "Open Source" },
  ]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="section-header font-mono mb-2">
            <span className="text-secondary">**</span>
            <span className="text-foreground">ABOUT</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">// What is TyperVX?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* What is this */}
          <div className="terminal-card p-6">
            <h3 className="font-mono font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-secondary">**</span>WHAT IS THIS?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              TyperVX is an enhanced fork of TypeR with advanced typography features for Adobe Photoshop. It provides
              complete control over your typography workflow with keyboard shortcuts, folder management, and theme
              customization.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Built with efficiency and safety in mind, TyperVX automates tedious tasks - allowing you to focus on what
              matters: <span className="text-primary font-mono">designing.</span>
            </p>
          </div>

          {/* Technical Info */}
          <div className="terminal-card p-6">
            <h3 className="font-mono font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-secondary">**</span>TECHNICAL
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-2 border-b border-border/30 last:border-0"
                >
                  <span className="text-sm text-muted-foreground font-mono">{info.label}</span>
                  <span className="text-sm font-mono text-foreground">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="terminal-card p-5 text-center">
            <div className="text-primary font-bold font-mono mb-2">**FAST</div>
            <p className="text-sm text-muted-foreground">
              Startup in ~1 second. Operations executed instantly with intelligent caching.
            </p>
          </div>
          <div className="terminal-card p-5 text-center">
            <div className="text-primary font-bold font-mono mb-2">**SAFE</div>
            <p className="text-sm text-muted-foreground">
              Automatic backups before operations. Safe data handling with error recovery.
            </p>
          </div>
          <div className="terminal-card p-5 text-center">
            <div className="text-primary font-bold font-mono mb-2">**EXTENSIBLE</div>
            <p className="text-sm text-muted-foreground">
              JSON-based configuration for flexibility. Import/export style support.
            </p>
          </div>
        </div>

        {/* System Requirements */}
        <div className="terminal-card p-6 mt-8">
          <h3 className="font-mono font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="text-secondary">**</span>SYSTEM REQUIREMENTS
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Monitor className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-mono text-foreground">Windows</div>
                <div className="text-xs text-muted-foreground">Windows 10 or newer</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Apple className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-mono text-foreground">macOS</div>
                <div className="text-xs text-muted-foreground">macOS 12.8 or newer</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-mono text-foreground">Photoshop</div>
                <div className="text-xs text-muted-foreground">CC 2015 or newer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
