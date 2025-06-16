import axios from "axios";
import React, { use } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const WishCard = ({ wish, setWishList, wishlist }) => {

  const {user} = use(AuthContext)


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4c637c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete task by database
        axios
          .delete(`http://localhost:3000/wishlist/${wish._id}`,{
            headers: {
            authorization : `Bearer ${user.accessToken}`
        }
          })
          .then((res) => {
            console.log("Deleted wishlist item", res.data);
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
                confirmButtonColor: "#4c637c",
              });
              //   remove the task form the state
              const remainingBlog = wishlist.filter((tas) => tas._id !== id);
              setWishList(remainingBlog);
            }
          });
      }
    });
  };

  return (
    <div className="lg:grid px-8 py-8 rounded-xl justify-center lg:grid-cols-12 lg:gap-2 border border-gray-400 bg-gray-200 space-y-3 lg:space-x-6 items-center ">
      <img loading="lazy"
        className=" lg:w-52 mx-auto col-span-2 "
        src={wish?.blog_photo}
        alt={wish?.blog_title}
      />
      <div className="col-span-4">
        <h1 className=" text-xl  lg:text-2xl">{wish?.blog_title}</h1>
        <h3 className="bg-gray-400 w-fit text-sm rounded-xl px-2 mt-2">
          {wish?.blog_category}
        </h3>
      </div>
      <h4 className="line-clamp-3 hyphens-auto col-span-3">{wish.blog_long}</h4>
      <div className="col-span-3 mx-auto space-x-4">
        <Link to={`/blog-details/${wish.blog_Id}`}>
          <button className="btn mt-2 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#4c637c]  hover:bg-gradient-to-r hover:from-[#4c637c] hover:to-[#4c637c] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4c637c] transition-all ease-out duration-300  ">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative flex gap-1 items-center"> Details</span>
          </button>
        </Link>

        <button
          onClick={() => handleDelete(wish._id)}
          className="btn mt-2 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#c71919]  hover:bg-gradient-to-r hover:from-[#c71919] hover:to-[#c71919] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#c71919] transition-all ease-out duration-300  "
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative flex gap-1 items-center"> Delete</span>
        </button>
      </div>
    </div>
  );
};

export default WishCard;
