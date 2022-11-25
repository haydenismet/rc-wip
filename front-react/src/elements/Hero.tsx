import React from "react";
import bgImg from "../assets/bg-header-pets.png";
import Button from "./Button";

export default function Hero() {
    return (
        <>
            <div className="hero">
                <div className="rectangle-bg">
                    <div className="hero-inner">
                        <div className="adoption-heading">
                            adoption <div className="adoption-subheading">made simple</div>
                            <Button />
                        </div>

                        <img src={bgImg} className="adopted-img" alt="adopted animals" />
                    </div>
                </div>

            </div>
        </>
    );
}
