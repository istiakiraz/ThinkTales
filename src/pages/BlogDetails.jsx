import React, { useEffect, useState } from "react";
import { FaFacebook, FaSquareInstagram, FaTwitter } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import { recentBlogsPromise } from "../api/recentBlogsApi";

const BlogDetails = () => {
  const [recent, setRecent] = useState([]);
  const blog = useLoaderData();

  const shareUrl = `http://localhost:5173/blog-details/${blog._id}`;
  const shareText = encodeURIComponent(blog.title);

  const dateStr = blog.date;
  const date = new Date(dateStr);

  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.toLocaleString("en-GB", { month: "long" });

  useEffect(() => {
    recentBlogsPromise().then(setRecent);
  }, []);

  console.log(recent);

  return (
    <div className="w-11/12 py-16 lg:w-9/12 mx-auto">
      <h1 className="text-5xl lg:text-7xl mb-8 md:text-6xl selection:bg-[#4c637c] selection:text-white  ">
        {blog.title}
      </h1>
      <img className="mb-8 min-w-full " src={blog.photo} alt={blog.title} />
      <h3 className="mb-8 text-2xl md:text-3xl lg:text-5xl bg-gray-200  py-2 lg:leading-15 px-4 ">
        {blog.short_Description}
      </h3>
      <div className="mb-10 flex flex-wrap items-center border-b-2 pb-8 border-gray-300 gap-3">
        <div className="flex items-center gap-2">
          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="p-2 bg-gray-600 text-white size-9 rounded-full" />
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="p-2 bg-gray-600 text-white size-9 rounded-full" />
          </a>

          <a
            href={`https://www.instagram.com/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareInstagram className="p-2 bg-gray-600 text-white size-9 rounded-full" />
          </a>
        </div>

        <h4 className="uppercase tracking-wide font-bold text-sm text-gray-600 mb-2">
          <span className="italic font-normal">By</span> {blog.userName}
        </h4>
        <h4 className="uppercase tracking-wide font-bold text-sm text-gray-600 mb-2">
          <span className="italic font-normal">On</span> {month} {day} , {year}
        </h4>
        <h4 className="uppercase tracking-wide font-bold text-sm text-blue-600 mb-2">
          <span className="italic text-gray-600 font-normal">In</span>{" "}
          {blog.category}
        </h4>
      </div>
      <div className="lg:grid lg:grid-cols-8 lg:gap-8  ">
        <h1 className="text-xl mb-8 col-span-6 selection:bg-[#4c637c] selection:text-white leading-9 text-left hyphens-auto  lg:first-letter:text-8xl first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:pr-2 first-letter:leading-none ">
        {blog.long_Description}
      </h1>
      <div className="col-span-2">
        <span className="text-xl font-semibold text-gray-700 border-b pb-2 uppercase mb-4 ">Recent Blogs</span>
       <div className="mt-8">
         {
            recent.map(rec=> <Link to={`/blog-details/${rec._id}`}><div key={rec._id} className="flex mb-4 items-start gap-2" > <img className="w-22 h-22 object-cover" src={rec.photo} alt={rec.title} />  <h3>{rec.title}</h3> </div></Link>)
        }
       </div>
      </div>
      </div>
    </div>
  );
};

export default BlogDetails;
