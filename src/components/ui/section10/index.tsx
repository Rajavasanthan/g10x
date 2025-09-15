import Image from 'next/image'
import React from 'react'

import originalLogo from "../../../../public/images/original_logo.png";
import linkedInImg from "../../../../public/images/Linkedin-img.svg";
import instagramImg from "../../../../public/images/Instagram-img.svg";
import facebookImg from "../../../../public/images/Facebook-img.svg";

export function SectionTen() {
    return (
        <section className={`bg-black lg:hidden block w-full pt-40`}>
            <div className="flex justify-center">
                <div>
                    <div className="flex flex-col px-4">

                        <div className="flex flex-col items-center">
                            <Image src={originalLogo} alt="logo white" className="w-50" />
                            <div className="flex gap-8 mt-10 ">
                                <Image src={linkedInImg} alt="Linked in image" className="w-14" />
                                <Image src={instagramImg} alt="Instagram image" className="w-14" />
                                <Image src={facebookImg} alt="Facebook image" className="w-14" />
                            </div>
                        </div>

                        <div className="flex flex-col border-l border-gray-500 pl-16 mt-4 pb-10 ml-18 ">
                            <ul className="flex flex-col text-white mt-14 md:mt-24 text-sm">
                                <li className="cursor-pointer hover:underline">Vacancies</li>
                                <li className="cursor-pointer hover:underline">Trainee</li>
                                <li className="cursor-pointer hover:underline">Interim manager</li>
                                <li className="cursor-pointer hover:underline">Client</li>
                            </ul>
                            <div className="text-white border border-white py-1 px-4 mt-10 rounded-3xl w-fit duration-500 transform transition-transform hover:translate-x-2.5 cursor-pointer text-sm text-nowrap">
                                Contact us
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-500 mt-6 pt-6 md:pt-9 pb-6 w-full">
                        <ul className="flex flex-wrap justify-center items-center text-white underline text-sm gap-5 md:gap-9">
                            <li className="cursor-pointer">Privacy statement</li>
                            <li className="cursor-pointer">Disclaimer</li>
                            <li className="cursor-pointer">General terms and conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTen
