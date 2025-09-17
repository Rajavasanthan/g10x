import { CardProps  } from '@/types'
import React from 'react'

export function Card({title, subTitle, content}: CardProps ) {
    return (
        <div className="bg-[#ede7dd] py-10 px-6 lg:py-14 lg:px-8 rounded-l-[60px] rounded-b-[60px]">
            <div className="flex flex-col space-y-2">
                <h3 className="text-xl md:text-[25px] lg:text-[30px]">{title}</h3>
                <p className="text-sm sm:text-base md:text-lg font-light">{subTitle}</p>
                <p className="text-sm sm:text-base md:text-lg font-light">{content}</p>
            </div>
        </div>
    )
}

export default Card
