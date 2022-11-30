import React from "react";
import Hero from "../elements/Hero";
import Navbar from "../elements/Navbar";
import TopHeader from "../elements/TopHeader";

import Listing from "../elements/Listing";
import Footer from "../elements/Footer";


// function types
// prop types
export default function Favourites() {
    return (<>
        <TopHeader />
        <div className="container">
            <Navbar />
            <Hero />
            <div className="favourites-container">
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
            </div>
        </div>
        <Footer />
        {/* <Popup /> */}
    </>)
}

