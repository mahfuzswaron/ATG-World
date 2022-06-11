import React from 'react';
import shareIcon from '../../../../../assets/icons/share-icon.png';

const EventOrJob = ({ postDetails }) => {
    const { category, title, location, date, img, icon, poster, company } = postDetails;
    return (
        <div>
            <div class="card card-compact rounded w-96 lg:w-full bg-white border border-[#E0E0E0]">
                <figure>
                    <img src={img} />
                </figure>
                <div class="card-body relative">
                    <p className='font-medium space-x-1 text-black text-lg'><span className=' '>{icon}</span><span> {category}</span></p>
                    <h2 class="card-title text-black text-2xl font-semibold">
                        {title}
                    </h2>
                    <div className='absolute z-1 top-12 right-3 '>

                        <div class="dropdown dropdown-top dropdown-end">
                            <label tabindex="0" class=" btn btn-ghost ">
                                <img src="https://i.ibb.co/NjcFzwy/three-dots.png" alt="" className='w-5 h-5' />
                            </label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-white rounded w-52">
                                <li><a>Edit</a></li>
                                <li><a>Report</a></li>
                                <li><a>Save</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex space-x-10 mb-3'>
                        {
                            category === 'Meetup'
                                ?
                                <p className='flex items-center '>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg> {date}
                                </p>
                                :
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {company}
                                </p>

                        }
                        < p className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg> {location}
                        </p>

                    </div>
                    {
                        category === 'Meetup'
                            ?
                            <button className='btn btn-outline text-[#E56135] ' >Visit Website</button>
                            :
                            <button className='btn btn-outline btn-success ' >Apply on Timesjobs </button>
                    }

                    <div class="justify-end mt-5">
                        <div className='flex items-center space-x-2'>
                            <div class="avatar">
                                <div class="w-14 rounded-full">
                                    <img src={poster?.photo} />
                                </div>
                            </div>
                            <p className='text-xl text-black font-semibold '>
                                {poster?.name}
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
        </div >
    );
};

export default EventOrJob;