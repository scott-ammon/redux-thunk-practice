import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { createGlobalStyle } from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;

const GlobalStyle = createGlobalStyle`
  h3, h4, p {
    margin: 0;
  }
  div {
    margin: 1rem;
    border-radius: .5rem;
  }
`;