import React from 'react';

const GroupNavBar = () => {
    return (
        <div className='pt-5 lg:block hidden'>
            <div className='flex justify-between '>
                <div class="tabs ">
                    <a class="tab tab-bordered pb-10  tab-active">All Posts (36) </a>
                    <a class="tab tab-bordered pb-10 ">Article</a>
                    <a class="tab tab-bordered pb-10 ">Event</a>
                    <a class="tab tab-bordered pb-10 ">Education</a>
                    <a class="tab tab-bordered pb-10 ">Job</a>
                </div>
                <div className='space-x-4 items-center flex '>

                    <div class="dropdown">
                        <label tabindex="0" class="btn border-none m-1 text-black bg-[#EDEEF0]">Write a Post
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Add Photo/video</a></li>
                            <li><a>Only Text</a></li>
                        </ul>
                    </div>

                    <button class="btn bg-[#2F6CE5] text-white border-none flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg><span>Join Group</span></button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default GroupNavBar;