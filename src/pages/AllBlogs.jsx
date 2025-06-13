import React, { useEffect, useState } from 'react';
import { blogsPromise } from '../api/allblogsapi';
import BlogCard from '../components/BlogCard';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
  setLoading(true);

  const query = [];
  if (searchTerm) query.push(`search=${searchTerm}`);
  if (category) query.push(`category=${encodeURIComponent(category)}`);
  const queryString = query.join('&');
  
 
 
  blogsPromise(queryString)
    .then(data => setBlogs(data))
    
     setLoading(false);
}, [searchTerm, category]);



  return (
    <div className="w-11/12 lg:w-11/12 mx-auto">
      <h1 className="text-center text-5xl font-bold py-8">
        Hot Jobs of the Day
      </h1>

      <div className="max-w-md mx-auto pb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search by job title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border border-gray-300 rounded p-2"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
           <option value="">
                    Pick a blog category
                  </option>
                  <option>Lifestyle</option>
                  <option>Technology</option>
                  <option>Health & Wellness</option>
                  <option>Film & TV</option>
                  <option>Art & Design</option>
                  <option>Music & Culture</option>
                  <option>Photography</option>
                  <option>Finance & Investing</option>
                  <option>Fashion & Style</option>
                  <option>Education</option>
                  <option>Food & Recipes</option>
                  <option>Travel</option>
                  <option>Gaming & Esports</option>
                  <option>Books & Literature</option>
                  <option>Parenting & Family</option>
                  <option>Personal Growth</option>
        </select>
      </div>

      <div className="grid grid-cols-1 mt-20 lg:grid-cols-3  gap-16 pb-16">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">Loading...</p>
        ) : blogs.length > 0 ? (

         blogs.map((blog) => <BlogCard key={blog._id} blog={blog} ></BlogCard>)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No jobs found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;