import TransitionsTable from "../Components/TransitionsTable/TransitionsTable"
import React from "react";
import axios from "axios";


function TransitionPage() {

    const [transitions, setTransitions] = React.useState("");
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/transitions");
            console.log(response);
        } catch (e) {
            console.log("Error to fetch data");
        }

    };

    fetchData();

    return (
        <div className="Page">
            <TransitionsTable />
        </div>
    );
}

export default TransitionPage;
