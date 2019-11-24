import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Moment from 'moment';
import TopBar from './TopBar'

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
                <TopBar title="Confirmation" />
                <Container>
                    <Grid container spacing={3}>
                        <Grid 
                            item 
                            xl={12}
                            lg={12}
                            sm={12}
                            xs={12} >
                        </Grid>
                        <Grid 
                            item 
                            xl={6}
                            lg={6}
                            sm={6}
                            xs={12} >
                            Name : <span className="output">{title} {firstName} {lastName}</span>
                        </Grid>
                        <Grid 
                            item 
                            xl={6}
                            lg={6}
                            sm={6}
                            xs={12} >
                            Date of Birth : <span className="output">{Moment(dob).format('YYYY-MM-DD')}</span>
                        </Grid>
                        <Grid 
                            item 
                            xl={6}
                            lg={6}
                            sm={6}
                            xs={12} >
                            Gender : <span className="output">{(gender === "") ? ("NA") :(gender)}</span>
                        </Grid>
                        <Grid 
                            item 
                            xl={6}
                            lg={6}
                            sm={6}
                            xs={12} >
                            Email Address : <span className="output">{ email}</span>
                        </Grid>
                        <Grid 
                            item 
                            xl={6}
                            lg={6}
                            sm={6}
                            xs={12} >
                            Telephone No. : <span className="output">{ tel }</span>
                        </Grid>
                        <Grid 
                            item 
                            xl={6}
                            lg={6}
                            sm={6}
                            xs={12} >
                            Loan Amount : <span className="output">{ amount }</span>
                        </Grid>
                        <Grid 
                            item 
                            xl={6}
                            lg={6}
                            sm={6}
                            xs={12} >
                            Loan Tenure (Duration) : <span className="output">{ tenure } Years</span>
                        </Grid>
                        <Grid 
                            item 
                            xl={6}
                            lg={6}
                            sm={6}
                            xs={12} >
                            Loan Purpose : <span className="output">{ purpose }</span>
                        </Grid>
                        {(purpose === "Wedding") ? (
                        <Grid 
                            item 
                            xl={6}
                            lg={6}
                            sm={6}
                            xs={12} >
                            wedding Date : <span className="output">{Moment(weddingDate).format('YYYY-MM-DD')}</span>
                        </Grid>
                            ) : ('')}
                        <Grid 
                            item 
                            align="center"
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
                </Container>
            </div>
        )
    }
}

export default Confirmation;