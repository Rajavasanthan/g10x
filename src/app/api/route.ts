import Comment from "./models/comments";
import { db } from "./db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        await db.connect();
        const comment = new Comment(data);
        await comment.save();
        return NextResponse.json({ message: "Comment saved" })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    } finally {
        await db.close()
    }
}

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const blogId = url.searchParams.get("blogId")
        await db.connect();
        const comments = await Comment.find({ blogId }).sort({ date: -1 })
        return NextResponse.json(comments)
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    } finally {
        await db.close()
    }
}

export async function PUT(request: Request) {
    try {
        await db.connect();
        const url = new URL(request.url);
        const id = url.searchParams.get("id");
        const { clapCount } = await request.json();
        const result = await Comment.updateOne(
            { _id: id },
            { $set: { clapCount } }
        );
        return NextResponse.json({ message: "Updated successfully" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    } finally {
        await db.close();
    }
}

