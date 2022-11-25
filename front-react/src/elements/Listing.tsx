import React from "react";
import Favourite from "./Favourite";
export default function Listing() {
    return (<>
        <div className="listing">
            <div className="listing-container">
                <div className="listing-image"></div>
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
        </div>
    </>)
}

