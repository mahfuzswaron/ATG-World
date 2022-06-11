import React from 'react';
import bannerImg from '../../../assets/images/Rectangle 2image.jpg';
import bannerMob from '../../../assets/images/mb-banner.png';
const Banner = () => {
    return (
        <div className='relative w-96  lg:w-full'>
            <figure>
                <img className='hidden lg:block' src={bannerImg} alt="" />
                <img className='lg:hidden' src={bannerMob} alt="" />
            </figure>
            <div className='absolute w-full h-full top-0 bg-black/[.5] '></div>

            <button className="lg:hidden btn btn-outline btn-transperant absolute top-5 right-5 z-1">Join Group</button>
            <div className='absolute lg:bottom-14 bottom-5 lg:left-52 left-5 text-white'>
                <h1 className='lg:text-4xl text-lg font-bold'>
                    Computer Engineering
                </h1>
                <p className='lg:text-md sm:text-xs mt-2'>
                    142,765 Computer Engineers follow this
                </p>
            </div>
        </div>
    );
};

export default Banner;