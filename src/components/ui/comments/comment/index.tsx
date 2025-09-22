"use client"
import React, { useEffect, useState } from 'react'
import profileImg from "../../../../../public/images/default_profile_img.png"
import Image from 'next/image'
import clapIcon from "../../../../../public/images/clap_icon.svg"
import { useParams } from 'next/navigation'
import { CommentsType } from '@/types'
import { getBlogsClapCount, getComment, updateClapCountById } from '@/utils/api'
import CommentsForm from '../form'
import gsap from "gsap"

export function Comments() {
    const params = useParams<{ blogId: string }>()
    const blogId = params.blogId

    const [comments, setComments] = useState<CommentsType[]>([])
    const [plusOnes, setPlusOnes] = useState<{ id: number; key: number }[]>([])
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

    function handleClapIcon(id: number, currentClapCount: number) {
        const newClapCount = currentClapCount + 1;
        updateClapCountById(String(id), newClapCount);

        setComments(prev =>
            prev.map(c =>
                c._id === id ? { ...c, clapCount: newClapCount } : c
            )
        );

        const key = Date.now();
        setPlusOnes(prev => [...prev, { id, key }]);

        setTimeout(() => {
            const el = document.getElementById(`plus-${id}-${key}`);
            if (el) {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 0, scale: 0.5 },
                    {
                        opacity: 1,
                        y: -50,
                        scale: 1.2,
                        duration: 0.6,
                        ease: "back.out(2)",
                        onComplete: () => {
                            gsap.to(el, {
                                opacity: 0,
                                y: -90,
                                scale: 0.8,
                                duration: 0.5,
                                ease: "power2.in",
                                onComplete: () => {
                                    setPlusOnes(prev => prev.filter(p => p.key !== key));
                                }
                            });
                        }
                    }
                );
            }
        }, 0);
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
                                <div className="flex space-x-1.5 items-center relative">
                                    <Image
                                        src={clapIcon}
                                        alt="Clap icon"
                                        className='cursor-pointer'
                                        onClick={() => handleClapIcon(comment._id, comment.clapCount)}
                                    />

                                    <p className="text-sm text-gray-600">{comment.clapCount}</p>

                                    {plusOnes
                                        .filter(p => p.id === comment._id)
                                        .map(p => (
                                            <span
                                                key={p.key}
                                                id={`plus-${comment._id}-${p.key}`}
                                                className="absolute px-2 py-1.5 bg-black text-white text-xs font-bold rounded-full shadow-lg opacity-0">
                                                +1
                                            </span>
                                        ))}
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
