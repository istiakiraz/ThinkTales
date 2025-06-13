import React from "react";
import RecentBlogCard from "./RecentBlogCard";
import { motion } from "framer-motion";

const RecentBlogs = ({ blogData }) => {
 

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      recent blogs
      <div className="lg:w-10/12 my-8 w-11/12 grid grid-cols-1 mx-auto lg:grid-cols-2 gap-20 ">
        {blogData?.map((blog) => (
          <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentBlogs;
