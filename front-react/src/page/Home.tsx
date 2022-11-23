import React from "react";
import Hero from "../elements/Hero";
import Navbar from "../elements/Navbar";
import TopHeader from "../elements/TopHeader";
import Filter from "../elements/Filter";
import Listing from "../elements/Listing";
import Footer from "../elements/Footer";

export default function Home() {
    return (<>
        <TopHeader />
        <div className="container">
            <Navbar />
            <Hero />
            <Filter />
            <Listing />
        </div>
        <Footer />
    </>)
}

