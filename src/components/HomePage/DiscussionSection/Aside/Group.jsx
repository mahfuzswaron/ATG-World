import React from 'react';

const Group = ({ group }) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex space-x-4 items-center'>
                <div class="avatar">
                    <div class="w-10 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                </div>
                <p className='text-black'>{group.name}</p>
            </div>
            <button className='btn btn-xs btn-ghost rounded-full bg-gray-100 normal-case text-black'>Follow</button>
        </div>
    );
};

export default Group;