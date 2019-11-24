import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



class FormTwo extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
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
                        <h1>Step 2</h1>
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                        <TextField 
                            id="amount" 
                            label="Loan Amount" 
                            variant="outlined"
                            placeholder='Loan Amount'
                            onChange={this.props.handleChange('amount')}
                            defaultValue={values.amount}
                            fullWidth
                            />
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-label">Loan Tenure</InputLabel>
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
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-label">Loan Purpose</InputLabel>
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
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                        <TextField 
                            id="weddingDate" 
                            label="Wedding Date" 
                            variant="outlined"
                            placeholder='Wedding Date'
                            onChange={this.props.handleChange('weddingDate')}
                            defaultValue={values.weddingDate}
                            fullWidth
                                />
                    </Grid>
                    <Grid 
                        item 
                        align="right"
                        xl={12}
                        lg={12}
                        sm={12} 
                        xs={12} >
                            checkbox goes here
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
                        <Button 
                            variant="contained"
                            onClick={this.saveAndContinue}
                            color="primary">
                            Next
                        </Button>
                    </Grid>
                </Grid>
                {/* <h1>Step 2</h1>
                <div class="row">
                    <div class="input-field col s6">
                        <input 
                            id="amount" 
                            type="text" 
                            placeholder='Loan Amount'
                            onChange={this.props.handleChange('amount')}
                            defaultValue={values.firstName}
                            class="validate" />
                        <label class="active" for="amount">Loan Amount</label>
                    </div>
                    <div class="input-field col s6">
                    <select id="tenure">
                            <option value="" disabled selected>Select Title</option>
                            <option value="1">1 Year</option>
                            <option value="2">2 Years</option>
                            <option value="3">3 Years</option>
                            <option value="4">4 Years</option>
                            <option value="5">5 Years</option>
                            <option value="6">6 Years</option>
                        </select>
                        <label class="active" for="tenure">Loan Tenure</label>
                    </div>
                    <div class="input-field col s6">
                    <select id="purpose">
                            <option value="" disabled selected>Select Title</option>
                            <option value="Renovation">Renovation</option>
                            <option value="Car">Car</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Travel">Travel</option>
                            <option value="Business Expansion">Business Expansion</option>
                            <option value="Education">Education</option>
                            <option value="Investment">Investment</option>
                        </select>
                        <label class="active" for="purpose">Loan Purpose</label>
                    </div>
                    <div class="input-field col s6">
                        <input 
                            id="weddingDate" 
                            type="text" 
                            placeholder='YYYY-MM-DD'
                            onChange={this.props.handleChange('weddingDate')}
                            defaultValue={values.weddingDate}
                            class="validate" />
                        <label class="active" for="weddingDate">Wedding Date</label>
                    </div>
                    <div class="input-field col s6">
                    <p>
      <label>
        <input type="checkbox" />
        <span>I agree to terms & conditions</span>
      </label>
    </p>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.goBack}>Go Back
                            <i class="material-icons right">send</i>
                        </button>
                        <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.saveAndContinue}>Save
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default FormTwo;