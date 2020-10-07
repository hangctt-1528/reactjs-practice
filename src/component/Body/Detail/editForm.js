import React, { Component } from 'react';
import submitForm from './submitForm';

class EditForm extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <input
          type="text"
          placeholder="Name"
          value={this.props.user.name}
          className="form-control"
          name="name"
          onChange={(event) => this.props.handleChange(event)}>
          </input>
        </div>
        <div className="form-group">
          <input
          type="text"
          placeholder="Email"
          value={this.props.user.email}
          className="form-control"
          name="email"
          onChange={(event) => this.props.handleChange(event)}>
          </input>
        </div>
      </div>
    );
  }
}

export default submitForm()(EditForm);

