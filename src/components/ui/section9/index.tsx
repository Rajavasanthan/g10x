import { Btn } from '@/components/btn'
import Image from 'next/image'
import React from 'react'
import menImg3 from "../../../../public/images/men-img3.webp";


export function SectionNine() {
    return (
        <section className="bg-gradient-to-r from-[#52b2b8] to-[#b0e8eb] overflow-x-hidden px-4 sm:px-6 md:px-10 py-14 md:py-18 lg:py-22 xl:py-22">
            <div className="flex justify-center">
                <div className="xl:w-[1405px]">
                    <div className="flex flex-col lg:flex-row lg:space-x-30 justify-between">

                        <div className="flex flex-col space-y-4 md:space-y-8 mt-4">
                            <h2 className="text-2xl md:text-5xl xl:text-[70px] lg:leading-14 xl:leading-20">Ready to scale with focus and thrive with us?</h2>
                            <p className="font-light text-sm sm:text-base md:text-lg lg:xl">Whether you&apos;re a founder looking to grow in your sector, a mentor eager to guide, or an innovator seeking collaboration — G10X is the place where focus meets scale. Let&apos;s connect and explore how you can be part of this global founder community.
                            </p>
                            <div className="mt-2">
                                <Btn
                                    text="Schedule an Introductory Call"
                                    bgColor="bg-black"
                                    borderColor="border border-black"
                                    textColor="text-white"
                                    hoverBgColor="hover:bg-black"
                                    hoverTextColor="hover:text-white"
                                />
                            </div>
                        </div>

                        <Image src={menImg3} alt="Men image 3" className="lg:w-1/3 md:h-110 mt-12 rounded-l-[60px] rounded-b-[60px] object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionNine
