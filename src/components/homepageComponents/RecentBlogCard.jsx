import React from "react";

const RecentBlogCard = ({ blog }) => {
  const dateStr = blog.date;
  const date = new Date(dateStr);

  const day = date.getDate(); // 12
  const month = date.toLocaleString("en-GB", { month: "long" });

  return (
    <div className="bg-gray-200  flex flex-col lg:flex-row lg:space-x-5 pr-8 lg:pr-4 pl-8">
      <div className="pb-8  ">
        <img
          className="shadow-[7px_8px_33px_20px_rgba(0,0,0,0.28)] -mt-8 w-full lg:min-w-[450px] lg:h-80 object-cover  "
          loading="lazy"
          src={blog.photo}
          alt={blog.title}
        />
        <div className="text-gray-500">
          <h4 className="lg:text-8xl text-4xl font-bold">{day}</h4>
          <h2 className="lg:text-4xl text-2xl font-semibold ">{month}</h2>
        </div>
      </div>
      <div className="py-8">
        <h1 className="text-2xl text-gray-600 hyphens-auto font-bold">
          {blog.title}
        </h1>
        <div className="flex bg-gray-400 px-4 py-1 w-fit gap-2 items-center  rounded-4xl">
          <img className="rounded-full size-10" src={blog.userPhoto} alt={blog.userName} />
          <h4 className="text-xl text-white">{blog.userName}</h4>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogCard;
