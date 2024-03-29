import React from "react";
import Hero from "../elements/Hero";
import Navbar from "../elements/Navbar";
import TopHeader from "../elements/TopHeader";
import Filter from "../elements/Filter";
import Listing from "../elements/Listing";
import Footer from "../elements/Footer";
import LoadMore from "../elements/LoadMore";
import Popup from "../elements/Popup";

// function types
// prop types
export default function Home() {
    return (<>
        <TopHeader />
        <div className="container">
            <Navbar />
            <Hero />
            <Filter />
            <div className="listing">
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
            </div>
            <LoadMore />
        </div>
        <Footer />
        {/* <Popup /> */}
    </>)
}

