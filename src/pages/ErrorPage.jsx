import React from 'react';
import error from '../jsonFile/error2.json'
import { Link } from 'react-router';
import { GoArrowLeft } from 'react-icons/go';
import Lottie from 'lottie-react';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
    return (<>
    <Navbar></Navbar>
     <div className='min-h-screen bg-[radial-gradient(#0000001a_1px,#f8fafc_1px)] pt-28 flex flex-col  justify-center items-center
         mx-auto'>
            
            <Lottie className='w-96 md:w-[450px] lg:w-[600px] -mt-40 '  animationData={error} />
           <div className='bg-[#2d43a7]/10 p-8 lg:w-6/12 w-11/12 rounded-3xl border border-[#545e8b]/60'>
             <h1 className='md:text-4xl  text-[#495c78] text-2xl w-11/12  mx-auto text-center font-medium'>Sorry! Page Not Found</h1>

            <div className='w-6/12  mt-4 md:w-3/12 mx-auto '>
                 <Link to="/">
                <button className="btn col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#495c78]  hover:bg-gradient-to-r hover:from-[#495c78] hover:to-[#495c78] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#495c78] transition-all ease-out duration-300  ">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex gap-1 items-center"> <GoArrowLeft size={20} />Back to Home</span>
            </button>
              </Link>
            </div>
           </div>
        </div>
    </>
       
    );
};

export default ErrorPage;