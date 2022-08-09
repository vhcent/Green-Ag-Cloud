import React from 'react';
import "./HomeSolar.css"
// import Navbar from "../../../components/navbar/Navbar.jsx";
// import Status from "../../../components/liveData/status/Status.jsx";
// import Weather from "../../../components/liveData/weather/Weather.jsx";
import LiveData from "../../../components/liveData/LiveData.jsx"
import Dropdown from "../../../components/dropdown/Dropdown.jsx";

function HomeSolar() {
    return (
        <div className="home-solar">
            <div className="top">
                <div className="left">
                    <Dropdown header="Select Building" data={["Building 1", "Building 2", "Building 3", "Building 4"]} />
                    <LiveData />
                </div>
                <div className="right">
                    HELLO
                </div>
            </div>
            {/* <Weather /> */}
        </div>
    )
}

export default HomeSolar;