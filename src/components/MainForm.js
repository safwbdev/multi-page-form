import React, { Component } from 'react';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import Confirmation from './Confirmation';

class MainForm extends Component {
    state = {
        step: 1,
        title: '',
        firstName: '',
        lastName: '',
        dob: new Date(),
        gender: '',
        email: '',
        tel: '',
        amount: '',
        tenure: '',
        purpose: '',
        weddingDate: new Date(),
        tnc: false
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    tncAgree = () => {
        const { tnc } = this.state
        this.setState({
            tnc : !tnc
        })
    }

    restore = () => {
        this.setState({
            step: 1,
            title: '',
            firstName: '',
            lastName: '',
            dob: new Date(),
            gender: '',
            email: '',
            tel: '',
            amount: '',
            tenure: '',
            purpose: '',
            weddingDate: new Date(),
            tnc: false
        })
    }
    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    saveDate = input => date => {
        this.setState({ [input]: date })
    }
    
    render(){
        const {step} = this.state;
        const { title, firstName, lastName, dob, gender, email, tel, amount, tenure, purpose, weddingDate, tnc } = this.state;
        const values = { title, firstName, lastName, dob, gender, email, tel, amount, tenure, purpose, weddingDate, tnc };
        switch(step) {
        case 1:
            return <FormOne 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    saveDate={this.saveDate}
                    values={values}
                    />
        case 2:
            return <FormTwo 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    saveDate={this.saveDate}
                    tncAgree = {this.tncAgree}
                    values={values}
                    />
        case 3:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    restoreBack={this.restore}
                    values={values}
                    />
        default:
            return null
        }
    }
}

export default MainForm;
