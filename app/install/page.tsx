import Installation from "@/components/installation"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Installation - TyperVX',
    description: 'Step-by-step guide to install TyperVX.',
}

export default function InstallPage() {
    return (
        <div className="py-20">
            <Installation />
        </div>
    )
}
