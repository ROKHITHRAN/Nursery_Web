import React, { useEffect, useState } from "react";
import "../assets/css/Body.css";
import img1 from "../assets/images/bk.jpg"
import { Card, Paper, Slider } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
const Body=()=>{
    const[flowers,setFlowers] = useState(null);
    useEffect(
        ()=>{
            const collectionsRef = collection(db,"Flowers");
            getDocs(collectionsRef)
                .then((snapshot)=> {
                    let results = []
                    snapshot.docs.forEach((doc)=>{
                        results.push({...doc.data(),id:doc.id})
                    })
                    setFlowers(results);
                })
                .catch((err)=>console.log(err))
        },[]
    )
    // console.log(flowers);
    useEffect(() => {
        if (flowers && flowers.length > 0) {
            flowers.forEach((flower) => {
                console.log(flower.name);
                // Perform any other action on each plant here
            });
        }
    }, [flowers]);

    // {flowers.map((flower) => (
    //     <li key={flower.id}>
    //         <p>Name: {flower.name}</p>
    //         <p>Image: {flower.image}</p>
    //         <p>ID: {flower.id}</p>
    //     </li>
    // ))}
    
    return(
        <div className="container-1" id='Profile'>
            <Paper elevation={24} className="paper">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, et, neque eius suscipit culpa ratione tempore tenetur magnam, labore harum consectetur? Beatae aperiam quas adipisci eum praesentium nesciunt animi quod, aliquid aliquam labore? Similique vel amet nemo dignissimos ad nesciunt!</p>
            </Paper>
        </div>
    )
}
export default Body;