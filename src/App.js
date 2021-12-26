import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import ContactDetails from './components/ContactDetails';
import contacts from './data.json';

class App extends Component {
  state = {
    contacts,
  };
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/contacts/:id" exact>
            <ContactDetails contacts={contacts} />
          </Route>
          <Route path="/contacts" exact>
            <Contacts contacts={contacts} />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
