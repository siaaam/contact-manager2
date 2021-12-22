import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Contacts />
      </>
    );
  }
}

export default App;
