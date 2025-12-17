export default function Stats() {
  const stats = [
    { value: "~1s", label: "LAUNCH TIME" },
    { value: "5+", label: "THEMES" },
    { value: "100%", label: "FREE" },
    { value: "9", label: "LANGUAGES" },
  ]

  const quickInfo = [
    { label: "Version", value: "VX Stable" },
    { label: "License", value: "MIT" },
    { label: "Platform", value: "Win / Mac" },
  ]

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card terminal-glow">
              <div className="text-2xl md:text-3xl font-bold font-mono text-primary mb-1">{stat.value}</div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Info Box */}
        <div className="terminal-card p-4 terminal-glow">
          <div className="text-xs font-mono text-primary mb-3 flex items-center gap-2">
            <span className="text-secondary">**</span>QUICK INFO
          </div>
          <div className="grid grid-cols-3 gap-4">
            {quickInfo.map((info, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xs text-muted-foreground font-mono mb-1">{info.label}</div>
                <div className="text-sm font-mono text-foreground">{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
