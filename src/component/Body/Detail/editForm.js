import React, { Component } from 'react';

export default class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
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
  handleSubmit = (event) => {
    this.props.onSaveEdit(this.state.user)
  }
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input
            type="text"
            placeholder="Name"
            value={this.state.user.name}
            className="form-control"
            name="name"
            onChange={(event) => this.handleChange(event)}>
            </input>
          </div>
          <div className="form-group">
            <input
            type="text"
            placeholder="Email"
            value={this.state.user.email}
            className="form-control"
            name="email"
            onChange={(event) => this.handleChange(event)}>
            </input>
          </div>
          <button
          type="submit"
          className="btn btn-primary float-left"
          onClick={() => this.props.onCancelEdit(false, -1)}>
            Cancel
          </button>
          <button
          type="submit"
          className="btn btn-primary float-right"
          onClick={(event) => this.handleSubmit(event)}>
            Save
          </button>
        </form>
      </div>
    );
  }
}
