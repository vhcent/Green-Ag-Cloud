import React from "react";
import "./dataToggle.css"

function DataToggle(){
    return(
        <div id="buttonContain">
            <div id="day" className="unit">
                Day
            </div>
            <div id="week" className="unit">
                Week
            </div>
            <div id="month" className="unit">
                Month
            </div>
            <div id="year" className="unit">
                Year
            </div>
        </div>
    );
}

export default DataToggle;