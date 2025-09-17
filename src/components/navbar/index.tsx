"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import originalLogo from "../../../public/images/original_logo.png";
import { NavItem } from "@/types";
import Link from "next/link";

export function Navbar({ items }: { items: NavItem[] }) {
    const router = useRouter();

    const handleClick = (item: NavItem) => {
        if (item.targetId) {
            const el = document.getElementById(item.targetId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                return;
            }
        }
        if (item.href) {
            router.push(item.href);
        }
    };
    return (
        <div className="relative w-full h-32 md:h-42">
            <div className="relative bg-[#ede7dd] flex items-center justify-center h-1/2 z-10">
                <div className="flex justify-between w-[1405px] py-8 px-4 sm:px-6 md:px-10.5 2xl:px-2 items-center">
                    {/* Logo */}
                    <div className="flex gap-4 items-center">
                        <Link href={"/"}>
                            <Image src={originalLogo} alt="Logo" className="w-14 mt-6 cursor-pointer" />
                        </Link>
                        <div className="flex flex-col mt-6 text-md lg:text-xl font-semibold text-gray-600">
                            <p>Global Thriving</p>
                            <p>Entrepreneurs Network</p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-16 text-xl mt-10">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="cursor-pointer"
                                onClick={() => handleClick(item)}>
                                {item.label}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu */}
                    <div className="md:hidden mt-5">
                        <input type="checkbox" id="menu-toggle" className="peer hidden" />
                        <label
                            htmlFor="menu-toggle"
                            className="flex flex-col gap-1.5 cursor-pointer">
                            <span className="block w-7 h-0.5 bg-black"></span>
                            <span className="block w-7 h-0.5 bg-black"></span>
                            <span className="block w-7 h-0.5 bg-black"></span>
                        </label>

                        <div className="fixed top-0 left-0 h-full w-[97%] bg-black text-white transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 z-10 flex flex-col">
                            <div className="flex justify-between items-center p-8 border-b border-gray-700">
                                <Image src={originalLogo} alt="Logo" className="w-20" />
                                <label htmlFor="menu-toggle" className="cursor-pointer text-2xl">
                                    ✕
                                </label>
                            </div>
                            <ul className="flex flex-col p-6 space-y-6 text-xl">
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="cursor-pointer hover:text-gray-400"
                                        onClick={() => handleClick(item)}>
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-via-transparent via-transparent to-[#ede7dd]"></div>
        </div>
    );
}

export default Navbar;
