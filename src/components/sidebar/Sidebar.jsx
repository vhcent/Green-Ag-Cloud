import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
    const [active, setActive] = useState("Home");
    return (
        <div className="sidebar">
            <div className="logo-row">
                <div id="icon">Logo</div> <div id="title">Green AG</div>
            </div>
            <ul className="sidebar-list">
                {SidebarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="sidebar-row"
                            id={active == val.title ? "active" : ""}
                            onClick={() => {
                                //window.location.pathname = val.link;
                                setActive(val.title);
                            }}
                        >
                            <div id="icon">{val.icon}</div>{" "}
                            <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
