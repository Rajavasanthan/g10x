import Image from 'next/image'
import React from 'react'
import Card from './card'
import menImg2 from "../../../../public/images/men-img2.jpg";

export function SectionEight() {
    return (

        <section className="bg-[#ede7dd] px-4 sm:px-6 md:px-10 md:py-16 py-10 lg:py-20 pb-0 md:pb-2 lg:pb-6">
            <div className="flex justify-center">
                <div className="xl:w-[1405px]">
                    <h2 className="text-2xl md:text-5xl xl:text-[70px]">Stories of G10X Founders</h2>
                    <p className="text-sm sm:text-base md:text-lg font-light mt-2 xl:w-[80%]">Every founder in G10X has a story. These are journeys of resilience, collaboration, and growth — powered by focus and community.</p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 -space-y-14 md:gap-6">

                        <Card image={menImg2.src} title="Healthcare Circle" content="Dr. Ananya: How her startup reduced patient wait time in rural clinics by 40% with AI triage." />

                        <Card image={menImg2.src} title="Fintech Circle" content="Arjun Mehta: Scaling a cross-border payments platform with mentorship from the G10X Fintech track." />

                        {/* <Card image={menImg2.src} title="Mobility Circle" content="Lena Torres: From prototype to pilot — building sustainable EV charging hubs with G10X" /> */}


                        <div className="relative">
                            <Image src={menImg2} alt="Men image 2" className="rounded-l-[60px] rounded-b-[60px] sm:w-full" />
                            <div className="relative bottom-27 w-full h-28 bg-gradient-to-t from-black to-transparent rounded-b-[60px]"></div>
                            <div className="flex flex-col space-y-5 absolute bottom-[24%] sm:bottom-[16%] md:bottom-[24%] lg:bottom-[20%] xl:bottom-[22%] left-[4%] p-4">
                                <p className="border border-white rounded-full py-1 px-3 text-white w-fit text-sm sm:text-base md:text-lg">Mobility Circle</p>
                                <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:3xl">Lena Torres: From prototype to pilot — building sustainable EV charging hubs with G10X</h3>
                                <p className="text-white text-sm sm:text-base md:text-lg font-semibold underline">Read more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionEight
