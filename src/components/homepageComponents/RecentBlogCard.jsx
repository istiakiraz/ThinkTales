import React from "react";
import { FaArrowRightLong, FaHashtag } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";

import { Link } from "react-router";

const RecentBlogCard = ({ blog }) => {
  const dateStr = blog.date;
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "long" });

  return (
    <div className="bg-gray-200  flex flex-col lg:flex-row lg:space-x-5 pr-8 lg:pr-4 pl-8">
      <div className="pb-8  ">
        <img
          className="shadow-[7px_8px_33px_20px_rgba(0,0,0,0.28)] hover:mt-0 transition-all duration-300 -mt-8 w-full lg:min-w-[450px] lg:h-80 object-cover  "
          loading="lazy"
          src={blog.photo}
          alt={blog.title}
        />
        <div className="flex justify-between">
          <div className="text-gray-500">
            <h4 className="lg:text-8xl text-4xl font-bold">{day}</h4>
            <h2 className="lg:text-4xl text-2xl font-semibold ">{month}</h2>
            <h4 className="text-sm mt-3 font-semibold flex gap-1 items-center text-[#4c637c]">
              <FaHashtag />
              Tag: {blog.category}
            </h4>
          </div>
          <div>
           <Link> <button className="btn mt-8 flex gap-1 items-center text-white bg-gradient-to-r from-[#4c637c] to-[#6b7e94] hover:from-[#3d5267] hover:to-[#5a6c80] transition-all duration-300">
              Add to Wishlist <GoHeart size={16} />
            </button></Link>
          </div>
        </div>
      </div>
      <div className="py-8 ">
        <h1 className="text-xl -mt-10 lg:mt-0 text-gray-600 hyphens-auto font-bold">
          {blog.title}
        </h1>
        <div className="flex bg-gray-400 pl-1 border-b-2 mt-2 pr-2 py-1 w-fit gap-2 items-center  rounded-4xl">
          <img
            className="rounded-full size-5 hover:scale-200 transition-all duration-300 hover:border-1 border-blue-500 "
            src={blog.userPhoto}
            alt={blog.userName}
          />
          <h4 className=" text-sm  font-bold uppercase text-white">
            {blog.userName}
          </h4>
        </div>
        <h3 className=" mt-4 pt-4 border-gray-400 hyphens-auto text-justify line-clamp-8 border-t-2">
          {blog.long_Description}
        </h3>
        <Link>
          <button className="group relative uppercase flex gap-1 items-center  text-[#4c637c] bg-[#4c637c]/5 px-1 mt-5">
            Continue Reading <FaArrowRightLong />
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#4c637c] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecentBlogCard;
