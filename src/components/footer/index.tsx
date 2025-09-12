"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import originalLogo from "../../../public/images/original_logo.png";
import linkedInImg from "../../../public/images/Linkedin-img.svg";
import instagramImg from "../../../public/images/Instagram-img.svg";
import facebookImg from "../../../public/images/Facebook-img.svg";

export function Footer() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY >= 3000) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className={`bg-black hidden lg:block lg:h-screen 2xl:h-[760px] fixed bottom-0 left-0 w-full pt-40 overflow-hidden transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"
                }`}>

            <div className="flex justify-center">

                <div className="xl:w-[1405px] absolute md:bottom-0">

                    <div className="flex flex-col md:flex-row px-6 md:px-18">

                        <div className="flex flex-col items-center md:ml-40">

                            <Image src={originalLogo} alt="logo white" className="w-50" />

                            <div className="flex gap-8 mt-10 md:mt-20">

                                <Image src={linkedInImg} alt="Linked in image" className="w-14" />

                                <Image src={instagramImg} alt="Instagram image" className="w-14" />

                                <Image src={facebookImg} alt="Facebook image" className="w-14" />

                            </div>

                        </div>

                        <div className="flex flex-col border-l border-gray-500 pl-16 md:pl-20 pb-10 md:pb-25 ml-10 md:ml-74">

                            <ul className="flex flex-col text-white mt-14 md:mt-24 text-lg">

                                <li className="cursor-pointer hover:underline">Vacancies</li>

                                <li className="cursor-pointer hover:underline">Trainee</li>

                                <li className="cursor-pointer hover:underline">Interim manager</li>

                                <li className="cursor-pointer hover:underline">Client</li>

                            </ul>

                            <div className="text-white border border-white py-1 px-4 mt-8 md:mt-24  rounded-3xl w-fit duration-500 transform transition-transform hover:translate-x-2.5 cursor-pointer text-nowrap">
                                Contact us
                            </div>

                        </div>

                    </div>

                    <div className="border-t border-gray-500 md:py-8 md:mt-4 2xl:mt-10 ">

                        <ul className="flex w-full flex-wrap justify-center items-center text-white underline text-sm md:text-[17px] gap-5 md:gap-9">

                            <li className="cursor-pointer">Privacy statement</li>

                            <li className="cursor-pointer">Disclaimer</li>

                            <li className="cursor-pointer">General terms and conditions</li>

                        </ul>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Footer;
