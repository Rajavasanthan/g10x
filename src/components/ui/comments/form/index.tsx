"use client"

import { useEffect, useState } from "react"
import { useFormik } from "formik"
import ReCAPTCHA from "react-google-recaptcha"
import { FormErrors, FormValues } from "@/types"
import { useParams } from "next/navigation"
import { getBlogsClapCount, postComment } from "@/utils/api"

interface CommentFormProps {
    onNewComment?: () => void
}

export function CommentsForm({ onNewComment }: CommentFormProps) {
    const params = useParams<{ blogId: string }>()
    const blogId = params.blogId

    const [captchaToken, setCaptchaToken] = useState<string | null>(null)
    const [slugId, setSlugId] = useState("")

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await getBlogsClapCount(blogId);
                console.log("Blog response:", res.data); 
                const id = res.data._id; 
                setSlugId(id);
            } catch (error) {
                console.error("Failed to fetch blog", error);
            }
        };
        fetchBlog();
    }, [blogId]);

    const formik = useFormik<FormValues>({
        initialValues: {
            name: "",
            comment: "",
            captcha: "",
        },
        validate: (values) => {
            const errors: FormErrors = {}

            if (!values.name) {
                errors.name = "Name is required"
            } else if (values.name.length < 3) {
                errors.name = "Enter a valid name"
            }

            if (!values.comment) {
                errors.comment = "Comments are required"
            } else if (values.comment.length < 10) {
                errors.comment = "Enter valid comment"
            }

            if (!captchaToken) {
                errors.captcha = "Please verify reCAPTCHA"
            }

            return errors
        },
        onSubmit: async (values, { resetForm }) => {
            if (!slugId) {
                alert("Blog ID is missing");
                return;
            }
            try {
                const payload = { ...values, slugId };
                console.log("Submitting payload:", payload);
                const res = await postComment(payload);
                if (onNewComment) onNewComment();
                alert("Comment sent successfully");
                resetForm();
                setCaptchaToken(null);
            } catch {
                alert("Something went wrong");
            }
        },
    })
    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Comments</h2>

            <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col w-full text-sm md:text-xl space-y-8 mt-8"
            >
                {/* Name */}
                <div className="flex flex-col space-y-2 w-full">
                    <label className="font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="border-2 border-[#a6a6a6] rounded p-1.5 px-2 focus:outline-none focus:border-black text-sm md:text-lg"
                        placeholder="Enter your name"
                    />
                    {formik.touched.name && formik.errors.name && (
                        <span className="text-red-500 font-semibold text-sm">
                            {formik.errors.name}
                        </span>
                    )}
                </div>

                {/* Comments */}
                <div className="flex flex-col space-y-2 w-full">
                    <label className="font-semibold">Comments</label>
                    <textarea
                        name="comment"
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="border-2 border-[#a6a6a6] rounded p-1.5 px-2 focus:outline-none focus:border-black text-sm md:text-lg h-28"
                        placeholder="Enter your comments here..."
                    />
                    {formik.touched.comment && formik.errors.comment && (
                        <span className="text-red-500 font-semibold text-sm">
                            {formik.errors.comment}
                        </span>
                    )}
                </div>

                {/* Google reCAPTCHA */}
                <div>
                    <ReCAPTCHA
                        sitekey="6LfvjcorAAAAAI_ZX2jIlTZJk2RCWDnaiC93iknP"

                        onChange={(token) => {
                            setCaptchaToken(token)
                            formik.setFieldValue("captcha", token)
                        }}
                        onExpired={() => {
                            setCaptchaToken(null)
                            formik.setFieldValue("captcha", "")
                        }}
                    />
                    {!captchaToken && formik.errors.captcha && (
                        <span className="text-red-500 font-semibold text-sm">
                            {formik.errors.captcha}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <div className="w-full">
                    <button className="text-black border border-black py-1 px-4 rounded-xl w-fit duration-500 transform transition-transform hover:translate-x-2.5 cursor-pointer text-nowrap text-sm lg:text-lg">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CommentsForm
