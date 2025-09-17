import Blog from "@/app/api/models/blog";
import { db } from "@/app/api/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        await db.connect();
        let blog = await Blog.findOne({ blogId: data.blogId });
        if (!blog) {
            blog = new Blog({ blogId: data.blogId });
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
        const blogId = url.searchParams.get("blogId");
        if (!blogId) {
            return NextResponse.json({ message: "blogId is required" }, { status: 400 });
        }
        await db.connect();
        const blog = await Blog.findOne({ blogId });

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
        const blogId = url.searchParams.get("blogId");
        const { clapCount } = await request.json();

        await Blog.updateOne({ blogId }, { $set: { clapCount } });
        return NextResponse.json({ message: "Blog clapCount updated successfully" });
    } catch (error) {
        console.error("PUT method error:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}