import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import HomePages from "../pages/HomePages";
import AddBlog from "../pages/AddBlog";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AllBlogs from "../pages/AllBlogs";
import BlogDetails from "../pages/BlogDetails";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import EditBlog from "../pages/EditBlog";
import Wishlist from "../pages/Wishlist";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/Loading";
import ErrorPage from "../pages/ErrorPage";
 
export const router = createBrowserRouter([
    {
     path: '/',
     Component: MainLayouts,
     hydrateFallbackElement: <Loading></Loading>,
     errorElement: <ErrorPage></ErrorPage>,
     children: [
        {
            index: true,
            Component: HomePages,
            loader: ()=> fetch('https://thinktales-server.vercel.app/blogs/recent')           
        },
        {
            path:"add-blog",
            element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        },
        {
            path: "all-blogs",
            element: <AllBlogs></AllBlogs>
        },
        {
            path: 'blog-details/:id',
            element: <BlogDetails></BlogDetails>,
            loader: ({params})=> fetch(`https://thinktales-server.vercel.app/blogs/${params.id}`)
        },
        {
            path:'featured-blogs',
            Component: FeaturedBlogs,
            loader: ()=> fetch('https://thinktales-server.vercel.app/blogs/featured')
        },
        {
            path:'edit-blog/:id',
            element: <EditBlog></EditBlog>,
            loader: ({params})=> fetch(`https://thinktales-server.vercel.app/blogs/${params.id}`)
        },
        {
            path: "wishlist",
            element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
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