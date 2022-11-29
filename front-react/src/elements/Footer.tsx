import React from "react";
import logo from "../assets/rc-logo.png";
import sneakyKitty from "../assets/sneaky-kitty.png";
export default function Footer() {
    return (<>
        <div className="footer">
            <img src={sneakyKitty} alt="cat" className="sneaky-kitty" />
            <div className="footer-copy">Pooling adoption centres online to help you find your purrfect friend. </div>
            <div className="footer-logo"><img src={logo} alt="rescue collective logo" /></div>
        </div>
    </>)
}

