import React from 'react';
import { useLoaderData } from 'react-router';

const BlogDetails = () => {

    const blog = useLoaderData();
    console.log(blog);

    return (
        <div>
            fdfdfd
        </div>
    );
};

export default BlogDetails;