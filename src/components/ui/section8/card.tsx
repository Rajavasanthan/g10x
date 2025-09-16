import { SectionEight } from '@/types'
import Image from 'next/image'
import React from 'react'

export function Card({ image, title, content }: SectionEight) {
    return (
        <div className="relative">
            <Image
                src={image}
                alt="Men image 2"
                width={600}
                height={200}
                className="object-contain rounded-l-[60px] rounded-b-[60px] sm:w-full"
            />
            <div className="relative bottom-27 w-full h-28 bg-gradient-to-t from-black to-transparent rounded-b-[60px]"></div>
            <div className="flex flex-col space-y-5 absolute bottom-[24%] sm:bottom-[16%] md:bottom-[24%] lg:bottom-[20%] xl:bottom-[28.5%] left-[4%] p-4">
                <p className="border border-white rounded-full py-1 px-3 text-white w-fit text-sm sm:text-base md:text-lg">{title}</p>
                <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:3xl">{content}</h3>
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold underline">Read more</p>
            </div>
        </div>
    )
}
export default Card
