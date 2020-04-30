import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import Copyright from './components/Copyright/Copyright';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#004b3c',
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Topbar></Topbar>
        <Container maxWidth="md">
          <Header></Header>
          <Calculator></Calculator>
          <Copyright></Copyright>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
