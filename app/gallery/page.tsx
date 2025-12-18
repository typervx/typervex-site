import Gallery from "@/components/gallery"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Gallery - TyperVX',
    description: 'See what you can create with TyperVX.',
}

export default function GalleryPage() {
    return (
        <div className="py-20">
            <Gallery />
        </div>
    )
}
