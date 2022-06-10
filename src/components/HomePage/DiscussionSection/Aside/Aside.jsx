import React from 'react';
import Group from './Group';

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

            <div className='pl-5 mt-20'>
                <h3 className='text-xl text-black uppercase my-5'><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 inline mb-2 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>Recomended Groups</h3>
                <div className='grid gap-5'>
                    {
                        <>
                            <Group group={{ name: 'Leisur' }} />
                            <Group group={{ name: 'MBA' }} />
                            <Group group={{ name: 'Activism' }} />
                            <Group group={{ name: 'Philosophy' }} />
                        </>
                    }
                </div>
                <p className='btn btn-link relative left-48 mt-5 normal-case '>see more...</p>
            </div>

        </aside>
    );
};

export default Aside;