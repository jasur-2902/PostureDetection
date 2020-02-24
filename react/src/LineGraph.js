import React, { Component } from 'react'
import Chart from "chart.js";
// import classes from "./chart.module.css";

export default class LineGraph extends Component {
    constructor(props) {
        super(props);
        let chartRef = React.createRef();
        this.state = {
            chartRef: chartRef
        }
    }

    componentDidMount() {
        const myChartRef = this.state.chartRef.current.getContext("2d");


        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.props.labels,
                datasets: [
                    {
                        label: "Scores",
                        data: this.props.data,
                        pointBackgroundColor: "rgb(10, 20, 180, 0.8)",
                        borderColor: "rgb(10, 20, 180, 0.8)",
                        fill: false
                    }
                ]
            },
            options: {
                
            }
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart" width="150" height="50"
                    ref={this.state.chartRef}
                />
            </div>
        )
    }
}