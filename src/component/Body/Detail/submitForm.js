import React, { Component } from 'react';

function submitForm () {
  return function (wrapperComponent) {
    class Form extends Component {
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
              <wrapperComponent
                {...this.props}
                user={this.state.user}
                onChangeInput={this.handleChange} />
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
  }
}

export default submitForm;
