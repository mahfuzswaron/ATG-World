import React from 'react';
import shareIcon from '../../../../../assets/icons/share-icon.png';

const EducationOrArticle = ({ postDetails }) => {
    const { category, title, post, img, icon, poster } = postDetails;
    return (
        <div class="card card-compact w-full bg-white border border-[#E0E0E0]">
            <figure>
                <img src={img} />
            </figure>
            <div class="card-body relative">
                <p className='font-medium space-x-1 text-black text-lg'><span className='relative bottom-1 '>{icon}</span><span> {category}</span></p>
                <h2 class="card-title text-black text-2xl font-semibold">
                    {title}
                </h2>
                <div className='absolute z-1 top-12 right-3 '>

                    <div class="dropdown dropdown-top dropdown-end">
                        <label tabindex="0" class=" btn btn-ghost ">
                            <img src="../../../../../assets/icons/three-dots.png" alt="" className='w-5 h-5' />
                        </label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-white rounded w-52">
                            <li><a>Edit</a></li>
                            <li><a>Report</a></li>
                            <li><a>Save</a></li>
                        </ul>
                    </div>
                </div>
                <p className='text-lg'>
                    {post}
                </p>

                <div class="justify-end mt-5">
                    <div className='flex items-center space-x-2'>
                        <div class="avatar">
                            <div class="w-14 rounded-full">
                                <img src={poster.photo} />
                            </div>
                        </div>
                        <p className='text-xl text-black font-semibold '>
                            {poster.name}
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

export default EducationOrArticle;