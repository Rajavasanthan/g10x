import Blog from "@/app/api/models/blog";
import { db } from "@/app/api/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        await db.connect();
        let blog = await Blog.findOne({ slug: data.slug });
        if (!blog) {
            blog = new Blog({ slug: data.slug });
            await blog.save();
        }
        return NextResponse.json({ message: "Saved successfully", blog });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const slug = url.searchParams.get("slug");
        if (!slug) {
            return NextResponse.json({ message: "slug is required" }, { status: 400 });
        }
        await db.connect();
        const blog = await Blog.findOne({ slug });

        return NextResponse.json(blog);
    } catch (error) {
        console.error("GET method error:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        await db.connect();
        const url = new URL(request.url);
        const slug = url.searchParams.get("slug");
        const { clapCount } = await request.json();

        await Blog.updateOne({ slug }, { $set: { clapCount } });
        return NextResponse.json({ message: "Blog clapCount updated successfully" });
    } catch (error) {
        console.error("PUT method error:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}