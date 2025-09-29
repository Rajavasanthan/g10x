import { SectionSix } from "@/types";
import Image from "next/image";
import React from "react";

export function Logo({ logo, title, content }: SectionSix) {
    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
                <Image
                    src={logo}
                    alt={title}
                    width={28}   
                    height={28}  
                    className="w-10 object-contain"
                />
                <h3 className="text-md md:text-xl lg:text-[28px] relative top-2 lg:font-semibold">
                    {title}
                </h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg mt-6 font-light">
                {content}
            </p>
        </div>
    );
}
export default Logo;
