import React, { use, useState } from "react";
import logImg from "../jsonFile/signup.json";
import logo from "../assets/titleLogo.png";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import { GoArrowLeft } from "react-icons/go";
import { RxOpenInNewWindow } from "react-icons/rx";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
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

  const [showPass, setShowPass] = useState(false);

  //   const { createUser, isDark, setUser, updateUser, } =
  //     use(AuthContext);

  const { createUser, googleLogIn, setUser, updateUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result);

        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

        navigate("/");
        Swal.fire({
           title: "👋 Welcome to ThinkTales!",
          text: "Ready to begin your journey?",
          icon: "success",
          confirmButtonText: "Get Started",
          confirmButtonColor: "#4c637c",
        });
      })
      .catch((error) => {
        // console.log(error.message);
        Toast.fire({
          icon: "error",
          title: `${error.message} 😢`,
        });
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;

        // console.log(user);

        updateUser({ displayName: user.displayName, photoURL: user.photoURL })
          .then(() => {
            setUser({
              ...user,
              displayName: user.displayName,
              photoURL: user.photoURL,
            });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

        navigate(`${location.state ? location.state : "/"}`);

        Swal.fire({
           title: "👋 Welcome to ThinkTales!",
          text: "Ready to begin your journey?",
          icon: "success",
          confirmButtonText: "Get Started",
          confirmButtonColor: "#4c637c",
        });
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: error,
        });
      });
  };

  return (
    <div className="hero bg-[radial-gradient(#0000001a_1px,#f8fafc_1px)] bg-[size:16px_16px]  min-h-screen">
      <div className="hero-content ">
        <div className="card md:px-24 md:py-12  bg-base-100 w-full items-center grid lg:grid-cols-2 shrink-0 ">
          <div className="order-2">
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
            className=" order-1 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mx-auto"></div>
            <div className="  gap-5 pb-8  flex flex-col flex-auto shadow-[-30px_20px_54px_-1px_rgba(76,99,124,0.67),25px_27px_27px_-7px_rgba(209,217,230,0.34),-34px_-30px_65px_0px_rgba(255,255,255,0.75),-9px_-20px_29px_0px_rgba(255,255,255,0.54),-13px_-11px_22px_7px_rgba(255,255,255,0.25),-16px_-7px_21px_4px_rgba(255,255,255,0.25)] bg-[#4c637c]/10  mb-8 rounded-xl w-11/12 lg:w-10/12 mx-auto">
              <div className="bg-[#0857a0]/20 rounded-t-xl rounded-b-[68px] text-center flex flex-col items-center justify-center h-44">
                <h1 className="text-l px-10 leading-10  font-stretch-110%">
                  {" "}
                  Join Now <br />{" "}
                  <span className="text-4xl  ">
                    Think
                    <span className="bg-[#4c637c]/50 font-semibold px-[3px]">
                      Tales™
                    </span>
                  </span>{" "}
                </h1>
                <p className="text-[12px] pl-36 text-gray-600">
                  {" "}
                  -Your story deserves to <br /> be told — let’s begin.
                </p>
              </div>

              <form
                onSubmit={handleRegister}
                className="flex *:text-black w-10/12 mx-auto  flex-col items-center "
              >
                <label className=" self-start ml-4 text-gray-600 font-bold ">
                  Your Name
                </label>
                <input
                  type="text"
                  className="input mb-2  w-full rounded-3xl "
                  placeholder="Type Your Name"
                  name="name"
                  required
                  minLength="4"
                />
                <p className="validator-hint hidden">
                  Name should be more then 4 character
                </p>

                <label className=" self-start  ml-4 text-gray-600 font-bold ">
                  Photo URL
                </label>
                <input
                  type="text"
                  className="input mb-2 w-full  rounded-3xl "
                  placeholder="Submit Your Photo URL"
                  name="photo"
                  required
                />

                <label className=" self-start ml-4 text-gray-600 font-bold ">
                  Email
                </label>
                <input
                  type="email"
                  className="input mb-2 w-full rounded-3xl "
                  placeholder="example@email.com"
                  name="email"
                  required
                />

                <label className="self-start  ml-4 text-gray-600 font-bold ">
                  Password
                </label>
                <div className="relative  w-full mx-auto">
                  <input
                    type={showPass ? "text" : "password"}
                    className="input validator w-full  rounded-3xl"
                    placeholder=" Enter Your Password"
                    name="password"
                    required
                    minLength="6"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
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
                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />
                  At least one number <br />
                  At least one lowercase letter <br />
                  At least one uppercase letter
                </p>

                {/* The button to open modal */}

                <label
                  htmlFor="my_modal_6"
                  className="link mt-3 text-sm space-x-2 mx-auto link-hover"
                >
                  <input
                    type="checkbox"
                    required
                    name="trams"
                    className="checkbox"
                  />
                  By registering, I agree to the{" "}
                  <span className="font-bold text-[#4c637c]">
                    Terms and Conditions
                  </span>
                </label>

                <input
                  type="checkbox"
                  id="my_modal_6"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box">
                    <h3 className="text-xl font-bold mb-4 text-[#4c637c]">
                      <span className="muso">ThinkTales</span> Terms &
                      Conditions
                    </h3>

                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                      <li>
                        <strong>Accurate Information:</strong> You must provide
                        true and up-to-date details.
                      </li>
                      <li>
                        <strong>One Account per User:</strong> Multiple accounts
                        are not allowed.
                      </li>
                      <li>
                        <strong>Security Responsibility:</strong> Keep your
                        login details private and safe.
                      </li>
                      <li>
                        <strong>Authorized Payments Only:</strong> Pay only your
                        own or authorized bills.
                      </li>
                      <li>
                        <strong>Service Availability:</strong> Service may be
                        down during maintenance.
                      </li>
                      <li>
                        <strong>No Fraudulent Use:</strong> Fraud will lead to
                        account suspension.
                      </li>
                      <li>
                        <strong>Data Usage & Privacy:</strong> We protect your
                        data as per our Privacy Policy.
                      </li>
                      <li>
                        <strong>Fees and Charges:</strong> Any fees will be
                        shown before payment.
                      </li>
                      <li>
                        <strong>Changes to Terms:</strong> Terms may update —
                        continued use means acceptance.
                      </li>
                      <li>
                        <strong>Account Termination:</strong> Breaking rules may
                        result in account removal.
                      </li>
                    </ul>

                    <p className="mt-4 text-sm text-gray-600">
                      By registering, you agree to ThinkTales’s Terms and
                      Conditions.
                    </p>
                    <div className="modal-action">
                      <label
                        htmlFor="my_modal_6"
                        className="btn bg-[#4c637c] text-white "
                      >
                        Close!
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="relative inline-flex items-center justify-center mt-4 w-8/12 mx-auto  p-4 px-5 py-3 overflow-hidden font-medium  transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-[#4c637c]">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#4c637c] via-[#4c637c] to-[#4c637c]"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#0857a0] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative flex gap-1 items-center text-white">
                    {" "}
                    <RxOpenInNewWindow size={20} />
                    Submit to Sign-Up
                  </span>
                </button>
              </form>
              <p className="text-center mx-auto flex gap-1 mt-2">
                Already have an account?
                <Link to="/sign-in" className="text-[#4c637c] underline">
                  Sign-In
                </Link>{" "}
              </p>

              {/* Google */}
              <button
                onClick={handleGoogleLogIn}
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

export default SignUp;
