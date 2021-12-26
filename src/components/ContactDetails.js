import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ContactDetails extends Component {
  state = {
    contact: {},
  };
  findId() {
    const id = this.props.match.params.id;
    const { contacts } = this.props;
    const matchResult = contacts.find((contact) => contact.id === Number(id));
    this.setState({ contact: matchResult });
  }
  componentDidMount() {
    this.findId();
  }
  render() {
    const { contact } = this.state;

    return (
      <>
        <div className="card contact">
          <div>
            <img src={contact.picture} alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {contact.first_name} {contact.last_name}
            </h5>
            <p className="card-text">{contact.email}</p>
            <p className="card-text">{contact.gender}</p>
            <p className="card-text">{contact.birthday}</p>
          </div>
          <button
            className="btn btn-danger"
            onClick={this.props.history.goBack}
          >
            Go Back
          </button>
        </div>
        {/* <div>{JSON.stringify(this.state.contact)}</div> */}
      </>
    );
  }
}

export default withRouter(ContactDetails);
