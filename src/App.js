import React, { Component } from 'react';
import './App.css';
import MainForm from './components/MainForm';
import Container from '@material-ui/core/Container';
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {

  render() {
    return(
      <Container>
        <MainForm />
      </Container>
    )
  }
}

export default App;