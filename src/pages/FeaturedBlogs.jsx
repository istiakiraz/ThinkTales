import React from "react";
import { Link, useLoaderData } from "react-router";
import "ka-table/style.css";
import { Table } from "ka-table";
import { EditingMode, SortingMode } from "ka-table/enums";
import brain from '../assets/brainstorming-31.svg'
import userFrom from '../assets/user-interface-1-100.svg'
import { motion } from "framer-motion";
import Newsletter from "../components/homepageComponents/Newsletter";

const FeaturedBlogs = () => {
  const featuredBlogs = useLoaderData();

  const dataWithSerial = featuredBlogs.map((blog) => ({
    ...blog,
  }));

  return (
    <div className="w-[95%] pt-40 relative lg:w-10/12 py-8 mx-auto">
        <h1 className="text-center mt-2 text-3xl text-[#4c637c] lg:text-5xl font-bold py-4">
        Top Featured Blogs
      </h1>
      <p className="text-center mb-8 text-gray-400" > Explore our most engaging and well-crafted blogs, handpicked based on quality and depth. These featured articles represent the best content from our community — rich in insights, creativity, and value.</p>
      <img className="w-56 top-10 opacity-30 left-50 -rotate-45 absolute" src={brain} alt="brain" />
      <motion.img
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9 }}
      
      className="w-[700px] opacity-20 hidden lg:block top-80 right-125 absolute" src={userFrom} alt="brain" />
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <div className="min-w-[800px]">
          <Table
            columns={[
              {
                key: "photo",
                title: "Photo",
                dataType: "string",
                style: { textAlign: "center" },
                width: 100,
              },
              {
                key: "title",
                title: "Title",
                dataType: "string",
                width: 200,
              },
              {
                key: "category",
                title: "Category",
                dataType: "string",
                width: 150,
              },
              {
                key: "short_Description",
                title: "Short Description",
                dataType: "string",
                minWidth: 250,
              },
              {
                key: "details",
                title: "Details",
                dataType: "string",
                style: { textAlign: "center" },
                width: 120,
              },
            ]}
            data={dataWithSerial}
            rowKeyField={"_id"}
            sortingMode={SortingMode.Single}
            editingMode={EditingMode.None}
            childComponents={{
              cellText: {
                content: ({ column, rowData }) => {
                  switch (column.key) {
                    case "photo":
                      return (
                        <img
                          src={rowData.photo}
                          alt={rowData.title}
                          className="w-12 h-12 object-cover rounded mx-auto"
                        />
                      );
                    case "details":
                      return (
                        <Link to={`/blog-details/${rowData._id}`}>
                          <button className="btn mt-2 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#4c637c]  hover:bg-gradient-to-r hover:from-[#4c637c] hover:to-[#4c637c] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4c637c] transition-all ease-out duration-300  ">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative flex gap-1 items-center">
                              {" "}
                              Details
                            </span>
                          </button>
                        </Link>
                      );
                    default:
                      return (
                        <div className="text-sm lg:text-[16px] break-words whitespace-normal">
                          {rowData[column.key]}
                        </div>
                      );
                  }
                },
              },
            }}
          />
        </div>
      </div>
      <Newsletter></Newsletter>
    </div>
  );
};

export default FeaturedBlogs;
