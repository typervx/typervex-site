'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-foreground/60">
            Have questions? Found a bug? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-accent p-8 rounded-xl hover:border-primary/60 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Report Issues</h3>
            <p className="text-foreground/70 mb-6">
              Found a bug or have a feature request? Open an issue on GitHub.
            </p>
            <a
              href="https://github.com/kevinmartz/TyperVX/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block glass px-6 py-2 rounded-lg font-medium hover:border-primary/60 transition-all"
            >
              Open GitHub Issues →
            </a>
          </div>

          <div className="glass p-8 rounded-xl hover:border-primary/60 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Follow Updates</h3>
            <p className="text-foreground/70 mb-6">
              Star the repository to stay updated with the latest releases and features.
            </p>
            <a
              href="https://github.com/kevinmartz/TyperVX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block glass px-6 py-2 rounded-lg font-medium hover:border-primary/60 transition-all"
            >
              Visit GitHub →
            </a>
          </div>
        </div>

        <div className="glass mt-8 p-8 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-3">Credits</h3>
          <p className="text-foreground/70 text-sm leading-relaxed">
            TyperVX is built on the foundation of TypeR and TypeRTools. Special thanks to Swirt for the original TypeRTools inspiration, SeanR & Sakushi for the TypeR fork base, and the TypeR Team for ongoing maintenance and bug fixes.
          </p>
          <div className="mt-4 flex justify-center items-center gap-2 text-sm">
            <span className="text-primary">Made with</span>
            <span className="text-lg">💜 & ☕</span>
          </div>
        </div>
      </div>
    </section>
  )
}
