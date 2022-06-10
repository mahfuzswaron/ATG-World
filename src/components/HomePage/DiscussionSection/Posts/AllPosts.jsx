import React from 'react';
import EducationOrArticle from './EducationOrArticle';
import EventOrJob from './EventOrJob';

const article = {
    category: 'Article',
    title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
    post: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
    img: '../../../../../assets/images/Rectangle 5image-2.jpg',
    icon: '✍️',
    poster: {
        name: 'Random user',
        photo: '../../../../../assets/avatars/Rectangle 3-1.png'
    }
};
const education = {
    category: 'Education',
    title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
    post: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
    img: '../../../../../assets/images/Rectangle 5image.jpg',
    icon: '🔬',
    poster: {
        name: 'Random user',
        photo: '../../../../../assets/avatars/Rectangle 3-2.png'
    }
};
const Meetup = {
    category: 'Meetup',
    title: 'Finance & Investment Elite Social Mixer @Lujiazui',
    location: 'Ahmedabad, India',
    date: 'Fri, 12 Oct, 2018',
    img: '../../../../../assets/images/Rectangle 5image.jpg',
    icon: '🗓',
    poster: {
        name: 'Random user',
        photo: '../../../../../assets/avatars/Rectangle 3.png'
    }
};
const job = {
    category: 'Job',
    title: 'Software Developer',
    location: 'Noida, India',
    company: 'Innovaccer Analytics Private Ltd.',
    img: '../../../../../assets/images/Rectangle 5image.jpg',
    icon: '💼',
    poster: {
        name: 'Random user',
        photo: '../../../../../assets/avatars/Rectangle 3-3.png'
    }
}
const AllPosts = () => {
    return (
        <div className='w-3/4 bg-white grid grid-cols-1 gap-2 '>
            {
                <>
                    <EducationOrArticle
                        postDetails={article}
                    ></EducationOrArticle>
                    <EducationOrArticle
                        postDetails={education}
                    ></EducationOrArticle>
                    <EventOrJob
                        postDetails={Meetup}
                    ></EventOrJob>
                    <EventOrJob
                        postDetails={job}
                    ></EventOrJob>
                </>
            }

        </div >
    );
};

export default AllPosts;