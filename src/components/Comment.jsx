import React from "react";
import { FaRegComment } from "react-icons/fa6";

const Comment = ({ blog }) => {
  const handleComment = (e) => {
    e.preventDefault();

    const comment = e.target.comment.value;

    const commentData = {
      comment,
      userEmail: blog.userEmail,
      userName: blog.userName,
      userPhoto: blog.userPhoto,
        comment_id : blog._id,
        date: new Date().toISOString()
    };

    console.log(commentData);
  };

  return (
    <div>
      <form onSubmit={handleComment}>
        <textarea
          placeholder="Write your comment..."
          name="comment"
          className="textarea lg:w-6/12 border-gray-600 textarea-neutral"
        ></textarea>{" "}
        <br />
        <button className="btn mt-4 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#4c637c]  hover:bg-gradient-to-r hover:from-[#4c637c] hover:to-[#4c637c] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4c637c] transition-all ease-out duration-300  ">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative flex gap-1 items-center">
            {" "}
            <FaRegComment size={20} />
            Comment
          </span>
        </button>
      </form>
    </div>
  );
};

export default Comment;
