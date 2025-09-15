import React from 'react'
import Logo from './logo'

import healthCare from "../../../../public/images/healthcare.png";
import finTech from "../../../../public/images/fintech.png";
import climate_change from "../../../../public/images/climate-change.png"
import connected_car from "../../../../public/images/connected-car.png"
import learning from "../../../../public/images/learning.png"
import protection from "../../../../public/images/protection.png"
import school from "../../../../public/images/school.png"
import smart_cities from "../../../../public/images/smart-cities.png"
import solar_energy from "../../../../public/images/solar-energy.png"
import space from "../../../../public/images/space.png"
import { Btn } from '@/components/btn';

export function SectionSix() {
    return (
        <section className="bg-[#ede7dd] px-4 sm:px-6 md:px-10 pt-4 md:pt-12 lg:pt-20 pb-18 md:pb-26">
            <div className="flex justify-center">
                <div className="xl:w-[1405px]">

                    <div className="xl:flex flex-col -space-y-2 md:-space-y-7 hidden">
                        <h2 className="text-[70px]">Building ventures that</h2>
                        <h2 className="text-[70px]">make an impact across</h2>
                        <h2 className="text-[70px]">industries</h2>
                    </div>

                    <div className="flex flex-col -space-y-2 xl:hidden">
                        <h2 className="text-2xl md:text-5xl">Building ventures that make an impact across industries</h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">

                        <Logo logo={healthCare.src} title="Healthcare" content="Innovative solutions transforming patient care and medical ecosystems." />

                        <Logo logo={finTech.src} title="Fintech" content="Smarter, inclusive financial systems built for the digital age." />

                        <Logo logo={connected_car.src} title="Mobility" content="From EVs to logistics, reimagining how the world moves." />

                        <Logo logo={solar_energy.src} title="Energy" content="Clean, sustainable solutions powering the future." />

                        <Logo logo={learning.src} title="Deep Tech" content="AI, robotics, and frontier tech redefining what&apos;s possible." />

                        <Logo logo={climate_change.src} title="Climate & Sustainability" content="Driving green initiatives and circular economies." />

                        <Logo logo={space.src} title="Space" content="Unlocking opportunities beyond Earth." />

                        <Logo logo={school.src} title="EdTech" content="Reinventing how people learn and upskill." />

                        <Logo logo={protection.src} title="Consumer & Lifestyle" content="Products and platforms shaping daily life." />

                        <Logo logo={smart_cities.src} title="Smart Infrastructure" content="Next-gen cities, security, and connected systems." />
                    </div>

                    <div className="mt-10 md:mt-14">
                        <Btn
                            text="Get started with G10x now…"
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

export default SectionSix
