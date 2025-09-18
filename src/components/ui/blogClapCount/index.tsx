"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import clapIcon from "../../../../public/images/clap_icon.svg";
import { createBlogsForClaps, getBlogsClapCount, updateClapCountByBlogId } from "@/utils/api";
import { Blog } from "@/types";

export function BlogClapCount({ blogId }: { blogId: string }) {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [plusOnes, setPlusOnes] = useState<number[]>([]); 

    useEffect(() => {
        const ensureBlog = async () => {
            try {
                await createBlogsForClaps(blogId);
            } catch (error) {
                console.error("Failed to ensure blog", error);
            }
        };
        ensureBlog();
    }, [blogId]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await getBlogsClapCount(blogId);
                setBlog({
                    blogId,
                    clapCount: res.data.clapCount || 0
                });
            } catch (error) {
                console.error("Failed to fetch blog", error);
            }
        };
        fetchBlog();
    }, [blogId]);

    async function handleClapIcon(blogId: string) {
        if (!blog) return;
        const newClapCount = (blog.clapCount || 0) + 1;
        setBlog({ ...blog, clapCount: newClapCount });

        const id = Date.now();
        setPlusOnes((prev) => [...prev, id]);

        try {
            await updateClapCountByBlogId(blogId, newClapCount);
        } catch (error) {
            console.error("Failed to update clap count", error);
            setBlog((prev) => prev ? { ...prev, clapCount: prev.clapCount - 1 } : prev);
        }
    }

    useEffect(() => {
        plusOnes.forEach((id) => {
            const el = document.getElementById(`plus-${id}`);
            if (el) {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 0, scale: 0.5 },
                    {
                        opacity: 1,
                        y: -60,
                        scale: 1.2,
                        duration: 0.6,
                        ease: "back.out(2)",
                        onComplete: () => {
                            gsap.to(el, {
                                opacity: 0,
                                y: -100,
                                scale: 0.8,
                                duration: 0.5,
                                ease: "power2.in",
                                onComplete: () => {
                                    setPlusOnes((prev) => prev.filter((pid) => pid !== id));
                                }
                            });
                        }
                    }
                );
            }
        });
    }, [plusOnes]);

    return (
        <div className="flex space-x-1.5 items-center relative">
            <div className="relative">
                <Image
                    src={clapIcon}
                    alt="Clap icon"
                    onClick={() => handleClapIcon(blogId)}
                    className="cursor-pointer"
                />

                {plusOnes.map((id) => (
                    <span
                        key={id}
                        id={`plus-${id}`}
                        className="absolute left-1/2 -translate-x-1/2 px-2 py-1.5 bg-black text-white text-xs font-bold rounded-full shadow-lg opacity-0">
                        +1
                    </span>
                ))}
            </div>

            <p className="text-sm text-gray-600">{blog?.clapCount || 0}</p>
        </div>
    );
}
