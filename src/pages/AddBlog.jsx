import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router";
import { GoArrowLeft } from "react-icons/go";
import logo from "../assets/titleLogo.png";
import write from "../assets/coding-3-24.svg";
import pic from "../assets/add1.svg";
import pic2 from "../assets/add2.svg";
import pic3 from "../assets/add3.svg";
import { motion } from "framer-motion";
import { MdDescription, MdOutlineSubtitles } from "react-icons/md";
import { TbCategory2, TbFileDescription, TbPhotoPlus } from "react-icons/tb";
import { GiClick } from "react-icons/gi";
import axios from "axios";
import Swal from "sweetalert2";

const AddBlog = () => {
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

  const navigate = useNavigate()

  const { user } = use(AuthContext);



  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const newBlog = Object.fromEntries(formData.entries());

    const today = new Date();
    const dateOnly = today.toISOString().split("T")[0];

    newBlog.userPhoto = user?.photoURL;
    newBlog.userName = user?.displayName;
    newBlog.userEmail = user?.email;
    newBlog.date = dateOnly;

    console.log(newBlog);

    // send blog data on the DB

    axios
    .post('http://localhost:3000/blogs', newBlog)
    .then((res)=>{
        console.log('after add blog data ',res.data);
        if(res.data.insertedId){   
          navigate('/all-blogs')        
        Toast.fire({
            icon: "success",
            title: "Blog successfully posted!",
          });
                  
        }

    })
    .catch((error)=>{
        console.log(error);
    })

  };

  return (
    <div className="lg:w-9/12 pt-32 w-11/12 py-16 mx-auto">
      <Link to="/">
        <button className="btn mb-5 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#4c637c]  hover:bg-gradient-to-r hover:from-[#4c637c] hover:to-[#4c637c] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4c637c] transition-all ease-out duration-300  ">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative flex gap-1 items-center">
            {" "}
            <GoArrowLeft size={20} />
            Back to Home
          </span>
        </button>
      </Link>

      <h1 className="text-center mt-2 text-3xl text-[#4c637c] lg:text-5xl font-bold py-4">
        Add a New Blog
      </h1>
      <p className="text-center mb-8 text-gray-400" > Share your thoughts and ideas with the world. Fill in the blog details below and click the post button to publish your story.</p>


      <div className="bg-[#4c637c]/20 rounded-xl">
        <div className="lg:w-8/12 relative  lg:px-12 w-11/12 py-12 mx-auto">
          <h1 className="text-center shadow-[0px_0px_20px_0px_rgba(76,99,124,0.8)] text-gray-600 lg:px-12 text-3xl mb-8 w-fit mx-auto flex flex-col items-center  bg-[#4c637c]/20 p-4 rounded-2xl ">
            {" "}
            <motion.img
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="w-56 -mb-8"
              src={write}
              alt=""
            />
            Write Your Unwritten Thoughts on <br />{" "}
            <img className="w-64" src={logo} alt="ThinkTales" />
          </h1>
          <p className="hyphens-auto text-justify font-medium mb-8">
            Every idea starts as a whisper in your mind — a fleeting thought, a
            quiet observation, a moment of emotion. Here at ThinkTales™, we
            invite you to give those thoughts a voice. This is your space to
            reflect, express, and explore.
          </p>

    <img className="w-64 top-50 hidden lg:block opacity-60 -left-40 -rotate-20 absolute" src={pic} alt="pic" />
    <img className="w-64  bottom-20 hidden lg:block opacity-60 -right-40 -rotate-20 absolute" src={pic} alt="pic" />
    <img className="w-64  -top-10 hidden lg:block opacity-50 -right-20 rotate-10 absolute" src={pic2} alt="pic" />
    <img className="w-64  top-135 hidden lg:block opacity-50 right-80  absolute" src={pic3} alt="pic" />


          <form onSubmit={handleSubmit} className="">
            <div>
              <fieldset className="fieldset rounded-box   p-4">
                {/* title input */}
                <label className="label font-bold">
                  {" "}
                  <MdOutlineSubtitles size={20} /> Blog Title
                </label>
                <input
                  required
                  name="title"
                  type="text"
                  className="input bg-gray-200 placeholder:text-gray-600  mb-2 w-full"
                  placeholder="Enter your blog title..."
                />

                {/* dopdown category */}
                <label className="label font-bold">
                  {" "}
                  <TbCategory2 size={20} />
                  Category
                </label>
                <select
                  name="category"
                  required
                  defaultValue=""
                  className="input mb-2 bg-gray-100 placeholder:text-gray-600  lg:w-52 w-full"
                >
                  <option disabled value="">
                    Pick a blog category
                  </option>
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

                {/* blog photo url input */}
                <label className=" font-bold label">
                  {" "}
                  <TbPhotoPlus size={20} /> Featured Photo URL
                </label>
                <input
                  required
                  type="text"
                  name="photo"
                  className="input bg-gray-200 placeholder:text-gray-600 mb-2 w-full lg:w-52"
                  placeholder="Add a featured image URL..."
                />

                {/*Short Description input */}
                <label className=" font-bold   label">
                  {" "}
                  <TbFileDescription size={20} /> Short Description
                </label>
                <textarea
                  required
                  name="short_Description"
                  className="textarea textarea-bordered bg-gray-200 placeholder:text-gray-600 mb-2 h-18 text-start  w-full"
                  placeholder="Describe your blog in a few words... "
                />

                {/*Long Description input */}
                <label className=" font-bold   label">
                  {" "}
                  <MdDescription size={20} /> Long Description
                </label>
                <textarea
                  required
                  name="long_Description"
                  className="textarea textarea-bordered bg-gray-200 placeholder:text-gray-600 mb-2 h-28 text-start  w-full"
                  placeholder="Write your complete blog post here... "
                />
              </fieldset>
            </div>

            <button
              type="submit"
              className="btn col-span-full flex w-full lg:w-[845px] relative rounded px-5 py-2.5 overflow-hidden group bg-[#4c637c]  hover:bg-gradient-to-r hover:from-[#4c637c] hover:to-[#4c637c] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4c637c] transition-all ease-out duration-300  "
            >
              <span className="absolute right-0 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-50 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex items-center gap-1"> <GiClick size={20} />
 Post</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
