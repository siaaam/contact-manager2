import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import Nav from './components/Nav';
import ContactDetails from './components/ContactDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/contacts/:id">
            <ContactDetails />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
