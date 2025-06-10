import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import HomePages from "../pages/HomePages";
import AddBlog from "../pages/AddBlog";
import SignIn from "../pages/SignIn";
 
export const router = createBrowserRouter([
    {
     path: '/',
     Component: MainLayouts,
     children: [
        {
            index: true,
            Component: HomePages,           
        },
        {
            path:"add-blog",
            element: <AddBlog></AddBlog>
        }
     ]
    },
    {
        path: 'sign-in',
        Component: SignIn
    }
])