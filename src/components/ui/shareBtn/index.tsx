"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import shareIcon from "../../../../public/images/share_icon.svg";
import linkIcon from "../../../../public/images/link_icon.svg";

export function ShareBtn() {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            const target = event.target as HTMLElement;

            if (
                !target.closest(".share-btn") &&
                !target.closest(".share-dropdown")
            ) {
                setOpen(false);
                setCopied(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClick);
        } else {
            document.removeEventListener("mousedown", handleClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [open]);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <div className="relative">
            <div className="share-btn inline-block">
                <Image
                    src={shareIcon}
                    alt="Share icon"
                    className="cursor-pointer"
                    onClick={() => setOpen((prev) => !prev)}
                />
            </div>

            {open && (
                <div className="share-dropdown absolute bottom-11 right-3 bg-white rounded shadow-md p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleCopyLink}>
                    <div
                        className="flex space-x-2 items-center justify-center p-1 px-3">
                        <Image src={linkIcon} alt="Link icon" className="w-4" />
                        <p className="text-sm text-nowrap">
                            {copied ? "Copied!" : "Copy link"}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShareBtn;
