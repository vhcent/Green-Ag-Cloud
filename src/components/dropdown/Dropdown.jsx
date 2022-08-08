import React, { useState } from "react";
import "./Dropdown.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Dropdown(props) {
    const [listOpen, setListOpen] = useState(false)
    return (
        <div className="dropdown-countainer">
            <button className="dropdown-header" onClick={() => setListOpen(!listOpen)}>
                <div className="dropdown-header-title">{props.header}</div>
                {listOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {listOpen ? 
                <div className="dropdown-list">
                {props.data.map((val, key) => {
                    return (
                        <button className="dropdown-list-item">{val}</button>
                    );
                })}
                </div> : <></>
            }
        </div>
    )
}

export default Dropdown;