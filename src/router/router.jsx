import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import HomePages from "../pages/HomePages";
 
export const router = createBrowserRouter([
    {
     path: '/',
     Component: MainLayouts,
     children: [
        {
            index: true,
            Component: HomePages,
            
            
        }
     ]
    }
])