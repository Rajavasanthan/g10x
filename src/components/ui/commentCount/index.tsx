"use client";

import { useEffect, useState } from "react";
import { getComment } from "@/utils/api";
import { CommentsType } from "@/types";
import Image from "next/image";
import commentIcon from "../../../../public/images/comment_icon.svg";

export function CommentCount({ blogId }: { blogId: string }) {
    const [comments, setComments] = useState<CommentsType[]>([]);
    
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await getComment(blogId);
                setComments(res.data);
            } catch (error) {
                console.error("Failed to fetch comments", error);
            }
        };
        fetchComments();
    }, [blogId]);

    return (
        <div className="flex space-x-1.5 items-center">
            <Image src={commentIcon} alt="Comment icon" />
            <p className="text-sm text-gray-600">{comments.length}</p>
        </div>
    );
}

export default CommentCount