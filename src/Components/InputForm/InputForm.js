import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import {Button, FormGroup, MenuItem, Select, Switch, TextField} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { DatePicker } from "react-rainbow-components";
import axios from 'axios';
import Transaction from '../../Model/Transaction';
import './InputFrom.css';

function InputForm() {

    const [state, setState] = React.useState({
            category:"",
            date: new Date(),
            amount: 0,
            transactionName: "",
            transactionDescription: "",
            essential: true
    });

    const changeCategory = (event) => {
        setState(prevState => {
            let state = Object.assign({}, prevState);
            state.category = event.target.value;
            return state;
        });
    };
    const changeTransitionName = (event) =>{
        setState(prevState => {
            let state = Object.assign({}, prevState);
            state.transactionName = event.target.value;
            return state;
        });
    };
    const changeTransitionDescription = (event) =>{
        setState(prevState => {
            let state = Object.assign({}, prevState);
            state.transactionDescription = event.target.value;
            return state;
        });
    };
    const changeAmount = (event) =>{
        setState(prevState => {
            let state = Object.assign({}, prevState);
            state.amount = event.target.value;
            return state;
        });
    };
    const changeEssential = () =>{
        setState(prevState => {
            let state = Object.assign({}, prevState);
            state.essential = !state.essential;
            return state;
        })
    }

    const submitForm = async () => {
        const transaction = new Transaction(state.transactionName, state.transactionDescription, parseInt(state.amount), state.category, state.essential, state.date);
        console.log(transaction);
        try{
            await axios.post("http://localhost:3001/insert-transaction", transaction);
            alert("Transaction Inserted");
        }catch(e){
            console.log(e);
        }

    }

    return (
        <div className="table">
                <div className="form">
                    <div className="form-row">
                        <div className="text-field">
                            <TextField
                                id="outlined-basic"
                                label="Transaction Name"
                                variant="outlined"
                                value={state.transactionName}
                                onChange={changeTransitionName}
                            />
                        </div>
                        <div className="text-field">
                            <FormControl>
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={state.amount}
                                    onChange={changeAmount}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Amount"
                                />
                            </FormControl>

                        </div>
                        <div className="text-field">
                            <FormControl fullWidth sx={{minWidth: "180px" }}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={state.category}
                                    label="Category"
                                    onChange={changeCategory}
                                >
                                    <MenuItem value={"Meal"}>Meal</MenuItem>
                                    <MenuItem value={"Grocery"}>Grocery</MenuItem>
                                    <MenuItem value={"Fee"}>Fee</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="form-row">
                        <FormControl fullWidth sx={{ m: 1, maxWidth: "670px" }}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Transaction Description"
                                multiline
                                rows={4}
                                value={state.transactionDescription}
                                onChange={changeTransitionDescription}
                            />
                        </FormControl>
                    </div>
                    <div className="form-row">
                        <div className= "text-field">
                            <FormGroup>
                                <InputLabel htmlFor="outlined-adornment-amount">Essential</InputLabel>
                                <Switch
                                    checked={state.essential}
                                    onChange={changeEssential}
                                    inputProps={{ 'aria-label': 'Switch A' }}
                                />
                            </FormGroup>
                        </div>
                        <div className = "text-field">
                            <div className="date-picker">
                                <DatePicker
                                    id="datePicker-1"
                                    value={state.date}
                                    minDate={new Date(2021, 10, 30)}
                                    maxDate={new Date(2022, 11, 30)}
                                    label="Transaction date"
                                    onChange={value => setState(prevState => {
                                        let state = Object.assign({}, prevState);
                                        state.date = value;
                                        return state;
                                    })}
                                    formatStyle="large"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <Button variant="contained" onClick={submitForm}>Submit</Button>
                    </div>
                </div>
        </div>
    );
}

export default InputForm;