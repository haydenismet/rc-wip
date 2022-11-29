import React from "react";
import Hero from "../elements/Hero";
import Navbar from "../elements/Navbar";
import TopHeader from "../elements/TopHeader";
import Filter from "../elements/Filter";
import Listing from "../elements/Listing";
import Footer from "../elements/Footer";
import LoadMore from "../elements/LoadMore";
import Popup from "../elements/Popup";
import Slider from "../elements/Slider";
import AnimalDetailCopy from "../elements/AnimalDetailCopy";

// function types
// prop types
export default function AnimalDetail() {
    return (<>
        <TopHeader />
        <div className="container">
            <Navbar />
            <Slider />
            <AnimalDetailCopy />

        </div>
        <Footer />
        {/* <Popup /> */}
    </>)
}

