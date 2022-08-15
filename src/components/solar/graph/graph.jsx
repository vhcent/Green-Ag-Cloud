import React from "react";
import {Chart as ChartJS} from "chart.js/auto";
import {Line} from "react-chartjs-2";


function Graph({chartData}){
    return(
        <Line 
            data={chartData} 
            options={{
                plugins:{
                    title: {
                        display: true, 
                        text: 'Power Production Chart'},
                    legend : {
                        display:false,
                        position:"right"
                    }
            }}}/>
    );
}
export default Graph;