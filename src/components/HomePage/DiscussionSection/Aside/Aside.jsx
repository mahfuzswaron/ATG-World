import React from 'react';

const Aside = () => {
    return (
        <aside className='px-5'>
            <div className='flex mt-10 '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative top-3 left-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input type="text" className="input rounded-none border-[#B8B8B8] border-0  border-b-2 bg-white px-10 w-full" placeholder='Location here' />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative top-3 right-5 cursor-pointer btn-ghost" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className='flex items-top my-10 pl-5 '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className='text-sm'>
                    Your location will help us serve better and extend a personalised experience.
                </p>
            </div>
        </aside>
    );
};

export default Aside;