import React, { use, useState } from "react";
import logo from "../assets/titleLogo.png";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router";
import { IoHomeOutline, IoOpenOutline } from "react-icons/io5";
import { RiFunctionAddLine, RiLayoutHorizontalLine } from "react-icons/ri";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { PiBookBookmarkLight } from "react-icons/pi";
import { VscSignIn } from "react-icons/vsc";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
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

  const [show, setShow] = useState(false);
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Toast.fire({
          icon: "success",
          title: `Sign-Out successfully!`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#4c637c]/20 px-3 border border-[#4c637c] rounded-2xl  "
            : " group relative px-3"
        }
        to="/"
      >
        <li className="flex gap-1 items-center relative overflow-hidden">
          {" "}
          <IoHomeOutline /> 
           <span className="relative z-10">Home</span>
           <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#4c637c] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#4c637c]/20 px-3 border border-[#4c637c] rounded-2xl"
            : "group relative px-3"
        }
        to="/all-blogs"
      >
        <li className="flex gap-1 items-center relative overflow-hidden">
          <RiLayoutHorizontalLine />
          <span className="relative z-10">All-Blogs</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#4c637c] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#4c637c]/20 px-3 border border-[#4c637c] rounded-2xl  "
            : "group relative px-3"
        }
        to="/add-blog"
      >
        <li className="flex gap-1 items-center relative overflow-hidden">
          {" "}
          <RiFunctionAddLine />   <span className="relative z-10">Add-Blog</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#4c637c] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#4c637c]/20 px-3 border border-[#4c637c] rounded-2xl  "
            : "group relative px-3"
        }
        to="/featured-blogs"
      >
        <li className="flex gap-1 items-center relative overflow-hidden">
          {" "}
         <MdOutlineFeaturedPlayList />   <span className="relative z-10">  Featured-Blogs</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#4c637c] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#4c637c]/20 px-3 border border-[#4c637c] rounded-2xl  "
            : "group relative px-3"
        }
        to="/wishlist"
      >
        <li className="flex gap-1 items-center relative overflow-hidden">
          {" "}
         <PiBookBookmarkLight />    <span className="relative z-10"> Wishlist</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#4c637c] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className=" bg-base-100  rounded-b-4xl py-2 shadow-[0px_8px_30px_0px_rgba(76,99,124,0.12)]  ">
      <div className="navbar md:w-11/12 lg:w-9/12 mx-auto ">
        <div className="navbar-start">
          <Link to='/'><img className="w-42" src={logo} alt="ThinkTales" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-8 text-xl menu-horizontal *:text-[#4c637c] px-1">
            {links}
          </ul>
        </div>
        {/*  */}

        <div className="navbar-end     ">
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
              className={`lg:hidden absolute    flex flex-col shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)]   *:border-gray-100 *:border-b-1 *:py-1 *:my-1 *:pr-20 duration-1000  z-50 bg-gray-400 p-4  ${
                show ? "right-2  opacity-100 visible top-21" : " right-2 invisible top-21 opacity-0 "
              }`}
              
            >
              {links}
              {!user && (
                <>
                  {" "}
                  <li>
                    <Link to="/sign-up">
                      <button className="px-5 py-2.5  relative rounded group font-medium text-white">
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#4c637c] to-[#bbd4ee]"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#4c637c] to-[#bbd4ee]"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#4c637c] to-[#bbd4ee]"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#4c637c] from-[#bbd4ee]"></span>
                        <span className="relative flex items-center gap-1 ">
                          {" "}
                          <IoOpenOutline size={20} /> Sign Up
                        </span>
                      </button>
                    </Link>
                  </li>
                </>
              )}
              {user && (
                <>
                  {" "}
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="px-5 py-2.5  relative rounded group font-medium text-white"
                    >
                      <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#4c637c] to-[#bbd4ee]"></span>
                      <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#4c637c] to-[#bbd4ee]"></span>
                      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#4c637c] to-[#bbd4ee]"></span>
                      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#4c637c] from-[#bbd4ee]"></span>
                      <span className="relative flex items-center gap-1 ">
                        {" "}
                        <IoIosLogOut size={20} /> Sign Out
                      </span>
                    </button>
                  </li>
                </>
              )}
            </ul>
          </span>
          <div className="space-x-2 flex">
            {!user ? (
              <>
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
              </>
            ) : (
              <>
                <button
                  onClick={handleSignOut}
                  className="relative px-5 py-2.5 overflow-hidden hidden lg:block font-medium text-[#4c637c] bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                >
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#4c637c] group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#4c637c] group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#4c637c] group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#4c637c] group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300  bg-gradient-to-br from-[#4c637c] opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-300 delay-200 flex gap-1 items-center group-hover:text-white ease">
                    <IoIosLogOut size={20} /> Sign Out
                  </span>
                </button>
              </>
            )}

            {!user ? (
              <>
                {" "}
                <Link to="/sign-up">
                  <button className="px-5 py-2.5  relative rounded group font-medium text-white hidden lg:block">
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#4c637c] to-[#bbd4ee]"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#4c637c] to-[#bbd4ee]"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#4c637c] to-[#bbd4ee]"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#4c637c] from-[#bbd4ee]"></span>
                    <span className="relative flex items-center gap-1 ">
                      {" "}
                      <IoOpenOutline size={20} /> Sign Up
                    </span>
                  </button>
                </Link>
              </>
            ) : (
              <>
                <div className="dropdown dropdown-end">
                  <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}
                    data-tooltip-place="top"
                  >
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn bg-purple-100 size-12 btn-ghost btn-circle avatar"
                    >
                      <div className=" rounded-full">
                        <img
                          alt="User Img"
                          src={`${user?.photoURL ? user?.photoURL : ""}`}
                        />
                      </div>
                    </div>
                  </a>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <>
                      <li>
                        <span className=" text-[12px] mb-[2px] font-bold text-left bg-[#4c637c]/50 p-2 ">
                          {user && `Name: ${user?.displayName}`}
                        </span>
                      </li>

                      <li>
                        <span className=" text-[12px] mb-[2px] font-bold text-left bg-[#4c637c]/50 p-2 ">
                          {user && `Email: ${user?.email}`}
                        </span>
                      </li>
                    </>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Navbar;
