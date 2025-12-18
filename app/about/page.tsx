import About from "@/components/about"
import Credits from "@/components/credits"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About - TyperVX',
    description: 'Learn about the TyperVX project and its contributors.',
}

export default function AboutPage() {
    return (
        <div className="py-20 space-y-20">
            <About />
            <Credits />
        </div>
    )
}
