import React, { use } from "react";
import { FaArrowRightLong, FaHashtag } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const BlogCard = ({ blog }) => {

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

    const {user} = use(AuthContext)

    const handleToast= () =>{
      Toast.fire({
            icon: "warning",
            title: "Please sign in to add this to your wishlist.",
          });
    }

    
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-300 shadow-2xl hover:bg-gray-200 transition-colors duration-300  rounded-3xl grid grid-cols-1 items-center   lg:grid-cols-2   lg:pr-4 lg:pl-8"
    >
      <div className="pb-8 z-0 lg:pb-0   ">
        <img
          className=" rounded-t-4xl lg:rounded-none transition-all  hover:object-contain lg:-ml-16 duration-300 w-full lg:min-w-[300px] lg:min-h-70 object-cover  "
          loading="lazy"
          src={blog.photo}
          alt={blog.title}
        />
      </div>
      <div className="py-8 lg:py-6  px-8 lg:px-0  ">
        {
            blog.userPhoto ? <div className="flex items-center space-x-2">
          <h4 className="uppercase text-sm border-b-4 border-dotted w-fit mb-4 pb-1 border-[#4c637c] font-semibold">
            {blog.userName}
          </h4>
          <img
            className="rounded-full size-10 z-10 -mt-4 lg:mt-0 lg:size-12 lg:-mb-20 lg:-ml-43 hover:scale-110 transition-all duration-300 hover:border-1 border-blue-500 "
            src={blog.userPhoto}
            alt={blog.userName}
          />
        </div> : <div className="flex items-center space-x-2">
          <h4 className="uppercase text-sm border-b-4 border-dotted w-fit mb-4 pb-1 border-[#4c637c] font-semibold">
            {blog.userName}
          </h4>
        </div>
        }
        <h1 className="text-xl selection:bg-[#4c637c] selection:text-white   text-gray-600 hyphens-auto font-medium">
          {blog.title}
        </h1>

        <h4 className="text-sm mt-1 font-[300]  text-[#4c637c]">
          <span className="text-gray-500">Publish Date:</span> {blog.date}
        </h4>

        <h3 className=" mt-4  text-gray-500 selection:bg-[#4c637c] selection:text-white  hyphens-auto text-left line-clamp-5 lg:line-clamp-3 ">
          {blog.long_Description}
        </h3>
        <Link to={`/blog-details/${blog._id}`} >
          <button className="group cursor-pointer relative uppercase text-sm mb-2 flex gap-1 items-center  text-[#4c637c] bg-[#4c637c]/5 px-1 mt-3">
            Continue Reading <FaArrowRightLong />
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#4c637c] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </Link>

        <Link>
          <button  onClick={!user ? handleToast : handleWishlist} className="btn mt-2 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#4c637c]  hover:bg-gradient-to-r hover:from-[#4c637c] hover:to-[#4c637c] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4c637c] transition-all ease-out duration-300  ">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative flex gap-1 items-center">
              {" "}
              Add to Wishlist <GoHeart size={16} />
            </span>
          </button>
        </Link>

        <h4 className="text-[12px] ml-45 md:ml-150 lg:ml-50 mt-2 flex  items-center font-[300] text-[#4c637c]">
          {" "}
          <FaHashtag />
         <span className="text-gray-500">Tag:</span>  {blog.category}
        </h4>
      </div>
    </motion.div>
  );
};

export default BlogCard;
