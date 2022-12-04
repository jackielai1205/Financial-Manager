import React from "react";
import { Doughnut } from "react-chartjs-2";
import './DoughnutChart.css';
import { Chart as ChartJS } from "chart.js/auto";

const UserData = [
    {
        id: 1,
        category: 2016,
        amount: 80000,
    },
    {
        id: 2,
        category: 2017,
        amount: 45677,
    },
    {
        id: 3,
        category: 2018,
        amount: 78888,
    },
    {
        id: 4,
        category: 2019,
        amount: 90000,
    },
    {
        id: 5,
        category: 2020,
        amount: 4300,
    },
];

const data = {
    labels: UserData.map((data) => data.category),
    datasets: [
        {
            label: "Users Gained",
            data: UserData.map((data) => data.amount),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
        },
    ],
}

class PieChart extends React.Component{
    render() {
        return (
            <div className="doughnut-container">
                <div className="doughnut-title">{this.props.data.title}</div>
                <Doughnut data={data} />
            </div>
        )
    }
}

export default PieChart;