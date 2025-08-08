import React, { use, useEffect } from "react";
import postBox from "../../assets/postBox.svg";
import message from "../../assets/message.svg";
import Swal from "sweetalert2";
import { motion, useAnimation } from "framer-motion";
import { AuthContext } from "../../provider/AuthProvider";
import { useInView } from 'react-intersection-observer';

const Newsletter = () => {
  const { user } = use(AuthContext);

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

  // view intersection-observer

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.5, 
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 50 }); 
    }
  }, [inView, controls]);

  const handleClick = (e) => {
    e.preventDefault();

    Toast.fire({
      icon: "success",
      title: "Thank you for subscribing! ",
    });

    e.target.closest("form").reset();
  };

  return (
    <div className="w-11/12 mx-auto my-16 md:w-11/12 lg:w-9/12">
      <div className="grid md:grid-cols-3 items-center bg-[#0c2648] rounded-2xl px-6 md:px-0 md:pl-8 lg:pl-16 w-full ">
        <div className="md:col-span-2 flex flex-col md:py-0 py-8 space-y-5 ">
          <p className="bg-[#134078] w-fit text-[#6794c0] text-sm px-4 py-1 rounded ">
            Our Newsletter
          </p>
          <h1 className="lg:text-4xl text-2xl font-bold lg:w-8/12 text-white">
            Subscribe to our newsletter to receive more updates
          </h1>
          <form className="relative">
            <input
              className="bg-white md:w-96 shadow-[-7px_43px_60px_-19px_rgba(0,0,255,0.41)] h-12 lg:h-14 pl-4 w-full rounded lg:w-[600px] "
              required
              name="email"
              defaultValue={user?.email}
              placeholder="Write your email..."
              type="text"
            />

            <button
              onClick={handleClick}
              className="btn absolute lg:top-2  top-1 md:left-68 left-57 lg:left-118  col-span-full  rounded px-5 py-2.5 overflow-hidden group bg-[#495c78]  hover:bg-gradient-to-r hover:from-[#495c78] hover:to-[#495c78] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#495c78] transition-all ease-out duration-300  "
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex gap-1 items-center">
                {" "}
                subscribe
              </span>
            </button>
          </form>
        </div>
        <div className="md:col-span-1 shadow-[-41px_0px_60px_-19px_rgba(0,0,255,0.41)] relative rounded-2xl md:mb-0 mb-4 md:rounded-r-2xl md:rounded-l-[180px]  bg-[#8da9c4] ">
          <img className="lg:w-96 w-64 mx-auto " src={postBox} alt="post box" />
          <motion.img
            ref={ref}
            // initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.7 }}
            className="2xl:w-72 md:w-36 w-44 top-28 lg:top-15 hover:scale-110 duration-300 md:top-25 md:right-39  lg:right-85 absolute"
            src={message}
            alt="message card"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
