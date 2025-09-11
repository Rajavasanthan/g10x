"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Btn } from "@/components";
import gsap from "gsap";
import meetingImg from "../../../public/images/meeting-img.jpg";

export function HomePage() {
    const [visible, setVisible] = useState(true);
    const [word, setWord] = useState("future");

    const words = ["future", "innovation", "technology"];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY >= 3000) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            gsap.to(".rotating-word", {
                y: -40,
                opacity: 0,
                rotationX: 20,
                duration: 0.5,
                onComplete: () => {
                    const currentIndex = words.indexOf(word);
                    const nextIndex = (currentIndex + 1) % words.length;
                    setWord(words[nextIndex]);
                },
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [word]);

    useEffect(() => {
        gsap.fromTo(
            ".rotating-word",
            {
                y: 50,
                opacity: 0,
                rotationX: 30,
            },
            {
                y: 0,
                opacity: 1,
                rotationX: 0,
                duration: 0.5,
            }
        );
    }, [word]);


    return (
        <section
            className={`fixed top-0 left-0 h-full w-full pt-10 md:p-10 z-30 overflow-hidden duration-500 ${visible ? "block" : "hidden"
                }`}
        >
            <div className="flex justify-center">
                <div className="xl:w-[1405px] flex flex-col md:flex-row">

                    <div className="flex flex-col space-y-4 md:space-y-6 lg:w-[70%] xl:w-1/2 2xl:w-[670px] z-40 md:absolute bottom-[5%] md:mt-0 xl:mt-0 lg:mt-30 md:bottom-[10%] px-4 sm:px-6 md:px-0 order-2 md:order-1">

                        <div className="hidden lg:block text-2xl sm:text-4xl lg:text-6xl xl:text-7xl">
                            Building the <br />
                            <span key={word} className="rotating-word inline-block text-[#bb0f4b]">
                                {word}
                            </span>{" "}
                            change that lasts
                        </div>

                        <div className="block lg:hidden text-xl mt-4">
                            Building the{" "}
                            <span key={word} className="rotating-word inline-block text-[#bb0f4b]">
                                {word}
                            </span>{" "}
                            change <br /> that lasts
                        </div>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                            From healthcare to deep tech, from fintech to space — every idea here finds its tribe.
                            At G10X, startups don&apos;t get lost in noise — they scale with focus, relevance, and global collaboration.
                            Be part of a sector-focused circle where conversations are sharper, collaborations are stronger, and growth is accelerated.
                        </p>

                        <div className="flex">
                            <Btn
                                text="Apply Now"
                                bgColor="bg-[#e83a77]"
                                borderColor="border border-[#e83a77]"
                                textColor="text-black"
                                hoverBgColor="hover:bg-[#e83a77]"
                                hoverTextColor="hover:text-white"
                            />
                        </div>
                    </div>

                    <div className="flex order-1 md:order-2 mt-12 justify-center md:justify-end items-center opacity-40">
                        <Image
                            src={meetingImg}
                            alt="Meeting image"
                            className="w-full md:w-[66%] md:h-screen object-cover rounded-l-[60px] rounded-b-[60px] px-4 sm:px-6 md:px-0 xl:ml-80 "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
