import React from 'react';
import "./HomeSolar.css"
import LiveData from "../../../components/solar/liveData/LiveData.jsx"
import Dropdown from "../../../components/dropdown/Dropdown.jsx";
import PowerData from "../../../components/solar/powerData/PowerData.jsx";
import PanelData from "../../../components/solar/panelData/PanelData.jsx";
import Status from "../../../components/solar/liveData/status/Status.jsx";
import Weather from "../../../components/solar/liveData/weather/Weather.jsx";

function HomeSolar() {
    return (
        <div className="home-solar">
            <div className="top">
                <div className="left">
                    <div className="dropdown-status">
                        <Dropdown header="Select Building" data={["Building 1", "Building 2", "Building 3", "Building 4"]} />
                        {/* <LiveData /> */}
                        <Status />
                    </div>
                    <div className="home-solar-weather">
                        <Weather />
                    </div>
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