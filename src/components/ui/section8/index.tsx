import React from 'react'
import Card from './card'
import blogOneImg from "../../../../public/images/blog-profile-img1.png";
import blogTwoImg from "../../../../public/images/blog-profile-img2.png";
import blogThreeImg from "../../../../public/images/blog-profile-img3.jpg";
import blogFourImg from "../../../../public/images/blog-profile-img4.jpg";

export function SectionEight() {
    return (
        <section className="bg-[#ede7dd] px-4 sm:px-6 md:px-10 pb-20 xl:pb-18">
            <div className="flex justify-center">
                <div className="xl:w-[1405px]">
                    <h2 className="text-2xl md:text-5xl xl:text-[70px]">G10X Founders</h2>
                    <p className="text-sm sm:text-base md:text-lg font-light mt-2 xl:w-[80%]">Every founder in G10X has a story. These are journeys of resilience, collaboration, and growth — powered by focus and community.</p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 space-y-3">
                        <Card
                            image={blogOneImg.src}
                            title="Healthcare Circle"
                            content="Dr. Ananya: How her startup reduced patient wait time in rural clinics by 40% with AI triage."
                        />
                        <Card
                            image={blogTwoImg.src}
                            title="Fintech Circle"
                            content="Arjun Mehta: Scaling a cross-border payments platform with mentorship from the G10X Fintech track."
                        />
                        <Card
                            image={blogThreeImg.src}
                            title="Mobility Circle"
                            content="Lena Torres: From prototype to pilot — building sustainable EV charging hubs with G10X"
                        />
                        <Card
                            image={blogFourImg.src}
                            title="Mobility Circle"
                            content="Lena Torres: From prototype to pilot — building sustainable EV charging hubs with G10X"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionEight
