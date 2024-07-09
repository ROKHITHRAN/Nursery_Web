import React, { useEffect, useState } from "react";
import "../assets/css/Body.css";
import { Paper } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const Body = () => {
    const [flowers, setFlowers] = useState(null);

    useEffect(() => {
        const collectionsRef = collection(db, "Flowers");
        getDocs(collectionsRef)
            .then((snapshot) => {
                let results = [];
                snapshot.docs.forEach((doc) => {
                    results.push({ ...doc.data(), id: doc.id });
                });
                setFlowers(results);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (flowers && flowers.length > 0) {
            flowers.forEach((flower) => {
                console.log(flower.name);
            });
        }
    }, [flowers]);

    return (
        <div className="container-1" id='Profile'>
            <Paper elevation={24} className="paper">
                <ul className="about-list">
                    <li className="about">
                        <h2 className="AbtHead">About Us</h2>
                        <p>Welcome to Rokhith Nursery Garden, your premier destination for a diverse and vibrant collection of plants. Located in the heart of [your location], our nursery is dedicated to cultivating a wide variety of plants that cater to the needs of both novice gardeners and seasoned horticulturists.</p>
                    </li>
                    <li>
                        <h2 className="AbtHead">Our Story</h2>
                        <p>Founded in [year], Rokhith Nursery Garden began with a simple mission: to bring the beauty of nature closer to our community. What started as a small family-run nursery has blossomed into a thriving garden center renowned for its exceptional quality and extensive selection. Our passion for plants and commitment to customer satisfaction have been the driving forces behind our growth and success.</p>
                    </li>
                    <li>
                        <h2 className="AbtHead">What We Offer</h2>
                        <p>At Rokhith Nursery Garden, we offer an extensive range of plants, including ornamental plants, flowering plants, shrubs, trees, succulents, and much more. Whether you're looking to create a lush garden oasis, add a touch of greenery to your home, or find the perfect gift for a loved one, we have something to suit every need and preference.</p>
                    </li>
                    <li>
                        <h2 className="AbtHead">Visit Us</h2>
                        <p>We invite you to visit Rokhith Nursery Garden and explore our beautiful selection of plants. Our serene and welcoming environment is the perfect place to unwind, gather inspiration, and find everything you need to bring your gardening dreams to life. Whether you are a beginner or an expert, we are here to support and inspire you on your gardening journey. Thank you for choosing Rokhith Nursery Garden. We look forward to helping you cultivate beauty and joy through the art of gardening.</p>
                    </li>
                </ul>
            </Paper>
        </div>
    );
}

export default Body;
