import Features from "@/components/features"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Features - TyperVX',
    description: 'Explore the powerful features of TyperVX.',
}

export default function FeaturesPage() {
    return (
        <div className="py-20">
            <Features />
        </div>
    )
}
