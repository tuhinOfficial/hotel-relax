import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Hotels from "../Hotels/Hotels"
import Login from "../Login/Login";
import Details from "../Details/Details";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"hotels",
                element:<Hotels></Hotels>,
                loader: async()=>{
                    const res = await fetch('http://localhost:5000/hotels');
                    const data = await res.json();
                    return data;
                }
            },
            {
                path:"hotels/:id",
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/hotels/${params.id}`)
            },
            
            {
                path:"login",
                element:<Login></Login>
            }
        ]
    }
])

export default router;