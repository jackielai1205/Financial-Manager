import TransactionsTable from "../Components/TransactionsTable/TransactionsTable"
import React from "react";
import axios from "axios";


class TransactionPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            loaded:false
        };
    }

    async componentDidMount(){
        try{
            const response = await axios.get("http://localhost:3001/transactions/get-transaction-list");
            this.setState({
                transactions: response.data.transactions,
                loaded: true,
            });
        }catch(e){
            console.log("Unable to retrieve data from api");
            this.setState({
                transactions: [],
                loaded: true
            })
        }
    };


    render(){
        return (
            <div className="Page">
                <TransactionsTable transactions={this.state.transactions}/>
            </div>
        );
    }
}

export default TransactionPage;
