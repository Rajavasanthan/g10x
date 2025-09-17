"use client"
import React, { useEffect, useState } from 'react'
import profileImg from "../../../../../public/images/default_profile_img.png"
import Image from 'next/image'
import clapIcon from "../../../../../public/images/clap_icon.svg"
import { useParams } from 'next/navigation'
import { CommentsType } from '@/types'
import { getComment, updateClapCountById } from '@/utils/api'
import CommentsForm from '../form'

export function Comments() {
    const params = useParams()
    const blogIdParam = params?.blogId
    const blogId = Array.isArray(blogIdParam) ? blogIdParam[0] : blogIdParam;

    const [comments, setComments] = useState<CommentsType[]>([])

    const fetchComments = async () => {
        if (!blogId) return

        try {
            const res = await getComment(blogId);
            setComments(res.data)
        } catch (error) {
            console.log("Failed to fetch comments", error)
        }
    }

    useEffect(() => {
        fetchComments()
    }, [blogId])

    function handleClapIcon(id: number, currentClapCount: number) {
        const newClapCount = currentClapCount + 1;
        updateClapCountById(String(id), newClapCount);

        setComments(prev =>
            prev.map(c =>
                c._id === id ? { ...c, clapCount: newClapCount } : c
            )
        );
    }
    return (
        <div className='flex flex-col space-y-8 lg:space-y-10 max-w-4xl mx-auto mb-12 px-4 md:px-6 lg:px-10'>

            <CommentsForm onNewComment={fetchComments} />

            {
                comments.length === 0 ? (
                    <p className="text-sm md:text-lg mt-3">No comments yet.</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment._id} className='flex flex-col space-y-4.5 border-b border-b-[#c9c7c7] pb-6'>
                            <div className='flex space-x-2.5 items-center'>
                                <Image src={profileImg} alt='Profile image' className='rounded-full w-10 h-10 object-cover' />
                                <div className='flex flex-col'>
                                    <h3 className='font-semibold'>{comment.name}</h3>
                                    <p className='text-sm'>
                                        {new Date(comment.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric"
                                        })}
                                    </p>
                                </div>
                            </div>
                            <p className='text-wrap text-sm lg:text-[15px]'>{comment.comment}</p>
                            <div className="flex items-center space-x-6 lg:space-x-8">
                                <div className="flex space-x-1.5 items-center">
                                    <Image src={clapIcon} alt="Clap icon" className='cursor-pointer'
                                        onClick={() => handleClapIcon(comment._id, comment.clapCount)} />
                                    <p className="text-sm text-gray-600">{comment.clapCount}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default Comments
