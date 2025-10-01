import { SectionEight } from '@/types'
import Image from 'next/image'
import React from 'react'

export function Card({ image, title, content }: SectionEight) {
    return (
        <div className="relative w-full h-[350px] lg:h-[360px] 2xl:h-[380px]"> 
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-l-[60px] rounded-b-[60px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-b-[60px]"></div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col space-y-3">
                <p className="border border-white rounded-full py-1 px-3 text-white w-fit text-sm sm:text-base md:text-[12px]">
                    {title}
                </p>
                <h3 className="text-white text-sm sm:text-base md:text-md lg:text-lg">
                    {content}
                </h3>
                
            </div>
        </div>
    )
}
export default Card
