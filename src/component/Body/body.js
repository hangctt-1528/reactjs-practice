import React, { Component } from 'react';
import '../../App.css';
import UserList from './List/userList';
import EditDetail from './Detail/editDetail';

export default class Body extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userList: [
        {id: 0, name: "Tran Van Tong 1", email: "tongA@gmail.com"},
        {id: 1, name: "Hoang Ha Phuong 2", email: "tongA@gmail.com"},
        {id: 2, name: "Chu Hong Yen 3", email: "tongA@gmail.com"},
        {id: 3, name: "Chu Hong Nhi 4", email: "tongA@gmail.com"},
        {id: 4, name: "Hoang Thu Ha 5", email: "tongA@gmail.com"},
        {id: 5, name: "Ha Phuong Phuong 6", email: "tongA@gmail.com"},
        {id: 6, name: "Hoang Ha Phuong 7", email: "tongA@gmail.com"},
        {id: 7, name: "Chu Hong Yen 8", email: "tongA@gmail.com"},
        {id: 8, name: "Chu Hong Nhi 9", email: "tongA@gmail.com"},
        {id: 9, name: "Hoang Thu Ha 10", email: "tongA@gmail.com"},
        {id: 10, name: "Ha Phuong Phuong 11", email: "tongA@gmail.com"},
        {id: 11, name: "Ha Phuong Phuong 12", email: "tongA@gmail.com"},
        {id: 12, name: "Hoang Ha Phuong 13", email: "tongA@gmail.com"},
        {id: 13, name: "Chu Hong Yen 14", email: "tongA@gmail.com"},
        {id: 14, name: "Chu Hong Nhi 15", email: "tongA@gmail.com"},
        {id: 15, name: "Hoang Thu Ha 16", email: "tongA@gmail.com"},
        {id: 16, name: "Ha Phuong Phuong 17", email: "tongA@gmail.com"},
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

    const listUser = userList.map(item => 
      item.id === user.id ? user : item );
    await this.setState({
      userList: listUser,
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
