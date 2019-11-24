import React, { Component } from 'react';
import './App.css';
import MainForm from './components/MainForm';
import Container from '@material-ui/core/Container';

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