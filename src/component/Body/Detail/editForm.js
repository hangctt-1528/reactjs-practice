import React, { Component } from 'react';
import WrapperEdit from './wrapperEdit';

export default class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: this.props.currentUser.id,
        name: this.props.currentUser.name,
        email: this.props.currentUser.email
      }
    }
  }
  handleChange(event) {
    const target = event.target.name;
    const { user } = this.state;
    user[target] = event.target.value;

    this.setState({
        user,
    });
  }
  render() {
    return (
      <div>
        <WrapperEdit
        currentUser={this.state.user}
        onSaveEdit={this.props.onSaveEdit}
        onCancelEdit={this.props.onCancelEdit}>
          <input
          type="text"
          placeholder="Name"
          name="name"/>
          <input
          type="text"
          placeholder="Email"
          name="email"/>
        </WrapperEdit>
      </div>
    );
  }
}
