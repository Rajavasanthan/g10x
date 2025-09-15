import React from 'react'
import Blog from './blog';

export function SectionTwo() {
    return (
        <section className="bg-black px-4 sm:px-6 md:px-10 pt-10 md:pt-20 md:pb-4">
            <div className="flex justify-center">
                <div className="xl:w-[1405px]">

                    <div className="flex flex-col md:space-y-2">
                        <h2 className="text-white text-5xl lg:text-[70px] hidden md:block">Stay Ahead in the</h2>
                        <h2 className="text-white text-5xl lg:text-[70px] hidden md:block">Startup World</h2>
                    </div>

                    <h2 className="text-white text-2xl md:hidden block">Stay Ahead in the Startup World</h2>
                    <p className="text-white mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:w-[80%]">The startup ecosystem moves fast — new trends, disruptive ideas, and bold strategies emerge every day.</p>
                    <p className="text-white mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:w-[80%]">Our blog brings you sharp insights, founder stories, and the latest developments across sectors, so you&apos;re always one step ahead.</p>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 md:gap-6 -space-y-12">

                        <Blog />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo
