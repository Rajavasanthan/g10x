import { SectionOne } from '@/types'
import Image from 'next/image'
import React from 'react'

export function Logo({ logoUrl, altText, text }: SectionOne) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-20 h-20 relative">
                <Image src={logoUrl} alt={altText} fill className="object-contain" />
            </div>
            <h3 className="text-sm relative top-2 lg:font-semibold">{text}</h3>
        </div>

    )
}

export default Logo
