import React from 'react';
import Aside from './Aside/Aside';
import GroupNavBar from './GroupNavBar';
import AllPosts from './Posts/AllPosts';

const Discussion = () => {
    return (
        <div className='bg-white'>
            <GroupNavBar></GroupNavBar>
            <div>
                <AllPosts></AllPosts>
                <Aside></Aside>
            </div>
        </div>
    );
};

export default Discussion;