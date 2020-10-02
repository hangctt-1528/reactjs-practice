import React, { Component } from 'react';
import EditForm from './editForm'

export default class EditDetail extends Component {
  render() {
    return (
      <div className="col common user-list">
        <h2>Detail</h2>
        {this.props.isEdit &&
          (<EditForm
          onCancelEdit={this.props.onChangeEdit}
          currentUser={this.props.currentUser}
          onSaveEdit={this.props.onSaveEdit} />
          )
        }
      </div>
    );
  }
}
