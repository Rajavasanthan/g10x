import React from 'react';
import logo from '../../../public/images/logo.svg';

export function Navbar() {
    return (
        <div className="relative w-full bg-[#ede7dd] h-32">

            
            <div className="relative flex justify-between items-center p-8 pl-12 z-10">
                <img src={logo.src} alt="Logo" className="w-64" />

                <ul className="flex space-x-16 text-xl">
                    <li className="cursor-pointer">Community</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
            </div>

            <div className="absolute bottom-0 w-full h-12 bg-[#ede7dd] opacity-10"></div>

        </div>
    );
}

export default Navbar;
