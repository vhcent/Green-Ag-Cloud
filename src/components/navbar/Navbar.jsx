import React, { useState } from "react";
import "./Navbar.css";
import { NavbarData } from "./NavbarData";
import SearchBar from "./searchBar/SearchBar.jsx";
import { IoMdNotifications } from "react-icons/io";

function Navbar() {
    const [active, setActive] = useState("Solar");
    return (
        <div className="navbar">
            <ul className="navbar-list">
                {NavbarData.map((val, key) => {
                    return (
                        <div
                            key={key}
                            className="navbar-button"
                            id={active === val.title ? "active" : ""}
                            onClick={() => {
                                // window.location.pathname = val.link;
                                setActive(val.title);
                            }}
                        >
                            <div id="icon">{val.icon}</div>{" "}
                            <div id="title">{val.title}</div>
                        </div>
                    );
                })}
                <SearchBar />
                <IoMdNotifications id="notification-icon" />
                <div className="account-container">Kevin Gao</div>
            </ul>
        </div>
    );
}

export default Navbar;
