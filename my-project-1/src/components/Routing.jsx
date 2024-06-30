import React from "react";
import { Route, Routes } from "react-router-dom";
import PlantCarousel from "./PlantCarousel";
import ResponsiveDrawer from "./Sidebar";
import Website from "./Website";
const Routing=()=>{
    return(
    <Routes>
        <Route path="/*" element={<Website/>}/>
        <Route path="/Flowers" element={<ResponsiveDrawer/>}/>
        <Route path="/Bonsai" element={<ResponsiveDrawer/>}/>
        <Route path="/Fruits" element={<ResponsiveDrawer/>}/>
        {/* <Route path="/Flowers" element={</>}/>
        <Route path="/Hibiscus" element={<Roses/>}/> */}
    </Routes>
    )

}
export default Routing;