"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Btn } from "@/components";
import gsap from "gsap";
import meetingImg from "../../../public/images/meeting-img.jpg";

export function HomePage() {
    const [visible, setVisible] = useState(true);
    const [word, setWord] = useState("build");

    const words = ["build", "deploy", "release"];


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
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [word]);


    useEffect(() => {
        gsap.fromTo(".rotating-word",
            {
                y: 50,
                opacity: 0,
                rotationX: 30
            },
            {
                y: 0,
                opacity: 1,
                rotationX: 0,
                duration: 0.5
            }
        );
    }, [word]);

    return (
        <section className={`fixed top-0 left-0 h-full w-full p-10 overflow-hidden transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>

            <div className="flex justify-center">

                <div className="xl:w-[1405px]">

                    <div className="flex flex-col space-y-8 md:w-1/2 2xl:w-[620px] z-50 absolute mt-[80%] md:mt-[9%] 2xl:bottom-[10%]">

                        <div className="text-5xl md:text-7xl">
                            Help us{" "}
                            <span key={word} className="rotating-word inline-block text-[#bb0f4b]">
                                {word}
                            </span>
                            {" "}the technology of tomorrow
                        </div>

                        <p className="text-xl">
                            From sustainable building installations to smart infrastructure:
                            <br />
                            your expertise makes the difference. Together, we create <br />
                            technical solutions that make an impact.
                        </p>

                        <div className="flex">

                            <Btn
                                text="Find your challenge"
                                bgColor="bg-[#e83a77]"
                                borderColor="border border-[#e83a77]"
                                textColor="text-black"
                                hoverBgColor="hover:bg-[#e83a77]"
                                hoverTextColor="hover:text-white"
                            />

                        </div>

                    </div>

                    <div className="flex-1 flex justify-end opacity-40 items-center relative">

                        <Image
                            src={meetingImg}
                            alt="Meeting image"
                            className="md:h-screen mt-20 md:mt-0 md:w-[66%] object-cover"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default HomePage;
