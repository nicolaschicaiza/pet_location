// src/components/PieChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';

function LineChart( props ) {

    //console.table(props.chartData);

    //quitar los null de la lista
    let data = props.chartData.filter(function (el) {
        return el != null;
    });

    //los labels son el indice de cada elemento
    let labels = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(i);
    }

    //console.table(data);

    const data_obj = {

        labels: labels,
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: 'Popularity of colours',
                data: data, //[55, 23, 96], //
                // you can set indiviual colors for each bar
                backgroundColor: getDataColors(),
                borderWidth: 5,
            }
        ]
    }

    return (
        <div style={{background: 'white', opacity:'20'}} height="400">
            <h2 style={{ textAlign: "center" }}>Line Chart</h2>

            <Line
                data={data_obj}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Users Gained between 2016-2020"
                        },
                        legend: {
                            display: false
                        }
                    },
                    maintainAspectRatio: true,
                    responsive: true,
                }}
            />

        </div>
    );
}

/*
* Funciones auxiliares para pintar los gráficos
*/
const getDataColors = opacity => {
    const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#3A8F54', '#ff0000', '#d6ff00', '#0038ff']
    return colors.map(color => opacity ? `${color + opacity}` : color)
}

export default LineChart;
