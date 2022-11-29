import React from "react";
import Button from "./Button";
import Favourite from "./Favourite";


export default function AnimalDetailCopy() {
    return (<>

        <div className="animal-detail-copy-container">
            <div className="animal-core-container">
                <div className="animal-core-details">
                    <div className="animal-title">Lucky.</div>
                    <div className="animal-organisation">Dogs Trust</div>
                    <div className="reserved-details">RESERVED</div>
                </div>
                <div className="favourite-animal-detail">
                    <Favourite />
                </div>
            </div>
            <div className="animal-details-table">
                <div className="animal-key">Breed</div>
                <div className="animal-value">Cocker Spaniel</div>
            </div>
            <div className="divider"></div>
            <div className="animal-details-table">
                <div className="animal-key">Breed</div>
                <div className="animal-value">Cocker Spaniel</div>
            </div>
            <div className="divider"></div>
            <div className="animal-details-table">
                <div className="animal-key">Breed</div>
                <div className="animal-value">Cocker Spaniel</div>
            </div>
            <div className="divider"></div>
            <div className="animal-details-table">
                <div className="animal-key">Breed</div>
                <div className="animal-value">Cocker Spaniel</div>
            </div>
            <div className="divider"></div>
            <div className="animal-details-table">
                <div className="animal-key">Breed</div>
                <div className="animal-value">Cocker Spaniel</div>
            </div>
            <div className="divider"></div>
            <div className="animal-details-table">
                <div className="animal-key">Breed</div>
                <div className="animal-value">Cocker Spaniel</div>
            </div>
            <div className="divider"></div>
            <div className="animal-details-table">
                <div className="animal-key">Breed</div>
                <div className="animal-value">Cocker Spaniel</div>
            </div>
            <div className="divider"></div>
            <div className="animal-details-button">
                <Button /> <Button />
            </div>
        </div>

    </>)
}

