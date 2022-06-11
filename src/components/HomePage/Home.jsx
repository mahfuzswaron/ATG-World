import React from 'react';
import Banner from './Banner';
import Discussion from './DiscussionSection/Discussion';
import SignIn from './SignIn';
import SignUpModal from './SignUpModal';


const Home = () => {
    return (
        <div className='w-96 lg:w-full mx-0'>
            <Banner />
            <Discussion />
            <SignUpModal />
            <SignIn />
        </div>
    );
};

export default Home;