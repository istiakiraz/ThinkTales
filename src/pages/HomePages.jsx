import React from 'react';
import { useLoaderData } from 'react-router';
import RecentBlogs from '../components/homepageComponents/RecentBlogs';
import Newsletter from '../components/homepageComponents/Newsletter';

const HomePages = () => {

    const blogData = useLoaderData();
    // console.log(blogData);

    return (
        <div>
            home 
            <RecentBlogs blogData={blogData} ></RecentBlogs>
            <Newsletter></Newsletter>
            
        </div>
    );
};

export default HomePages;