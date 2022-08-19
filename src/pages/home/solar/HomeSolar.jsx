import React, { useState } from "react";
import "./HomeSolar.css";
import LiveData from "../../../components/solar/liveData/LiveData.jsx";
import Dropdown from "../../../components/dropdown/Dropdown.jsx";
import PowerData from "../../../components/solar/powerData/PowerData.jsx";
import PanelData from "../../../components/solar/panelData/PanelData.jsx";
import Status from "../../../components/solar/liveData/status/Status.jsx";
import Weather from "../../../components/solar/liveData/weather/Weather.jsx";
import Graph from "../../../components/graph/Graph.jsx";

import { dummyData } from "./dummyData.js";

function HomeSolar() {
    const [testData, setTestData] = useState({
        labels: dummyData.map((data) => data.year),
        datasets: [
            {
                //label: "Energy gained",
                data: dummyData.map((data) => data.energy),
                options: {
                    legend: {
                        display: false,
                    },
                    label: {
                        display: false,
                    },
                },
            },
        ],
    });
    return (
        <div className="home-solar">
            <div className="top">
                <div className="left">
                    <div className="dropdown-status">
                        <Dropdown
                            header="Select Building"
                            data={[
                                "Building 1",
                                "Building 2",
                                "Building 3",
                                "Building 4",
                            ]}
                        />
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
                <Graph chartData={testData} />
            </div>
        </div>
    );
}

export default HomeSolar;
