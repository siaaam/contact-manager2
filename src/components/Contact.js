import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div className="card contact">
        <div className="card-body">
          <h5 className="card-title">
            {contact.first_name} {contact.last_name}
          </h5>
          <p className="card-text">{contact.email}</p>
          <p className="card-text">{contact.gender}</p>
          <p className="card-text">{contact.birthday}</p>
          <Link className="btn btn-primary" to={'contacts/' + contact.id}>
            View Details
          </Link>
        </div>
      </div>
    );
  }
}

export default Contact;
