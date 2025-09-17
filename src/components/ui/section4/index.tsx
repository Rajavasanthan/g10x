import React from 'react'
import Card from './card'
import { Btn } from '@/components/btn'

export function SectionFour() {
    return (
        <section className="bg-black px-4 sm:px-6 md:px-10 py-10 md:py-20 lg:py-24">
            <div className="flex justify-center">
                <div className="xl:w-[1405px]">
                    <h2 className="text-2xl md:text-5xl lg:text-[70px] text-white">Why Choose G10X?</h2>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 ">

                        <Card title="Sector-Focused Ecosystems" subTitle="10 categories. 10 growth tracks" content="Every startup belongs to a well-defined circle — healthcare, fintech, mobility, deep tech, and more. This focus ensures targeted conversations, sharper insights, and stronger collaborations." />

                        <Card title="Collective Growth Philosophy" subTitle="When one grows, all grow." content="Members share playbooks, breakthroughs, and lessons — multiplying impact instead of competing for spotlight." />

                        <Card title="Built for Founders, by Founders" subTitle="No noise, no dilution." content="Every policy, program, and initiative in G10X is designed to protect fairness, foster collaboration, and keep the founder&apos;s journey at the center." />
                    </div>

                    <div className="mt-5 md:mt-14">
                        <Btn
                            text="Get to know us and thrive with G10X"
                            bgColor="bg-white"
                            borderColor="border border-white"
                            textColor="text-black"
                            hoverBgColor="hover:bg-white"
                            hoverTextColor="hover:text-black"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFour
