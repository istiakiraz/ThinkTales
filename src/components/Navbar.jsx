import React, { useState } from "react";
import logo from "../assets/titleLogo.png";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className=" bg-base-100/20 shadow-[0px_8px_30px_0px_rgba(76,99,124,0.12)]  ">
      <div className="navbar lg:w-9/12 mx-auto ">
        <div className="navbar-start">
          <img className="w-42" src={logo} alt="ThinkTales" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 4</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <span className="flex items-center  gap-4">
            <span
              className=" md:hidden mr-1 cursor-pointer  p-1 rounded-l"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <RxCross2 size={27} color="gray" />
              ) : (
                <RxHamburgerMenu size={27} color="gray" />
              )}
            </span>

            <ul
              className={`md:hidden absolute rounded-xl  pr-20 duration-1000  bg-[#4c637c]/40 p-4  ${
                show ? "right-2 top-18" : "-right-60 top-18"
              }`}
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </span>

          {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div> */}
          <a
           
            className="px-5 py-2.5 relative rounded group font-medium text-white inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#4c637c] to-[#bbd4ee]"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#4c637c] to-[#bbd4ee]"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#4c637c] to-[#bbd4ee]"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#4c637c] from-[#bbd4ee]"></span>
            <span className="relative">Sign In</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
