import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DatePicker from "react-datepicker";


class FormTwo extends Component{

    state = {
        amountRequired: false,
        amountFormat: false,
        tenureRequired: false,
        purposeRequired: false,
        agreedTNC: false,
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        let { values } = this.props;
        let passCount = 0;

        if (values.amount === ''){
            this.setState({amountRequired : true})
        } else {
            this.setState({amountRequired : false})
            passCount++;
        }
        if ((values.amount >= 1) && (values.amount <= 1000000)){
            this.setState({amountFormat : false})
            passCount++;
        } else {
            this.setState({amountFormat : true})
        }
        if (values.tenure === ''){
            this.setState({tenureRequired : true})
        } else {
            this.setState({tenureRequired : false})
            passCount++;
        }
        if (values.purpose === ''){
            this.setState({purposeRequired : true})
        } else {
            this.setState({purposeRequired : false})
            passCount++;
        }
        if (!values.tnc){
            this.setState({agreedTNC : true})
        } else {
            this.setState({agreedTNC : false})
            passCount++;
        }
        if (passCount >= 5){
            this.props.nextStep();
        }
    }

    goBack  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
            <div>
                <Grid container spacing={3}>
                    <Grid 
                        item 
                        xl={12}
                        lg={12}
                        sm={12} 
                        xs={12} >
                        <h1>Loan Details</h1>
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                        <TextField 
                            required
                            type="number"
                            id="amount" 
                            label="Loan Amount" 
                            variant="outlined"
                            placeholder='Loan Amount'
                            onChange={this.props.handleChange('amount')}
                            defaultValue={values.amount}
                            fullWidth
                            />
                            {(this.state.amountRequired) ? (<span>required</span>) : ('')}
                            {(this.state.amountFormat) ? (<span>Must be between 1 and 1,000,000</span>) : ('')}
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-label">Loan Tenure*</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={values.tenure}
                            onChange={this.props.handleChange('tenure')}
                            >
                                <MenuItem value={1}>1 Year</MenuItem>
                                <MenuItem value={2}>2 Years</MenuItem>
                                <MenuItem value={3}>3 Years</MenuItem>
                                <MenuItem value={4}>4 Years</MenuItem>
                                <MenuItem value={5}>5 Years</MenuItem>
                                <MenuItem value={6}>6 Years</MenuItem>
                            </Select>
                        </FormControl>
                        {(this.state.tenureRequired) ? (<span>required</span>) : ('')}
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-label">Loan Purpose*</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={values.purpose}
                            onChange={this.props.handleChange('purpose')}
                            >
                                <MenuItem value={"Renovation"}>Renovation</MenuItem>
                                <MenuItem value={"Car"}>Car</MenuItem>
                                <MenuItem value={"Wedding"}>Wedding</MenuItem>
                                <MenuItem value={"Travel"}>Travel</MenuItem>
                                <MenuItem value={"Business Expansion"}>Business Expansion</MenuItem>
                                <MenuItem value={"Education"}>Education</MenuItem>
                                <MenuItem value={"Investment"}>Investment</MenuItem>
                            </Select>
                        </FormControl>
                        {(this.state.purposeRequired) ? (<span>required</span>) : ('')}
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                            {values.purpose === "Wedding" ? (
                                <DatePicker
                                selected={values.weddingDate}
                                dateFormat="yyyy-MM-dd"
                                onChange={this.props.saveDate('weddingDate')}
                            />
                            ) : ("")
        }
                        
                    </Grid>
                    <Grid 
                        item 
                        align="right"
                        xl={12}
                        lg={12}
                        sm={12} 
                        xs={12} >
                            {/* checkbox goes here */}

                        <FormGroup row>
                            <FormControlLabel control={<Checkbox checked={this.tnc} onChange={this.props.tncAgree} value="tnc" />} label="I agree to the Terms and conditions" />

                        {(this.state.agreedTNC) ? (<span>Please agree to the Terms & Conditions</span>) : ('')}
                        </FormGroup>
                    </Grid>
                    <Grid 
                        item 
                        align="left"
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                        <Button 
                            variant="contained"
                            onClick={this.goBack}
                            color="primary">
                            Go Back
                        </Button>
                    </Grid>
                    <Grid 
                        item 
                        align="right"
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                        {/* {((values.amount !== "") && (values.tenure !== "") && (values.purpose !== "") && (values.tnc) )
                        
                         ? 
                            ( */}
                                <Button 
                                    variant="contained"
                                    onClick={this.saveAndContinue}
                                    color="primary">
                                    Next
                                </Button>
                            {/* ) : (
                                <Button 
                                    variant="contained"
                                    disabled
                                    color="primary">
                                    Next
                                </Button>)
                        } */}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default FormTwo;