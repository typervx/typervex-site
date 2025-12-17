'use client'

const features = [
  {
    title: 'Individual Style Shortcuts',
    description: 'Assign keyboard shortcuts directly to any style for instant application. Support for custom labels and intelligent conflict detection.',
    icon: '⌨️',
  },
  {
    title: 'Advanced Folder System',
    description: 'Organize styles with folder-based shortcut management. Toggle shortcuts per folder and copy between folders with automatic matching.',
    icon: '📁',
  },
  {
    title: 'Multiple Themes',
    description: 'Choose from Default, Purple Ocean, Midnight, Neon Pink, and Pinky Pink themes. Consistent UI with smooth theme transitions.',
    icon: '🎨',
  },
  {
    title: 'Complete Folder Deletion',
    description: 'Safely delete folders with options to move styles to unsorted or permanently remove. Visual warnings prevent accidental data loss.',
    icon: '🗑️',
  },
  {
    title: 'Enhanced UI Components',
    description: 'Beautiful modal layouts, improved button focus states, enhanced dropdowns, and visual shortcut indicators throughout the interface.',
    icon: '🖼️',
  },
  {
    title: 'Performance Optimized',
    description: '40ms polling interval for responsive detection. Adobe CEP optimized and tuned for seamless Photoshop integration.',
    icon: '⚡',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Discover the comprehensive toolset that makes TyperVX the professional choice for typography workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass group hover:border-primary/60 transition-all duration-300 p-6 rounded-xl hover:shadow-[0_0_30px_rgba(178,120,255,0.2)] hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
