import React, { useState } from "react";
import "./Navbar.css";
import { NavbarData } from "./NavbarData";
import SearchBar from "./searchBar/SearchBar.jsx"
import {Link} from "react-router-dom";

function Navbar() {
    const [active, setActive] =useState();//= useState("Solar");
    return (
        <div className="navbar">
            <ul className="navbar-list">
                {NavbarData.map((val, key) => {
                    return (
                        <Link to ={val.link} className="navbar-button">
                            <div
                                key={key}
                                //className="navbar-button"
                                id={active === val.title ? "active" : ""}
                                onClick={() => {
                                    //window.location.pathname = val.link;
                                    setActive(val.title);
                                }}
                            >
                                <div id="icon">{val.icon}</div>{" "}
                                <div id="title">{val.title}</div>
                            </div>
                        </Link>
                    );
                })}
                <SearchBar />
            </ul>
        </div>
    );
}

export default Navbar;
