import React from 'react';
import shareIcon from '../../../../../assets/icons/share-icon.png'

const Post = () => {
    return (
        <div class="card card-compact w-full bg-white border border-[#E0E0E0]">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <p className='font-medium space-x-1 text-black text-lg'><span className='relative bottom-1 '>✍️</span><span> Article</span></p>
                <h2 class="card-title text-black text-3xl font-semibold">What if famous brands had regular fonts? Meet RegulaBrands!</h2>
                <p className='text-lg'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                <div class="justify-end mt-5">
                    <div className='flex items-center space-x-2'>
                        <div class="avatar">
                            <div class="w-14 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=92310" />
                            </div>
                        </div>
                        <p className='text-xl text-black font-semibold '>
                            Mahfuz Swaron
                        </p>

                        <div className='flex justify-between items-center space-x-10'>
                            <p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg> 1.4k views</p>
                            <img className='bg-gray-100 p-3 btn btn-ghost' src={shareIcon} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;