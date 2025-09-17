import { Btn } from '@/components/btn'
import React from 'react'
 
export function SectionThree() {
    return (
        <section className="bg-[#ede7dd] px-4 sm:px-6 md:px-10 py-16 md:py-22">
            <div className="flex justify-center">
                <div className="xl:w-[1405px]">
                    <h2 className="text-2xl md:text-5xl lg:text-[70px] lg:leading-20 xl:w-[90%]">Access the Right Expertise, Instantly</h2>

                    <p className="mt-3 md:mt-7 text-sm sm:text-base md:text-lg font-light xl:w-[80%]">At G10X, you don&apos;t waste time searching. Each sector circle is packed with founders, domain mentors, and industry experts ready to share knowledge, solve challenges, and accelerate execution.</p>

                    <p className="mt-3 text-sm sm:text-base md:text-lg font-light xl:w-[80%]">Whether you&apos;re building in healthcare, fintech, mobility, or space, you&apos;ll always find the right people to guide, collaborate, and multiply your growth.</p>

                    <p className="mt-3 md:mt-7 text-sm sm:text-base md:text-lg font-light flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="#4fb1b6" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Sector-specific mentors and advisors who&apos;ve solved similar challenges
                    </p>

                    <p className="mt-2 text-sm sm:text-base md:text-lg font-light flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="#4fb1b6" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Peer founders who collaborate instead of compete
                    </p>

                    <p className="mt-2 text-sm sm:text-base md:text-lg font-light flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="#4fb1b6" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        A trusted circle where expertise and insights flow freely
                    </p>

                    <div className="mt-5 md:mt-8">
                        <Btn
                            text="Join a Sector Circle"
                            bgColor="bg-[#ede7dd]"
                            borderColor="border border-black"
                            textColor="text-black"
                            hoverBgColor="hover:bg-black"
                            hoverTextColor="hover:text-white"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionThree
