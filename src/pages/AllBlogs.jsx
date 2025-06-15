import React, { useEffect, useState } from "react";
import { blogsPromise } from "../api/allblogsapi";
import BlogCard from "../components/BlogCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import searchImg from '../assets/search-engine-46.svg'
import { motion } from "framer-motion";
import Newsletter from "../components/homepageComponents/Newsletter";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const query = [];
    if (searchTerm) query.push(`search=${searchTerm}`);
    if (category) query.push(`category=${encodeURIComponent(category)}`);
    const queryString = query.join("&");

    blogsPromise(queryString).then((data) => {
      setBlogs(data);
      setLoading(false); 
    });
  }, [searchTerm, category]);

 
  const skeletonArray = Array(4).fill(null);

  return (
   <>
    <div className="w-11/12  mx-auto">
      <h1 className="text-center mt-12 text-3xl text-[#4c637c] lg:text-5xl font-bold py-4">
        All Blogs – Discover Stories That Matter
      </h1>
      <p className="text-center text-gray-400" >From ideas to inspiration — browse all our blog posts in one place. Stay updated, informed, and inspired with every scroll.</p>

      {/* filter Section */}
      <div className="lg:w-6/12  relative flex-col mt-20 shadow-[0px_25px_20px_-20px_rgba(0,0,0,0.45)] bg-[#4c637c]/70 border-b-8 border-r-8   border-gray-300 p-8 lg:p-16 rounded-2xl lg:flex-row  mx-auto  pb-6  flex gap-4">
     <motion.img
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
      className="w-36 lg:w-48 lg:right-70 -right-2 md:right-12 -top-20 lg:-top-24 absolute" src={searchImg} alt="search" />
        <input
          type="text"
          placeholder="Search by blog title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border bg-white  border-gray-300 rounded p-2"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300  bg-gray-300 w-52 text-sm rounded p-2"
        >
          <option value="">Pick a blog category</option>
          <option>Lifestyle</option>
          <option>Technology</option>
          <option>Health & Wellness</option>
          <option>Film & TV</option>
          <option>Art & Design</option>
          <option>Music & Culture</option>
          <option>Photography</option>
          <option>Finance & Investing</option>
          <option>Fashion & Style</option>
          <option>Education</option>
          <option>Food & Recipes</option>
          <option>Travel</option>
          <option>Gaming & Esports</option>
          <option>Books & Literature</option>
          <option>Parenting & Family</option>
          <option>Personal Growth</option>
        </select>
      </div>

      {/* blog List  */}
      <div className="grid grid-cols-1 mt-20 lg:grid-cols-2 gap-16 pb-16">
        {loading
          ? skeletonArray.map((_, index) => (
              <div
                key={index}
                className="bg-gray-300 shadow-2xl rounded-3xl p-6 space-y-4"
              >
                <Skeleton height={200} className="rounded-xl" />
                <Skeleton width={`50%`} height={20} />
                <Skeleton count={3} />
                <div className="flex justify-between mt-4">
                  <Skeleton width={120} height={35} />
                  <Skeleton circle width={40} height={40} />
                </div>
              </div>
            ))
          : blogs.length > 0
          ? blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          : (
            <p className="col-span-full text-center text-gray-500">
              No blogs found.
            </p>
          )}
      </div>
     
    </div>

     <Newsletter></Newsletter>
   </>
  );
};

export default AllBlogs;

