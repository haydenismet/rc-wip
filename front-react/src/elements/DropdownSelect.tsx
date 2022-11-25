import React from "react";

export default function DropdownSelect() {
    return (<>
        <select name="animals" id="animals_list">
            <option value="" disabled selected hidden>animal</option>
            <option value="all">All</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
        </select>

    </>)
}

