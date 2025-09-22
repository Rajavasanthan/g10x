import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useBlogsData } from "@/hooks/useBlogsData";

export function Blog() {
    const blogData = useBlogsData()
    return (
        blogData.map((blog) => (
            <Link key={blog.id} href={`blog/${blog.fileName}`} className="overflow-hidden cursor-pointer xl:h-84">
                <Image
                    src={blog.image}
                    alt="Men image"
                    width={600}
                    height={200}
                    className="w-full h-32 object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>

                <div className="relative bottom-24 left-6 md:w-64 h-fit flex flex-col text-white">
                    <h3 className="text-lg md:text-xl lg:text-2xl">{blog.title}</h3>
                    <p className="text-sm md:text-[16px] mt-6">{blog.description}</p>
                    <p className="mt-6 text-lg underline">Read more</p>
                </div>
            </Link>

        ))
    );
}

export default Blog;
