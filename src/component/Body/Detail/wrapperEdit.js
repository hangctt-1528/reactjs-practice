import React, { Component } from 'react';
import Validator from '../../../utils/validator';

export default class wrapperEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: this.props.currentUser.id,
        name: this.props.currentUser.name,
        email: this.props.currentUser.email
      },
      errors: ''
    };
    const rules = [
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'The name field is required.',
      },
      {
        field: 'name',
        method: 'isLength',
        args: [{max: 10}],
        validWhen: true,
        message: 'The name must be at least 10 characters.',
      },
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'The email field is required.',
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'The email must be a valid email address.',
      }
    ];
    this.validator = new Validator(rules);
  }
  handleChange(event) {
    const target = event.target.name;
    const { user } = this.state;
    user[target] = event.target.value;

    this.setState({
      user,
    });
  }
  handleSubmit = async (event) => {
    const errors = await this.validator.validate(this.state.user);
    await this.setState({errors});
    if (Object.keys(this.state.errors).length === 0) {
      this.props.onSaveEdit(this.state.user)
    }
  }
  render() {
    const InputForm = this.props.children.map((child, index) => {
      return (
              <div className="form-group" key={index}>
                <child.type
                { ...child.props }
                onChange={(event) => this.handleChange(event)}
                className={`form-control ${this.state.errors[child.props.name] ? 'is-invalid' : ''}`}
                value={this.state.user[child.props.name]} />
                {this.state.errors[child.props.name] && <div className="invalid-feedback" style={{display: 'block'}}>{this.state.errors[child.props.name]}</div>}
              </div>)
    });
    return (
      <form>
        {InputForm}
        <button
          type="submit"
          className="btn btn-primary float-left"
          onClick={() => this.props.onCancelEdit(false, -1)}>
            Cancel
          </button>
          <button
          type="button"
          className="btn btn-primary float-right"
          onClick={(event) => this.handleSubmit(event)}>
            Save
          </button>
      </form>
    )
  }
}
