import React from "react";
import logo from "../assets/rc-logo.png"
import Favourite from "./Favourite";


export default function Navbar() {
    return (<>
        <div className="navbar">
            <img src={logo} alt="rescue collective logo" className="rc-logo" />
            <div className="favourite"> <Favourite /></div>
        </div>
    </>)
}

