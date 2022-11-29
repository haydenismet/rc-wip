import React from "react";
import sliderImg from "../assets/slider_img.png";
import sliderThumbnail from "../assets/slider_thumbnail.png";
export default function Slider() {
    return (
        <>
            <div className="slider">
                <img src={sliderImg} alt="detailed animal" className="slider-main-img" />
                <div className="slider-thumbnail">
                    <img src={sliderThumbnail} alt="detailed animal thumbnail" className="slider-thumb-img" />
                    <img src={sliderThumbnail} alt="detailed animal thumbnail" className="slider-thumb-img" />
                    <img src={sliderThumbnail} alt="detailed animal thumbnail" className="slider-thumb-img" />
                    <img src={sliderThumbnail} alt="detailed animal thumbnail" className="slider-thumb-img" />
                </div>

            </div>
        </>
    );
}
