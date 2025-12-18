import Usage from "@/components/usage"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Usage - TyperVX',
    description: 'How to use TyperVX effectively.',
}

export default function UsagePage() {
    return (
        <div className="py-20">
            <Usage />
        </div>
    )
}
