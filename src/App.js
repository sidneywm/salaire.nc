import React from 'react';

import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
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
          <Main></Main>
          <Copyright></Copyright>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
