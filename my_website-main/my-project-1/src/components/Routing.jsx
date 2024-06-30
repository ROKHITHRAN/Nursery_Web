import React from "react";
import { Route, Routes } from "react-router-dom";
import PlantCarousel from "./PlantCarousel";
import ResponsiveDrawer from "./Sidebar";
import Website from "./Website";
import Admin from "./Admin";
import PrivateRoute from "./PrivateRoute";
const Routing=()=>{
    return(
    <Routes>
        <Route path="/*" element={<Website/>}/>
        <Route path="/Flowers" element={<ResponsiveDrawer/>}/>
        <Route path="/Bonsai" element={<ResponsiveDrawer/>}/>
        <Route path="/Fruits" element={<ResponsiveDrawer/>}/>
        <Route path="/Climbers" element={<ResponsiveDrawer/>}/>
        <Route path="/Crotans" element={<ResponsiveDrawer/>}/>
        <Route path="/Palm" element={<ResponsiveDrawer/>}/>
        <Route path="/Admin" element={<PrivateRoute element={Admin}/>} />
    </Routes>
    )

}
export default Routing;