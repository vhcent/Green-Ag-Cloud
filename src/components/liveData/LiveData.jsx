import React, { useState } from "react";
import "./LiveData.css";
import { WiDaySunny } from "weather-icons-react";

function LiveData() {
    return (
        <div className="live-data-container">
            Live Data
            <div className="weather">
                <WiDaySunny size={24} color='#000' />
            </div>
        </div>
    )
}

export default LiveData;