import React, { Component } from 'react';
import TableUserList from './tableUserList';

export default class UserList extends Component {
  render() {
    return (
      <div className="col common user-list">
        <h2>List</h2>
        <TableUserList
          user={this.props.userList}
          onChangeIsEdit={this.props.onChangeEdit}
          isEdit={this.props.isEdit}
          editIndex={this.props.editIndex}
          onDeleteUser={this.props.onDeleteUser} />
      </div>
    );
  }
}
