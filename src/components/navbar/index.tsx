import React from 'react';
// import logo from '../../../public/images/logo.svg';
// import logoWhite from "../../../public/images/logo-white.svg"

import originalLogo from "../../../public/images/original_logo.png"

import Image from 'next/image';

export function Navbar() {
    return (
        <div className="relative w-full h-42">

            <div className="relative bg-[#ede7dd] flex items-center justify-center  h-1/2 p-8 pl-12 z-10">

                <div className='flex justify-between w-[1405px] items-center'>

                    <Image src={originalLogo} alt="Logo" className="w-14 mt-6" />


                    <ul className="hidden md:flex space-x-16 text-xl mt-12">

                        <li className="cursor-pointer">Community</li>

                        <li className="cursor-pointer">About</li>

                        <li className="cursor-pointer">Contact</li>

                    </ul>


                    <div className="md:hidden mt-12">

                        <input type="checkbox" id="menu-toggle" className="peer hidden" />

                        <label
                            htmlFor="menu-toggle"
                            className="flex flex-col gap-1.5 cursor-pointer"
                        >
                            <span className="block w-8 h-1 bg-black"></span>

                            <span className="block w-8 h-1 bg-black"></span>

                            <span className="block w-8 h-1 bg-black"></span>

                        </label>


                        <div className="fixed top-0 left-0 h-full w-[97%] bg-black text-white transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 z-10 flex flex-col">

                            <div className="flex justify-between items-center p-8 border-b border-gray-700">

                                <Image src={originalLogo} alt="Logo" className="w-20" />

                                <label htmlFor="menu-toggle" className="cursor-pointer text-3xl">
                                    ✕
                                </label>

                            </div>


                            <ul className="flex flex-col p-6 space-y-6 text-2xl">

                                <li className="cursor-pointer hover:text-gray-400">Community</li>

                                <li className="cursor-pointer hover:text-gray-400">About</li>

                                <li className="cursor-pointer hover:text-gray-400">Contact</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>


            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-via-transparent via-transparent to-[#ede7dd]"></div>

        </div>
    );
}

export default Navbar;
