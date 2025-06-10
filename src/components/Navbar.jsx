import React, { useState } from "react";
import logo from "../assets/titleLogo.png";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router";
import { IoHomeOutline, IoOpenOutline } from "react-icons/io5";
import {
  RiFunctionAddLine,
  RiLayoutHorizontalLine,
  RiPagesLine,
} from "react-icons/ri";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { PiBookBookmarkLight } from "react-icons/pi";
import { VscSignIn } from "react-icons/vsc";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#4c637c]/20 px-3 border border-[#4c637c] rounded-2xl  "
            : " hover:underline"
        }
        to="/"
      >
        <li className="flex gap-1 items-center">
          {" "}
          <IoHomeOutline /> Home
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#4c637c]/20 px-3 border border-[#4c637c] rounded-2xl  "
            : " hover:underline"
        }
        to="/fff"
      >
        <li className="flex gap-1 items-center">
          {" "}
          <RiLayoutHorizontalLine /> All-Blogs
        </li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#4c637c]/20 px-3 border border-[#4c637c] rounded-2xl  "
            : " hover:underline"
        }
        to="/add-blog"
      >
        <li className="flex gap-1 items-center">
          {" "}
          <RiFunctionAddLine /> Add-Blog
        </li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#4c637c]/20 px-3 border border-[#4c637c] rounded-2xl  "
            : " hover:underline"
        }
        to="/hh"
      >
        <li className="flex gap-1 items-center">
          {" "}
          <MdOutlineFeaturedPlayList /> Featured-Blogs
        </li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#E1EEBC]/20 px-3 border border-[#E1EEBC] rounded-2xl    "
            : " hover:underline"
        }
        to="/all-tasks"
      >
        <li className="flex gap-1 items-center">
          {" "}
          <PiBookBookmarkLight /> Wishlist
        </li>
      </NavLink>
    </>
  );

  return (
    <div className=" bg-base-100/20 shadow-[0px_8px_30px_0px_rgba(76,99,124,0.12)]  ">
      <div className="navbar md:w-11/12 lg:w-9/12 mx-auto ">
        <div className="navbar-start">
          <img className="w-42" src={logo} alt="ThinkTales" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-8 text-xl menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <span className="flex items-center  gap-4">
            <span
              className=" lg:hidden mr-1 cursor-pointer  p-1 rounded-l"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <RxCross2 size={27} color="gray" />
              ) : (
                <RxHamburgerMenu size={27} color="gray" />
              )}
            </span>

            <ul
              className={`lg:hidden absolute   flex flex-col shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)]   *:border-gray-100 *:border-b-1 *:py-1 *:my-1 *:pr-20 duration-1000   bg-[#4c637c]/30 p-4  ${
                show ? "right-2 top-18" : "-right-60 top-18"
              }`}
            >
              {links}
             <li>

            <Link to="/sign-up">
              <button className="px-5 py-2.5  relative rounded group font-medium text-white">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#4c637c] to-[#bbd4ee]"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#4c637c] to-[#bbd4ee]"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#4c637c] to-[#bbd4ee]"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#4c637c] from-[#bbd4ee]"></span>
                <span className="relative flex items-center gap-1 "> <IoOpenOutline size={20} /> Sign Up</span>
              </button>
            </Link></li>
              
            </ul>
          </span>
          <div className="space-x-2 flex">
            <Link to="/sign-in">
              <button className="relative px-5 py-2.5 overflow-hidden font-medium text-[#4c637c] bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#4c637c] group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#4c637c] group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#4c637c] group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#4c637c] group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300  bg-gradient-to-br from-[#4c637c] opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 flex gap-1 items-center group-hover:text-white ease">
                 <VscSignIn size={20} /> Sign In
                </span>
              </button>
            </Link>

            <Link to="/sign-up">
              <button className="px-5 py-2.5  relative rounded group font-medium text-white hidden lg:block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#4c637c] to-[#bbd4ee]"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#4c637c] to-[#bbd4ee]"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#4c637c] to-[#bbd4ee]"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#4c637c] from-[#bbd4ee]"></span>
                <span className="relative flex items-center gap-1 "> <IoOpenOutline size={20} /> Sign Up</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
