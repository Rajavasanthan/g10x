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

export function SectionOne() {
    return (
        <section className="flex overflow-x-auto text-nowrap w-full lg:justify-start 2xl:justify-center items-center gap-14 lg:gap-14.5 2xl:gap-16.5 py-6 px-4 md:px-6 lg:px-10  no-scrollbar">

            <Logo logoUrl={healthCare.src} altText="Healthcare" text="Healthcare" />
            <Logo logoUrl={finTech.src} altText="finTech" text="Fintech" />
            <Logo logoUrl={connected_car.src} altText="connected_car" text="Mobility" />
            <Logo logoUrl={solar_energy.src} altText="solar_energy" text="Energy" />
            <Logo logoUrl={learning.src} altText="learning" text="Deep Tech" />
            <Logo logoUrl={climate_change.src} altText="climate_change" text="C
          limate" />
            <Logo logoUrl={space.src} altText="space" text="Space" />
            <Logo logoUrl={school.src} altText="school" text="EdTech" />
            <Logo logoUrl={protection.src} altText="protection" text="Lifestyle" />
            <Logo logoUrl={smart_cities.src} altText="smart_cities" text="Smart city" />

        </section>
    )
}

export default SectionOne
