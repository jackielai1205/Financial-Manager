import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import {Button, FormGroup, MenuItem, Select, Stack, Switch, TextField, Typography} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { DatePicker } from "react-rainbow-components";
import './InputFrom.css'

function InputForm() {

    const [state, setState] = React.useState({
            category:"",
            date: new Date(),
            amount: "",
            transitionName: "",
            transitionDescription: "",
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
            state.transitionName = event.target.value;
            return state;
        });
    };
    const changeTransitionDescription = (event) =>{
        setState(prevState => {
            let state = Object.assign({}, prevState);
            state.transitionDescription = event.target.value;
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

    return (
        <div className="table">
                <div className="form">
                    <div className="form-row">
                        <div className="text-field">
                            <TextField
                                id="outlined-basic"
                                label="Transition Name"
                                variant="outlined"
                                value={state.transitionName}
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
                                label="Transition Description"
                                multiline
                                rows={4}
                                value={state.transitionDescription}
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
                                    label="Transition date"
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
                        <Button variant="contained" onClick={()=>{
                            console.log(state);
                        }}>Submit</Button>
                    </div>
                </div>
        </div>
    );
}

export default InputForm;