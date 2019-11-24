import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class FormOne extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
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
                        <h1>Step 1</h1>
                    </Grid>
                    <Grid 
                        item 
                        xl={2}
                        lg={2}
                        sm={2} 
                        xs={12} >
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-label">Title</InputLabel>
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
                    </Grid>
                    <Grid 
                        item 
                        xl={5}
                        lg={5}
                        sm={5} 
                        xs={12} >
                        <TextField 
                            id="firstName" 
                            label="First Name" 
                            variant="outlined"
                            placeholder='First Name'
                            onChange={this.props.handleChange('firstName')}
                            defaultValue={values.firstName}
                            fullWidth
                                />
                    </Grid>
                    <Grid 
                        item 
                        xl={5}
                        lg={5}
                        sm={5} 
                        xs={12} >
                        <TextField 
                            id="lastName" 
                            label="Last Name" 
                            variant="outlined"
                            placeholder='Last Name'
                            onChange={this.props.handleChange('lastName')}
                            defaultValue={values.lastName}
                            fullWidth
                                />
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                        <TextField 
                            id="dob" 
                            label="Date of Birth" 
                            variant="outlined"
                            placeholder='Date of Birth'
                            onChange={this.props.handleChange('dob')}
                            defaultValue={values.dob}
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
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
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
                            id="email" 
                            label="Email Address" 
                            variant="outlined"
                            placeholder='Email Address'
                            onChange={this.props.handleChange('email')}
                            defaultValue={values.email}
                            fullWidth
                         />
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={12} >
                        <TextField 
                            id="tel" 
                            label="Telephone No." 
                            variant="outlined"
                            placeholder='Telephone No.'
                            onChange={this.props.handleChange('tel')}
                            defaultValue={values.tel}
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
                        <Button 
                            variant="contained"
                            onClick={this.saveAndContinue}
                            color="primary">
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default FormOne;