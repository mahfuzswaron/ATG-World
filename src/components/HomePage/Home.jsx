import React from 'react';
import Banner from './Banner';
import Discussion from './DiscussionSection/Discussion';
import SignIn from './SignIn';
import SignUpModal from './SignUpModal';


const Home = () => {
    return (
        <div>
            <Banner />
            <Discussion />
            <SignUpModal />
            <SignIn />
        </div>
    );
};

export default Home;