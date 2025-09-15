import Image from 'next/image'
import React from 'react'
import gardenImgBorder from "../../../../public/images/garden-img-border.svg"
import gardenImg from "../../../../public/images/garden-img.jpg";

export function SectionFive() {
    return (
        <section className="bg-[#ede7dd] px-4 sm:px-6 md:px-10 pt-14 md:pt-20 lg:pt-26">
            <div className="flex justify-center">
                <div className="xl:w-[1405px]">
                    <div className="relative">

                        <div className="relative w-full">
                            <Image src={gardenImgBorder} alt="Garden border" className="absolute z-50 h-full w-full right-[32%]" />
                            <Image src={gardenImg} alt="Garden image" className="opacity-80 w-full" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#dfdacf]"></div>
                        </div>

                        <div className="absolute md:flex flex-col w-[50%] items-end bottom-[5%] z-50 right-[2%] hidden">
                            <p className="mt-2 font-semibold text-lg">“Joining G10X was a turning point in my founder journey.</p>
                            <p className="font-semibold text-lg">The sector-focused circle connected me with peers and mentors who understood my exact challenges. It&apos;s not just a community — it&apos;s where my startup found momentum.”</p>
                            <p className="font-light mt-4 text-lg">— Person 1, ABC Company</p>
                        </div>

                        <div className="flex flex-col items-end md:hidden relative bottom-10 z-50">
                            <p className="mt-2 font-semibold text-sm">“Joining G10X was a turning point in my founder journey. The sector-focused circle connected me with peers and mentors who understood my exact challenges. It&apos;s not just a community — it&apos;s where my startup found momentum.”</p>
                            <p className="font-light mt-4 text-sm">— Person 1, ABC Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFive
