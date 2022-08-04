import React, { useState } from "react";
import "./SearchBar.css";
import { BiSearch } from "react-icons/bi";

function SearchBar() {
    return (
        <div className="search-bar">
            <div className="search-input">
                <input type="text" placeholder="Search" />
                <div className="search-icon">
                    <BiSearch />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;