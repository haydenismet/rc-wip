import React from "react";
import logo from "../assets/rc-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-solid-svg-icons";

export default function Favourite() {
    return (<>
        <FontAwesomeIcon icon={farHeart} />
    </>)
}

