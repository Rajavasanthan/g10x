"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import clapIcon from "../../../../public/images/clap_icon.svg";
import { createBlogsForClaps, getBlogsClapCount, updateClapCountByBlogId } from "@/utils/api";
import { Blog } from "@/types";

export function BlogClapCount({ blogId }: { blogId: string }) {
    const [blog, setBlog] = useState<Blog | null>(null);

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

        try {
            await updateClapCountByBlogId(blogId, newClapCount);
        } catch (error) {
            console.error("Failed to update clap count", error);
            setBlog((prev) => prev ? { ...prev, clapCount: prev.clapCount - 1 } : prev);
        }
    }

    return (
        <div className="flex space-x-1.5 items-center">
            <Image
                src={clapIcon}
                alt="Clap icon"
                onClick={() => handleClapIcon(blogId)}
                className="cursor-pointer"
            />
            <p className="text-sm text-gray-600">{blog?.clapCount || 0}</p>
        </div>
    );
}
