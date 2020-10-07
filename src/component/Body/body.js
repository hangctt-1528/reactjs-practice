import React, { Component } from 'react';
import '../../App.css';
import UserList from './List/userList';
import EditDetail from './Detail/editDetail';

export default class Body extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userList: [
        {name: "Vo Tong", email: "tongA@gmail.com"},
        {name: "Hoang Ha Phuong", email: "tongA@gmail.com"},
        {name: "Hong Yen", email: "tongA@gmail.com"},
        {name: "Linh La", email: "tongA@gmail.com"},
        {name: "Hoang Thu Ha", email: "tongA@gmail.com"},
        {name: "Phanh Lee", email: "tongA@gmail.com"},
      ],
      isEdit: false,
      editIndex: -1,
      currentUser: {}
    };
    this.HandleChangeEdit = this.HandleChangeEdit.bind(this);
    this.UpdateUserList = this.UpdateUserList.bind(this);
    this.DeleteUser = this.DeleteUser.bind(this);
  }
  HandleChangeEdit (editFlag, index, user) {
    this.setState({isEdit: editFlag, editIndex: index, currentUser: user})
  }
  async UpdateUserList (user) {
    const userList = [...this.state.userList];

    userList[this.state.editIndex] = user;
    await this.setState({
      userList: userList,
      isEdit: false,
      editIndex: -1,
      currentUser: {}
    });
  }
  async DeleteUser (user) {
    const userList = [...this.state.userList];
    const index = userList.indexOf(user);
    userList.splice(index, 1);
    await this.setState({
      userList: userList,
      isEdit: false,
      editIndex: -1,
      currentUser: {}
    });
  }
  render() {
    return (
      <div className="App-body row">
        <UserList
        userList={this.state.userList}
        onChangeEdit={this.HandleChangeEdit}
        isEdit={this.state.isEdit}
        editIndex={this.state.editIndex}
        onDeleteUser={this.DeleteUser} />
        <EditDetail
        currentUser={this.state.currentUser}
        isEdit={this.state.isEdit}
        editIndex={this.state.editIndex}
        onChangeEdit={this.HandleChangeEdit}
        onSaveEdit={this.UpdateUserList} />
      </div>
    );
  }
}
