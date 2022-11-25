import React from "react";
import DropdownSelect from "./DropdownSelect";

export default function Filter() {
    return (<>
        <section>
            <div className="filter">
                <h2>Animals & Organisations</h2>
                <div className="filter-list">
                    <DropdownSelect />
                    <DropdownSelect />
                    <DropdownSelect />
                    <DropdownSelect />
                    <DropdownSelect />
                    <DropdownSelect />
                </div>
            </div>
        </section>
    </>)
}

