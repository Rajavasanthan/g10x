"use client";

import { useEffect, useState } from "react";
import { getBlogsClapCount, getComment } from "@/utils/api";
import { CommentsType } from "@/types";
import Image from "next/image";
import commentIcon from "../../../../public/images/comment_icon.svg";

export function CommentCount({ blogId }: { blogId: string }) {
    const [comments, setComments] = useState<CommentsType[]>([]);
    const [slugId, setSlugId] = useState("")

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await getBlogsClapCount(blogId);
                setSlugId(res.data._id)
            } catch (error) {
                console.error("Failed to fetch blog", error);
            }
        };
        fetchBlog();
    }, [blogId]);

    const fetchComments = async () => {
        if (!slugId) return

        try {
            const res = await getComment(slugId);
            setComments(res.data)
        } catch (error) {
            console.log("Failed to fetch comments", error)
        }
    }

    useEffect(() => {
        fetchComments()
    }, [slugId])

    const commentsCount = comments.length;
    const handleScrollToComments = () => {
        const section = document.getElementById("comments-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div
            className="flex space-x-1.5 items-center cursor-pointer"
            onClick={handleScrollToComments}
        >
            <Image src={commentIcon} alt="Comment icon" />
            <p className="text-sm text-gray-600">{commentsCount}</p>
        </div>
    );
}

export default CommentCount