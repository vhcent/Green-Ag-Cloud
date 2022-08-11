import React, { useState } from "react";
import "./LiveData.css";
import Weather from "./weather/Weather.jsx";
import Status from "./status/Status.jsx";

function LiveData() {
    return (
        <div className="live-data-container">
            Live Data
            <div className="live-data-main">
                <Status />
                <Weather />
            </div>
        </div>
    )
}

export default LiveData