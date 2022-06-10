import React from 'react';
import Aside from './Aside/Aside';
import GroupNavBar from './GroupNavBar';
import AllPosts from './Posts/AllPosts';

const Discussion = () => {
    return (
        <div className='bg-white px-56'>
            <GroupNavBar></GroupNavBar>
            <div className='flex justify-between pt-2'>
                <AllPosts></AllPosts>
                <Aside></Aside>
            </div>
        </div>
    );
};

export default Discussion;