import Home from "./Home";
import Login from "./Login";
import Autlayout from "../layouts/Autlayout";
import DeafultLayout from "../layouts/DeafultLayout";

 export const config = [
    {
        element:<Home/>,
        path:"/",
        Layout:Autlayout

    },
    {
        element:<Login/>,
        path:"/login",
        Layout: Autlayout
    }
]

