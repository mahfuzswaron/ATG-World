import React from 'react';
import bannerImg from '../../../assets/images/Rectangle 2image.jpg';

const Banner = () => {
    return (
        <div className='relative'>
            <img src={bannerImg} alt="" />
            <div className='absolute w-full h-full top-0 bg-black/[.5] '></div>
            <div className='absolute bottom-14 left-52 text-white'>
                <h1 className='text-4xl font-bold'>
                    Computer Engineering
                </h1>
                <p className='text-lg mt-2'>
                    142,765 Computer Engineers follow this
                </p>
            </div>
        </div>
    );
};

export default Banner;