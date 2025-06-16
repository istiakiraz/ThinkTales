import React from 'react';
import { useLoaderData } from 'react-router';
import RecentBlogs from '../components/homepageComponents/RecentBlogs';
import Newsletter from '../components/homepageComponents/Newsletter';
import Hero from '../components/homepageComponents/Hero';

const HomePages = () => {

    const blogData = useLoaderData();
    console.log(blogData);

    return (
        <div>
            <Hero></Hero>
            <RecentBlogs blogData={blogData} ></RecentBlogs>
            <Newsletter></Newsletter>
            
        </div>
    );
};

export default HomePages;