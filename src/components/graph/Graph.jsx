import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Dropdown from "../dropdown/Dropdown.jsx";

import "./Graph.css";

function Graph({ chartData }) {
    return (
        <div className="graph-container">
            <div className="graph-header">
                Power Production Chart
                <Dropdown
                    header="Power Production Chart"
                    data={["Chart 1", "Chart 2", "Chart 3", "Chart 4"]}
                />
                <Dropdown
                    header="Month"
                    data={["Day", "Week", "Month", "Year"]}
                />
            </div>
            <Line
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            // text: "Power Production Chart",
                        },
                        legend: {
                            display: false,
                            position: "right",
                        },
                    },
                }}
            />
        </div>
    );
}
export default Graph;
