import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container';

import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import Copyright from './components/Copyright/Copyright';

function App() {
  return (
    <div>
      <Topbar></Topbar>
      <Container maxWidth="md">
        <Header></Header>
        <Calculator></Calculator>
        <Copyright></Copyright>
      </Container>
    </div>
  );
}

export default App;
