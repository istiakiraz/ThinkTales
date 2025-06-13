import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import HomePages from "../pages/HomePages";
import AddBlog from "../pages/AddBlog";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AllBlogs from "../pages/AllBlogs";
import BlogDetails from "../pages/BlogDetails";
 
export const router = createBrowserRouter([
    {
     path: '/',
     Component: MainLayouts,
     children: [
        {
            index: true,
            Component: HomePages,
            loader: () => fetch('http://localhost:3000/blogs/recent')           
        },
        {
            path:"add-blog",
            element: <AddBlog></AddBlog>
        },
        {
            path: "all-blogs",
            element: <AllBlogs></AllBlogs>
        },
        {
            path: 'blog-details/:id',
            element: <BlogDetails></BlogDetails>,
            loader: ({params})=> fetch(`http://localhost:3000/blogs/${params.id}`)
        }
     ]
    },
    {
        path: 'sign-in',
        Component: SignIn
    },
    {
        path: 'sign-up',
        Component: SignUp
    }
])