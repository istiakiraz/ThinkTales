import React from 'react';
import { useLoaderData } from 'react-router';
import RecentBlogs from '../components/homepageComponents/RecentBlogs';

const HomePages = () => {

    const blogData = useLoaderData();
    // console.log(blogData);

    return (
        <div>
            home 
            <RecentBlogs blogData={blogData} ></RecentBlogs>
            
        </div>
    );
};

export default HomePages;