import React from 'react';
import "./HomeSolar.css"
import LiveData from "../../../components/solar/liveData/LiveData.jsx"
import Dropdown from "../../../components/dropdown/Dropdown.jsx";
import PowerData from "../../../components/solar/powerData/PowerData.jsx";
import PanelData from "../../../components/solar/panelData/PanelData.jsx";

function HomeSolar() {
    return (
        <div className="home-solar">
            <div className="top">
                <div className="left">
                    <Dropdown header="Select Building" data={["Building 1", "Building 2", "Building 3", "Building 4"]} />
                    <LiveData />
                </div>
                <div className="right">
                    <PowerData />
                </div>
            </div>
            <div className="mid">
                <PanelData />
            </div>
            <div className="bot">
                Power Production Chart
            </div>
        </div>
    )
}

export default HomeSolar;