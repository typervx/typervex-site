import Header from "@/components/header"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Features from "@/components/features"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Installation from "@/components/installation"
import Usage from "@/components/usage"
import Credits from "@/components/credits"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Stats />
        <Features />
        <About />
        <Gallery />
        <Installation />
        <Usage />
        <Credits />
        <Footer />
      </div>
    </main>
  )
}
