import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { wishListPromise } from '../api/wishListApi';
import WishCard from '../components/WishCard';
import wishPic from '../assets/wishlist.svg'

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
            wishlist.length <1 ? <div className='bg-gray-100 p-6 w-11/12 md:w-10/12 lg:w-8/12 mx-auto rounded-xl my-8 min-h-[500px]'>
                    <img className='w-96 mx-auto' src={wishPic} alt="wishlist demo img" />
                    <h2 className='font-bold text-4xl text-[#4c637c] lg:text-6xl text-center'>Your wishlist is empty.</h2>

            </div> :  <div className='w-11/12 lg:w-9/12 mx-auto py-12 space-y-4 grid grid-cols-1'>
                {
                    wishlist.map(wish=> <WishCard
                        
                        wishlist={wishlist}
                        setWishList={setWishList}
                        
                        key={wish._id}
                         wish={wish}
                          ></WishCard>)
                }
            </div>
           }
        </div>
    );
};

export default Wishlist;