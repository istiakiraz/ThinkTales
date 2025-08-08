import React from "react";
import RecentBlogCard from "./RecentBlogCard";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const RecentBlogs = ({ blogData }) => {
  
  return (
    <div>
      <div  className="2xl:w-10/12  w-11/12 mx-auto">
        <h1 className="text-left w-fit  bg-[#4c637c]/40 px-4   mt-2 text-3xl text-[#4c637c] lg:text-4xl font-bold py-4">
           <Typewriter
                              words={[" Recent Blogs"]}
                              loop={100}
                              cursor
                              cursorStyle="|"
                              typeSpeed={100}
                              deleteSpeed={100}
                              delaySpeed={1000}
                            />
        </h1>
        <p className="text-left  mb-20 text-gray-400">
          {" "}
          Stay updated with our latest blog posts covering fresh ideas and
          trending topics.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="2xl:w-10/12 my-8 w-11/12 grid grid-cols-1 mx-auto lg:grid-cols-2 gap-20 "
      >
        {blogData?.map((blog) => (
          <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>
        ))}
      </motion.div>
    </div>
  );
};

export default RecentBlogs;
