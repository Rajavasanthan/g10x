import React from 'react'

export function Comments() {
    return (
        <div className='w-4xl mx-auto'>
            <h2 className=" text-2xl sm:text-3xl font-semibold">Response(90)</h2>

            <form className='mt-10'>
                <div className='flex flex-col space-y-2 w-full'>
                    <label className='font-semibold text-lg'>Name</label>
                    <input type="text" className="border-2 border-[#a6a6a6] rounded p-1.5 px-2 focus:outline-none focus:border-black text-sm md:text-lg"
                        placeholder="Enter your name" />
                    <span className='text-sm text-red-500 font-semibold'>Name is required</span>
                </div>

                <div className='flex flex-col space-y-2 w-full mt-10'>
                    <label className='font-semibold text-lg'>Comments</label>
                    <textarea name="comments"
                        className="border-2 border-[#a6a6a6] rounded p-1.5 px-2 focus:outline-none focus:border-black text-sm md:text-lg h-28"
                        placeholder="Enter your comments here..."></textarea>
                    <span className='text-sm text-red-500 font-semibold'>Comment is required</span>
                </div>

                <div></div>
            </form>

        </div>
    )
}

export default Comments
