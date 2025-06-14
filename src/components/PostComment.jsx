import React, { useEffect, useState } from "react";
import { commentPromise } from "../api/commentApi";
import Comment from "./Comment";
import { data } from "react-router";

const PostComment = ({ blog }) => {
  const [comments, setComments] = useState([]);



  useEffect(() => {
    commentPromise(blog._id).then(setComments);
  }, [blog._id]);

  
  const handleNewComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };

  

  console.log(comments);

  return (
   <div>
     <div>
              <Comment handleNewComment={handleNewComment} blog={blog} ></Comment>
        </div>
     <div>
      {comments.map((com) => <div key={com?._id}> <div className="flex items-center mt-5 gap-3">
        <img className="rounded-full size-10 border-2 border-gray-700" src={com?.
userPhoto} alt="" />
        <div className="bg-gray-200 py-2 pl-3 pr-8 rounded-2xl">
            <h2 className="font-semibold uppercase">{com?.userName}</h2>
        <p>{com?.comment}</p>
        <p className="text-sm mt-2 text-gray-500">{com?.date }</p>
        </div>
      </div>
      
      </div>
        
      )}
    </div>
   </div>
  );
};

export default PostComment;
