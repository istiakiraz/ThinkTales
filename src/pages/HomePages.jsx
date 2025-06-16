import React from 'react';
import { useLoaderData } from 'react-router';
import RecentBlogs from '../components/homepageComponents/RecentBlogs';
import Newsletter from '../components/homepageComponents/Newsletter';
import Hero from '../components/homepageComponents/Hero';
import Slider from '../components/Slider';

const HomePages = () => {

    const blogData = useLoaderData();
    console.log(blogData);

    return (
        <div>
            <Hero></Hero>
            <RecentBlogs blogData={blogData} ></RecentBlogs>
            <Slider></Slider>
            <Newsletter></Newsletter>
            
        </div>
    );
};

export default HomePages;