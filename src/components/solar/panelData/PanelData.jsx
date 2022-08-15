import React, { useState } from 'react';
import "./PanelData.css";
import { FaSolarPanel } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { DummyData } from "./dummyData.js";

function PanelData() {
    const [selected, setSelected] = useState(1);
    return (
        <div className="panel-data-container">
            Panel Data
            <section className="panels">
                {DummyData.map((val, key) => {
                    return (
                        <div
                            key={key}
                            className="panel"
                            id={selected === val.id ? "selected" : ""}
                            onClick={() => {
                                // window.location.pathname = val.link;
                                setSelected(val.id);
                            }}
                        >
                            <BsFillSunFill id={val.status} size={30} />
                            <FaSolarPanel size={60} />
                            {`Panel ${val.id}`}
                        </div>
                    );
                })}
                <div className="legend">
                    <div className="legend-row">
                        <BsFillSunFill id="working" size={30} />
                        Working
                    </div>
                    <div className="legend-row">
                        <BsFillSunFill id="failing" size={30} />
                        Failing
                    </div>
                    <div className="legend-row">
                        <BsFillSunFill id="maintenance" size={30} />
                        Maintenance
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PanelData;