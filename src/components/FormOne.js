import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DatePicker from "react-datepicker";

class FormOne extends Component{

    state = {
        titleRequired: false,
        fnameRequired: false,
        lnameRequired: false,
        emailRequired: false,
        emailFormat: false,
        telRequired: false,
        telFormat: false,
    }
    
    saveAndContinue = (e) => {
        e.preventDefault()
        let { values } = this.props;
        let passCount = 0;
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        if (values.title === ''){
            this.setState({titleRequired : true})
        } else {
            this.setState({titleRequired : false})
            passCount++;
        }
        if (values.firstName === ''){
            this.setState({fnameRequired : true})
        } else {
            this.setState({fnameRequired : false})
            passCount++;
        }
        if (values.lastName === ''){
            this.setState({lnameRequired : true})
        } else {
            this.setState({lnameRequired : false})
            passCount++;
        }
        if (values.email === ''){
            this.setState({emailRequired : true})
        } else {
            this.setState({emailRequired : false})
            passCount++;
        }
        if (!validEmailRegex.test(values.email)){
            this.setState({emailFormat : true})
        } else {
            this.setState({emailFormat : false})
            passCount++;
        }
        if (values.tel === ''){
            this.setState({telRequired : true})
        } else {
            this.setState({telRequired : false})
            passCount++;
        }
        if (values.tel.length !== 8){
            this.setState({telFormat : true})
        } else {
            this.setState({telFormat : false})
            passCount++;
        }
        if (passCount >= 7){
            this.props.nextStep()
        }
    }

    

    render(){
        const { values } = this.props;
        return(
            <div>
                <Grid container spacing={3}>
                    <Grid 
                        item 
                        xl={12}
                        lg={12}
                        sm={12} 
                        xs={12} >
                        <h1>Personal Details</h1>
                    </Grid>
                    <Grid 
                        item 
                        xl={2}
                        lg={2}
                        sm={2} 
                        xs={12} >
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-label">Title*</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={values.title}
                            onChange={this.props.handleChange('title')}
                            >
                                <MenuItem value={"Mr."}>Mr.</MenuItem>
                                <MenuItem value={"Mrs."}>Mrs.</MenuItem>
                                <MenuItem value={"Ms."}>Ms.</MenuItem>
                            </Select>
                        </FormControl>
                        {(this.state.titleRequired) ? (<span>required</span>) : ('')}

                        
                    </Grid>
                    <Grid 
                        item 
                        xl={5}
                        lg={5}
                        sm={5} 
                        xs={12} >
                        <TextField 
                            required
                            id="firstName" 
                            label="First Name" 
                            variant="outlined"
                            placeholder='First Name'
                            onChange={this.props.handleChange('firstName')}
                            defaultValue={values.firstName}
                            fullWidth
                                />
                        {(this.state.fnameRequired) ? (<span>required</span>) : ('')}
                    </Grid>
                    <Grid 
                        item 
                        xl={5}
                        lg={5}
                        sm={5} 
                        xs={12} >
                        <TextField 
                            required
                            id="lastName" 
                            label="Last Name" 
                            variant="outlined"
                            placeholder='Last Name'
                            onChange={this.props.handleChange('lastName')}
                            defaultValue={values.lastName}
                            fullWidth
                                />
                        {(this.state.lnameRequired) ? (<span>required</span>) : ('')}
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                        <DatePicker
                                selected={values.dob}
                                className="MuiInputBase-input MuiOutlinedInput-input"
                                dateFormat="yyyy-MM-dd"
                                onChange={this.props.saveDate('dob')}
                            />
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender (Optional)</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={values.gender}
                            onChange={this.props.handleChange('gender')}
                            >
                                <MenuItem value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Female"}>Female</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                        <TextField 
                            required
                            id="email" 
                            label="Email Address" 
                            variant="outlined"
                            placeholder='Email Address'
                            onChange={this.props.handleChange('email')}
                            defaultValue={values.email}
                            fullWidth
                         />
                         {(this.state.emailRequired) ? (<span>required</span>) : ('')}
                         {(this.state.emailFormat) ? (<span>wrong format</span>) : ('')}
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
                            id="tel" 
                            label="Telephone No." 
                            variant="outlined"
                            placeholder='Telephone No.'
                            onChange={this.props.handleChange('tel')}
                            defaultValue={values.tel}
                            fullWidth
                            />
                            {(this.state.telRequired) ? (<span>required</span>) : ('')}
                            {(this.state.telFormat) ? (<span>Must have 8 digits</span>) : ('')}
                    </Grid>
                    <Grid 
                        item 
                        align="right"
                        xl={12}
                        lg={12}
                        sm={12} 
                        xs={12} >
                        {/* {
                        ((values.title != "") && (values.firstName != "") && (values.lastName != "") && (values.dob != "") && (values.email != "") && (values.tel != ""))
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

export default FormOne;