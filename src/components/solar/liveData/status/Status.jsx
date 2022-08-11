import React, { useState } from "react";
import "./Status.css";

function Status() {
    const [status, setStatus] = useState("NOT OKAY");
    return (
        <div className="status-container">
            <div className="status">
                Status
                {status == "OKAY" ? <div id="okay">{status}</div>
                    : <div id="not-okay">{status}</div>}
                {/* <div classname="status" id={status}>{status}</div> */}
            </div>
        </div>
    )
}

export default Status;