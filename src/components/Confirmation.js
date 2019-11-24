import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                            Full Name: 
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                        {title} {firstName} {lastName}
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                        Date of Birth: 
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                        {dob}
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                        Gender:
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                        { gender }
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6}
                        xs={6} >
                        Email Address :
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                       { email}
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                        Telephone No. :
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                       { tel }
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                        Loan Amount :
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                       { amount }
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                        Loan Tenure (Duration) :
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                       { tenure }
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                        Loan Purpose :
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                       { purpose }
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                        wedding Date :
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={6}
                        sm={6} 
                        xs={6} >
                       { weddingDate }
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
                            onClick={this.returnHome}
                            color="primary">
                            Finish & start over
                        </Button>
                    </Grid>
                </Grid>
                {/* <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                
                <div class="row">
                    <div class="input-field col s6">{ title }</div>
                    <div class="input-field col s6">{ firstName }</div>
                    <div class="input-field col s6">{ lastName }</div>
                    <div class="input-field col s6">{ dob }</div>
                    <div class="input-field col s6">{ gender }</div>
                    <div class="input-field col s6">{ email }</div>
                    <div class="input-field col s6">{ tel }</div>
                    <div class="input-field col s6">{ amount }</div>
                    <div class="input-field col s6">{ tenure }</div>
                    <div class="input-field col s6">{ purpose }</div>
                    <div class="input-field col s6">{ weddingDate }</div>
            </div> */}
            </div>
        )
    }
}

export default Confirmation;