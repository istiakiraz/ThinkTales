import React from "react";
import Lottie from "lottie-react";
import heroImg from "../../jsonFile/hero.json";
import hero1 from "../../assets/camera-93.svg";
import hero2 from "../../assets/brienHero.svg";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { MdOutlineTravelExplore } from "react-icons/md";

const Hero = () => {
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto flex-col-reverse flex mt-20  overflow-x-hidden  mb-10  lg:flex-row justify-center items-center py-16 lg:py-36 ">
      <div className="w-11/12 mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="lg:text-7xl text-4xl mt-8 lg:mt-0 md:text-5xl z-10 text-center lg:text-left lg:leading-20 font-semibold "
        >
          Explore Ideas. Share Stories. Inspire{" "}
          <span className="text-[#495c78] ">Minds.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-4  text-gray-600 text-center lg:text-left "
        >
          Discover insightful blogs, share your thoughts, and connect with a
          community that values every voice. Dive into a world of
          inspiration—one story at a time.
        </motion.p>

       <motion.div
        initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
       className="text-center lg:text-left" >
         <Link to="/all-blogs">
                <button className="btn col-span-full relative ml-2 mt-6 rounded px-5 py-5 overflow-hidden group bg-[#495c78]  hover:bg-gradient-to-r hover:from-[#495c78] hover:to-[#495c78] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#495c78] transition-all ease-out duration-300  ">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex text-[16px] gap-1 items-center"> <MdOutlineTravelExplore size={20} /> Explore</span>
            </button>
              </Link>
       </motion.div>
      </div>
      <div className="lg:-mr-40  relative ">
        <motion.img
          initial={{  rotate:0 }}
          animate={{  rotate:-15}}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="w-56 -top-17 z-0 -left-184 hidden lg:block -rotate-12 absolute opacity-30"
          src={hero1}
          alt="hero img"
        />
        <motion.img
         initial={{  y: -50 }}
          animate={{  y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="lg:w-56 md:w-36 w-32 md:top-85 top-80 lg:top-40  lg:-left-50 absolute opacity-30"
          src={hero2}
          alt=""
        />
        <Lottie animationData={heroImg} />
      </div>
    </div>
  );
};

export default Hero;
