import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { wishListPromise } from '../api/wishListApi';
import WishCard from '../components/WishCard';
import wishPic from '../assets/wishlist.svg'
import wishJson from '../jsonFile/empty (2).json'
import Lottie from 'lottie-react';
import Newsletter from '../components/homepageComponents/Newsletter';

const Wishlist = () => {

    const {user} = use(AuthContext);

    const [wishlist, setWishList] = useState([]);
    

    useEffect(()=>{
        wishListPromise(user?.email).then(setWishList)

    }, [user?.email])

    // console.log(wishlist);

    return (
        <div>
            
           {
            wishlist.length <1 ? <div className='bg-gray-100 p-6 w-11/12 md:w-10/12 lg:w-8/12 mx-auto rounded-xl my-8 min-h-[470px]'>
                    <div  className='lg:w-96 md:w-72 w-64 mx-auto' ><Lottie animationData={wishJson} /></div>
                    <div className=' flex bg-gray-300 border-gray-500 border rounded-xl items-center justify-center'>
                       <div className='lg:w-40 w-32 md:w-36 '> <img className=' w-fit  mx-auto' src={wishPic} alt="wishlist demo img" /></div>
                        <h2 className='font-bold text-2xl md:text-4xl text-[#4c637c] lg:text-6xl   text-center'>  Your wishlist is empty.</h2>
                    </div>
                    
                    

            </div> :  <>
            <h1 className="text-center mt-16 w-11/12 mx-auto text-3xl text-[#4c637c] lg:text-5xl font-bold py-4">
        Top Featured Blogs
      </h1>
      <p className="text-center w-11/12 mx-auto  text-gray-400" > Explore our most engaging and well-crafted blogs, handpicked based on quality and depth. These featured articles represent the best content from our community — rich in insights, creativity, and value.</p>
            <div className='w-11/12 min-h-[470px] lg:w-9/12 mx-auto -mt-16 py-30  space-y-4 grid grid-cols-1'>
                {
                    wishlist.map(wish=> <WishCard
                        
                        wishlist={wishlist}
                        setWishList={setWishList}
                        
                        key={wish._id}
                         wish={wish}
                          ></WishCard>)
                }
            </div>
            </>
           }

           <Newsletter></Newsletter>
        </div>
    );
};

export default Wishlist;