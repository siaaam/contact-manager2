import React, { Component } from 'react';
import contacts from '../data.json';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: contacts,
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h2 className="text-center py-4">All contacts goes here</h2>
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </div>
    );
  }
}

export default Contacts;
