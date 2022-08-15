import React, {useState} from "react";
import SolarPanel from "./solarPanel/solarPanel";
import Graph from "./graph/graph.jsx";
import DataToggle from "./dataToggle/dataToggle.jsx";
import {TestData} from "./graph/data.js";



function Solar(){
    const[testData,setTestData]=useState({
        labels: TestData.map((data)=>data.year),
        datasets: [{
            //label: "Energy gained",
            data: TestData.map((data)=>data.energy),
            options:{
                legend:{
                    display:false
                },
                label:{
                    display:false
                }
            }
        }]
        }
    );

    return(
        <div>
            <h1>
                This is solar
            </h1>
            <SolarPanel/>

            <DataToggle/>
            <Graph chartData={testData}/>
        </div>
    );
}

export default Solar;