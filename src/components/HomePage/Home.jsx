import React from 'react';
import Banner from './Banner';
import Discussion from './DiscussionSection/Discussion';
import Modal from './Modal';


const Home = () => {
    return (
        <div>
            <Banner />
            <Discussion />
            <Modal />
        </div>
    );
};

export default Home;