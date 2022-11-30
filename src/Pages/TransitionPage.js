import TransitionsTable from "../Components/TransitionsTable/TransitionsTable"
import React from "react";
import axios from "axios";


class TransitionPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            transitions: [],
            loaded:false
        };
    }

    async componentDidMount(){
        const response = await axios.get("http://localhost:3001/transitions");
        this.setState({
            transitions: response.data.transitions,
            loaded: true,
        });
    };


    render(){
        if(this.state.loaded){
            console.log(this.state);
            return (
                <div className="Page">
                    <TransitionsTable transitions={this.state.transitions}/>
                </div>
            );
        }else{
            return(
                <div className="Page">
                    It's just loading
                </div>
            )
        }
    }
}

export default TransitionPage;
