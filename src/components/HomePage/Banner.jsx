import React from 'react';
import bannerImg from '../../../assets/images/Rectangle 2image.jpg';
import bannerMob from '../../../assets/images/mb-banner.png';
const Banner = () => {
    return (
        <div className=''>
            <div className="lg:hidden bg-[#F8F9FA] w-full h-8"></div>
            <div className='relative w-96 lg:full mx-0'>
                <figure className=''>
                    <img className='hidden lg:block' src={bannerImg} alt="" />
                    <img className='lg:hidden' src={bannerMob} alt="" />
                </figure>
                <div className='absolute w-full h-full top-0 bg-black/[.5] '></div>

                <button className="lg:hidden text-white btn btn-outline btn-transperant absolute top-5 right-5 z-1">Join Group</button>

                <button className="lg:hidden text-white border-none btn btn-outline btn-transperant absolute top-5 left-5 z-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg></button>

                <div className='absolute lg:bottom-14 bottom-5 lg:left-52 left-5 text-white'>
                    <h1 className='lg:text-4xl text-lg font-bold'>
                        Computer Engineering
                    </h1>
                    <p className='lg:text-md sm:text-xs mt-2'>
                        142,765 Computer Engineers follow this
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;