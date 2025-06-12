import React from 'react';
import RecentBlogCard from './RecentBlogCard';

const RecentBlogs = ({blogData}) => {
    console.log(blogData);


    return (
        <div>
           gggggggg 

           <div className='lg:w-10/12 my-8 w-11/12 grid grid-cols-1 mx-auto lg:grid-cols-2 gap-20 ' >
            {
                blogData?.map(blog=> <RecentBlogCard key={blog._id} blog={blog} ></RecentBlogCard>)
            }
           </div>
        </div>
    );
};

export default RecentBlogs;