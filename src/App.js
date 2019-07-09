import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import {theme, GlobalStyle} from './Styles'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
         <div className="App">
      <GlobalStyle />
     <Header />
     <Home />
    </div>
    </ThemeProvider>
  );
}

export default App;
