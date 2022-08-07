import React, { useState } from "react";
import "./LiveData.css";
import { WiDaySunny } from "weather-icons-react";
import { GrStatusGood, GrStatusCritical } from "react-icons/gr";

function LiveData() {
    const [status, setStatus] = useState("NOT OKAY");
    return (
        <div className="live-data-container">
            Live Data
            <div className="status">
                Status
                {status == "OKAY" ? <div id="okay">{status}</div>
                    : <div id="not-okay">{status}</div>}
                {/* <div classname="status" id={status}>{status}</div> */}
            </div>
        </div>
    )
}

export default LiveData;