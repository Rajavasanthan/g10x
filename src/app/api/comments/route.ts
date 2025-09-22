import Comment from "../models/comments";
import { db } from "../db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        if (!data.name || !data.comment || !data.slugId) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }
        data.slugId = new mongoose.Types.ObjectId(data.slugId);
        await db.connect();
        const comment = new Comment(data);
        await comment.save();
        return NextResponse.json({ message: "Comment saved" });
    } catch (error) {
        console.log("POST ERROR:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}


export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const slugId = url.searchParams.get("slugId");
        if (!slugId) return NextResponse.json([], { status: 200 });
        await db.connect();
        const comments = await Comment.find({ slugId: new mongoose.Types.ObjectId(slugId) })
            .sort({ date: -1 });
        return NextResponse.json(comments);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        await db.connect();
        const url = new URL(request.url);
        const id = url.searchParams.get("id");
        const { clapCount } = await request.json();
        await Comment.updateOne(
            { _id: id },
            { $set: { clapCount } }
        );
        return NextResponse.json({ message: "Updated successfully" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}