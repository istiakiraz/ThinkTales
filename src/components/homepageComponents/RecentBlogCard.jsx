import axios from "axios";
import React, { use } from "react";
import { FaArrowRightLong, FaHashtag } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";

import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const RecentBlogCard = ({ blog }) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const { user } = use(AuthContext);

  const dateStr = blog.date;
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "long" });


  // wishlist
  const handleWishlist = () => {
    const wishlistData = {
      blog_Id: blog._id,
      blog_title: blog.title,
      blog_category: blog.category,
      blog_photo: blog.photo,
      userEmail: user.email,
      blog_long: blog.long_Description,
    };

    axios
      .post("http://localhost:3000/wishlist", wishlistData)
      .then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          Toast.fire({
            icon: "success",
            title: "Blog successfully added to wishlist!",
          });
        }
      })
      .catch((error) => {
        Toast.fire({
          icon: "warning",
          title: error.response.data.message,
        });
      });
  };

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
            <h4 className="text-sm mt-3 font-semibold flex  items-center text-[#4c637c]">
              <FaHashtag />
              Tag: {blog.category}
            </h4>
          </div>
          <div>
            <Link>
              <button
                onClick={handleWishlist}
                className="btn mt-8 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#4c637c]  hover:bg-gradient-to-r hover:from-[#4c637c] hover:to-[#4c637c] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4c637c] transition-all ease-out duration-300  "
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative flex gap-1 items-center">
                  {" "}
                  Add to Wishlist <GoHeart size={16} />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-8 ">
        <h1 className="text-xl selection:bg-[#4c637c] selection:text-white -mt-10 lg:mt-0 text-gray-600 hyphens-auto font-bold">
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
        <h3 className=" mt-4 selection:bg-[#4c637c] selection:text-white pt-4 border-gray-400 hyphens-auto text-justify line-clamp-8 border-t-2">
          {blog.long_Description}
        </h3>
        <Link to={`/blog-details/${blog._id}`}>
          <button className="group cursor-pointer  relative uppercase flex gap-1 items-center  text-[#4c637c] bg-[#4c637c]/5 px-1 mt-5">
            Continue Reading <FaArrowRightLong />
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#4c637c] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecentBlogCard;
