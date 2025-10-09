import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            index:true,
            loader:()=>fetch('Top-Apps.json'),
            path:"/",
            Component:Home,

        },
        {   
            loader:()=>fetch('All-Apps.json'),
            path:"all-apps",
            Component: AllApps,
        },
        {
            path:"/appDetails/:id",
            loader:()=>fetch('All-Apps.json'),
            Component:AppDetails,
        }
        
    ]
  },
]);