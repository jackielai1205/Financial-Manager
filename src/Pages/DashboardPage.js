import React from 'react';
import './DashboardPage.css';
import DoughnutChart from '../Components/DountnutChart/DoughnutChart'
import axios from "axios";

async function fetchDashboardData(){
    const essential = await axios.get("localhost:3001/transactions/essential");
}

class DashboardPage extends React.Component{
    render(){
        return (
            <div className="Page">
                <div className="dashboard">
                    <div className="dashboard-content">
                        <DoughnutChart data={{
                            transition: "hi",
                            title: "Total cost"
                        }}/>
                        <DoughnutChart data={{
                            title: "Total cost 2"
                        }}/>
                    </div>
                    <div className="dashboard-content">
                        <DoughnutChart data={{
                            title: "Total cost 3"
                        }}/>
                        <DoughnutChart data={{
                            title: "Total cost 4"
                        }}/>
                    </div>
                    <div className="dashboard-content">
                        <DoughnutChart data={{
                            title: "Total cost 5"
                        }}/>
                        <DoughnutChart data={{
                            title: "Total cost 6"
                        }}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardPage;
