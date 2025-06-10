import React, { use, useRef, useState } from "react";
import logImg from "../../public/login.json";
import logo from "../assets/titleLogo.png";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

// import Swal from "sweetalert2";
// import { AuthContext } from "../provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import { GoArrowLeft } from "react-icons/go";
import { VscSignIn } from "react-icons/vsc";

const SignIn = () => {
  //   const { isDark } = use(AuthContext);

  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: "top-end",
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.onmouseenter = Swal.stopTimer;
  //       toast.onmouseleave = Swal.resumeTimer;
  //     },
  //   });

  const [showPass, setShowPass] = useState(false);

  //   const { signInUser, googleLogIn, setUser, updateUser } = use(AuthContext);

  //   const { logInUser, googleLogIn, resetPass } = use(AuthContext);

  //   const location = useLocation();
  //   const navigate = useNavigate();

  const emailRef = useRef();

  //   const handleLogin = (e) => {
  //     e.preventDefault();

  //     const email = e.target.email.value;
  //     const password = e.target.password.value;

  // console.log(email, password);

  //     signInUser(email, password)
  //       .then((result) => {
  //         console.log(result);
  //         navigate(`${location.state ? location.state : "/"}`);

  //         Swal.fire({
  //           title: "Welcome to KAJERO.com!",
  //           text: "Let’s turn tasks into success—together.",
  //           icon: "success",
  //           confirmButtonText: "Get Started",
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         Toast.fire({
  //           icon: "error",
  //           title: "Incorrect email or password",
  //         });
  //       });
  //   };

  //   const handleGoogleLogIn = () => {
  //     googleLogIn()
  //       .then((result) => {
  //         const user = result.user;
  //         updateUser({ displayName: user.displayName, photoURL: user.photoURL })
  //           .then(() => {
  //             setUser({
  //               ...user,
  //               displayName: user.displayName,
  //               photoURL: user.photoURL,
  //             });
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //             setUser(user);
  //           });
  //         navigate(`${location.state ? location.state : "/"}`);

  //         Swal.fire({
  //           title: "Welcome to KAJERO.com!",
  //           text: "Let’s turn tasks into success—together.",
  //           icon: "success",
  //           confirmButtonText: "Get Started",
  //         });
  //       })
  //       .catch((error) => {
  //         Toast.fire({
  //           icon: "error",
  //           title: error,
  //         });
  //       });
  //   };

  return (
    <div className="hero bg-[radial-gradient(#0000001a_1px,#f8fafc_1px)] bg-[size:16px_16px] min-h-screen">
      <div className="hero-content  ">
        <div className="card md:px-24 md:py-12 bg-base-100 w-full lg:space-x-32 items-center grid lg:grid-cols-2 shrink-0 ">
          <div className="lg:order-1  mb-12 lg:mb-0 order-2">
            <Link to="/">
              <button className="btn col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#4c637c]  hover:bg-gradient-to-r hover:from-[#4c637c] hover:to-[#4c637c] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4c637c] transition-all ease-out duration-300  ">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative flex gap-1 items-center">
                  {" "}
                  <GoArrowLeft size={20} />
                  Back to Home
                </span>
              </button>
            </Link>

            <div className="text-center">
              <img
                className="h-full mt-12 rounded-3xl w-48  mx-auto lg:w-72"
                src={logo}
                alt="logo"
              />
              <h3 className="text-2xl font-thin text-[#4c637c]">
                {" "}
                <span className="font-light">
                  <Typewriter
                    words={["Ideas.", "Insights.", "Stories.", "Imagination."]}
                    loop={100}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>{" "}
                - From Mind to Page.
              </h3>
            </div>

            <div className="-mt-8 lg:w-[500px] ">
              {" "}
              <Lottie animationData={logImg} />
            </div>
          </div>

          <motion.div
            className="lg:order-2 order-1 "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="  gap-5 pb-8  flex flex-col flex-auto shadow-[32px_23px_59px_-2px_rgba(76,99,124,0.67),25px_27px_27px_-7px_rgba(209,217,230,0.34),-34px_-30px_65px_0px_rgba(255,255,255,0.75),-9px_-20px_29px_0px_rgba(255,255,255,0.54),-13px_-11px_22px_7px_rgba(255,255,255,0.25),-16px_-7px_21px_4px_rgba(255,255,255,0.25)] bg-[#4c637c]/10  mb-8 rounded-xl w-11/12 lg:w-10/12 mx-auto">
              <div className="bg-[#0857a0]/20 rounded-t-xl rounded-b-[68px] text-center flex flex-col items-center justify-center h-48">
                <h1 className="text-l px-10 leading-10  font-stretch-110%">
                  {" "}
                  Welcome Back to <br />{" "}
                  <span className="text-4xl  ">
                    Think
                    <span className="bg-[#4c637c]/50 font-semibold px-[3px]">
                      Tales™
                    </span>
                  </span>{" "}
                </h1>
                <p className="text-[12px] pl-36 text-gray-600">
                  {" "}
                  -Where your thoughts <br /> become timeless tales.
                </p>
              </div>

              <form
                //   onSubmit={handleLogin}
                className="flex flex-col items-center w-10/12 mx-auto *:text-black "
              >
                <label className=" self-start lg:ml-7 ml-4 text-gray-600 font-bold ">
                  Email
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  ref={emailRef}
                  className="input mb-2 w-full rounded-3xl "
                  placeholder="example@email.com"
                />

                <label className="self-start lg:ml-7 ml-4 text-gray-600 font-bold ">
                  Password
                </label>

                <div className="relative  w-full  mx-auto">
                  <input
                    type={showPass ? "text" : "password"}
                    className="input w-full rounded-3xl"
                    placeholder=" Enter Your Password"
                    name="password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                    className="btn btn-xs absolute top-2  right-6"
                  >
                    {showPass ? (
                      <FaEyeSlash color="gray" size={20} />
                    ) : (
                      <FaEye color="gray" size={20} />
                    )}
                  </button>
                </div>

                <div
                  // onClick={handleForgotPass}
                  className="link mt-3 link-hover"
                >
                  Forgot password?
                </div>

                <button className="relative inline-flex items-center justify-center mt-4 w-6/12 mx-auto  p-4 px-5 py-3 overflow-hidden font-medium  transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-[#4c637c]">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#4c637c] via-[#4c637c] to-[#4c637c]"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#0857a0] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative flex gap-1 items-center text-white">
                    {" "}
                    <VscSignIn size={20} />
                    Sign-In
                  </span>
                </button>
              </form>
              <p className="text-center mx-auto flex gap-1 mt-2">
                Don’t have an account yet?{" "}
                <Link to="/sign-up" className="text-[#4c637c] underline">
                  Sign-Up
                </Link>{" "}
              </p>

              {/* Google */}
              <button
                //   onClick={handleGoogleLogIn}
                className="btn bg-white w-10/12 mx-auto text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
