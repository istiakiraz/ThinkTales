import React from "react";
import {
  FaBolt,
  FaMobileAlt,
  FaUserFriends,
  FaLock,
  FaClock,
  FaGift,
} from "react-icons/fa";
import img1 from "../../assets/services.svg";
import img2 from "../../jsonFile/circle.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

const Services = () => {
  const features = [
    {
      icon: <FaBolt className="text-white " />,
      text: "Fast & Clean Reading",
    },
    {
      icon: <FaMobileAlt className="text-white" />,
      text: "Easy-to-read and mobile-friendly",
    },
    {
      icon: <FaUserFriends className="text-white" />,
      text: "Verified and trustworthy content",
    },
    { icon: <FaClock className="text-white" />, text: "Real-Time Alerts " },
    {
      icon: <FaLock className="text-white" />,
      text: " Expert-authored articles",
    },
    {
      icon: <FaClock className="text-white" />,
      text: " Updated Daily",
    },
    {
      icon: <FaGift className="text-white" />,
      text: " Ad-free and distraction-free experience",
    },
  ];

  return (
    <div className=" py-24 overflow-x-hidden ">
      <div className="flex flex-col-reverse w-11/12 mx-auto  justify-between gap-10 md:gap-32 2xl:w-10/12 lg:flex-row items-center ">
        <div className="relative md:-mt-25 lg:mt-0 ">
          <img
            src={img1}
            alt="Mobile Top-Up"
            className="z-10 md:w-[1000px] w-[500px] relative   "
          />
          <div>
             <Lottie className="absolute z-0 -top-7 w-[500px] -right-15 md:w-full md:top-10 md:right-0" animationData={img2} />
          </div>

        </div>

        <div className=" ">
          <h2 className="text-4xl md:text-5xl text-center lg:text-left text-shadow-xs  text-shadow-white font-bold hover:text-[#495c78] text-[#495c78] mb-4">
            What Makes Us Unique?
          </h2>
          <p className=" text-gray-400 text-center lg:text-left mb-6" >Discover trusted insights, expert opinions, and fresh perspectives all in one place. We curate every blog with care to ensure your time is well spent — informative, inspiring, and worth reading. </p>

          <ul className=" *:bg-[#495c78] *:cursor-pointer lg:grid md:*:w-full  2xl:*:w-96  space-x-5 lg:grid-cols-2  *:hover:bg-[#495c78]/60 duration-300 transition-all *:p-2 *:w-full *:rounded-[8px] space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center  gap-3 text-gray-800 text-base"
              >
                <span className="text-xl  ">{feature.icon}</span>
                <span className="text-white ">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;