import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Moment from 'moment';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    returnHome  = (e) => {
        e.preventDefault();
        this.props.restoreBack();
    }

    render(){
        const {values: { title, firstName, lastName, dob, gender, email, tel, amount, tenure, purpose, weddingDate }} = this.props;

        console.log(this.props.values);

        return(
            <div>
                <Grid container spacing={3}>
                    <Grid 
                        item 
                        xl={12}
                        lg={12}
                        sm={12}
                        xs={12} >
                        <h1>Confirmation</h1>
                    </Grid>
                    <Grid 
                        item 
                        align="right"
                        xl={2}
                        lg={2}
                        sm={2}
                        xs={6} >
                            Full Name: 
                    </Grid>
                    <Grid 
                        item 
                        xl={10}
                        lg={10}
                        sm={10}
                        xs={6} >
                        {title} {firstName} {lastName}
                    </Grid>
                    <Grid 
                        item 
                        align="right"
                        xl={2}
                        lg={2}
                        sm={2}
                        xs={6} >
                        Date of Birth: 
                    </Grid>
                    <Grid 
                        item 
                        xl={10}
                        lg={10}
                        sm={10}
                        xs={6} >
                        {Moment(dob).format('YYYY-MM-DD')}
                    </Grid>
                    <Grid 
                        item 
                        align="right"
                        xl={2}
                        lg={2}
                        sm={2}
                        xs={6} >
                        Gender:
                    </Grid>
                    <Grid 
                        item 
                        xl={10}
                        lg={10}
                        sm={10}
                        xs={6} >
                        { gender }
                    </Grid>
                    <Grid 
                        item 
                        align="right"
                        xl={2}
                        lg={2}
                        sm={2}
                        xs={6} >
                        Email Address :
                    </Grid>
                    <Grid 
                        item 
                        xl={10}
                        lg={10}
                        sm={10}
                        xs={6} >
                       { email}
                    </Grid>
                    <Grid 
                        item 
                        align="right"
                        xl={2}
                        lg={2}
                        sm={2}
                        xs={6} >
                        Telephone No. :
                    </Grid>
                    <Grid 
                        item 
                        xl={10}
                        lg={10}
                        sm={10}
                        xs={6} >
                       { tel }
                    </Grid>
                    <Grid 
                        align="right"
                        item 
                        xl={2}
                        lg={2}
                        sm={2}
                        xs={6} >
                        Loan Amount :
                    </Grid>
                    <Grid 
                        item 
                        xl={10}
                        lg={10}
                        sm={10}
                        xs={6} >
                       { amount }
                    </Grid>
                    <Grid 
                        item 
                        align="right"
                        xl={2}
                        lg={2}
                        sm={2}
                        xs={6} >
                        Loan Tenure (Duration) :
                    </Grid>
                    <Grid 
                        item 
                        xl={10}
                        lg={10}
                        sm={10}
                        xs={6} >
                       { tenure } Years
                    </Grid>
                    <Grid 
                        item 
                        align="right"
                        xl={2}
                        lg={2}
                        sm={2}
                        xs={6} >
                        Loan Purpose :
                    </Grid>
                    <Grid 
                        item 
                        xl={10}
                        lg={10}
                        sm={10}
                        xs={6} >
                       { purpose }
                    </Grid>

                    {(purpose === "Wedding") ? (
                        <div>

                    <Grid 
                    item 
                    align="right"
                    xl={2}
                    lg={2}
                    sm={2}
                    xs={6} >
                    wedding Date :
                </Grid>
                <Grid 
                    item 
                    xl={10}
                    lg={10}
                    sm={10}
                    xs={6} >
                    {console.log(weddingDate)}
                </Grid>
                    </div>
                    ) : ('')}
                    <Grid 
                        item 
                        align="right"
                        xl={12}
                        lg={12}
                        sm={12}
                        xs={12} >
                        <Button 
                            variant="contained"
                            onClick={this.returnHome}
                            color="primary">
                            Finish & start over
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Confirmation;