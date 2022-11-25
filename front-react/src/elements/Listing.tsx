import React from "react";
import Favourite from "./Favourite";
import placeholderDog from "../assets/placeholder_dog.png";
import Reserved from "./Reserved";
export default function Listing() {
    return (<>

        <div className="listing-container">
            <div className="listing-image"><img src={placeholderDog} alt="dog placeholder" className="listing-img-src" /><Reserved /></div>
            <div className="listing-heading">
                <div className="listing-copy">
                    <div className="listing-title">Beans</div>
                    <div className="listing-org">battersea dogs home</div>
                </div>
                <div className="listing-favourite">
                    <Favourite />
                </div>
            </div>
        </div>

    </>)
}

