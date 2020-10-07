import React, { Component } from 'react';
import '../../../App.css';

export default class TableUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      hoverIndex: -1
    }
  }
  mouseEnter = (index) => {
    if (!this.props.isEdit) {
      this.setState({ isHover: true, hoverIndex: index })
    }
  }
  mouseLeave = () => {
    if (!this.props.isEdit) {
      this.setState({ isHover: false, hoverIndex: -1 })
    }
  }
  render() {
    const userList = this.props.user;
    const user = userList.map((item, index) => {
      return <tr
             key={index}
             onMouseEnter={() => this.mouseEnter(index)}
             onMouseLeave={this.mouseLeave}>
              <td>{item.name}</td>
              <td>{item.email}</td>
                <td>
                  {(this.state.isHover && this.state.hoverIndex === index) && (
                    <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={()=>this.props.onChangeIsEdit(true, index, item)}
                    >
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  {(this.state.isHover && this.state.hoverIndex === index) && (
                    <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={()=>this.props.onDeleteUser(item)}>
                      Delete
                    </button>
                  )}
                </td>
            </tr>
      });
    return (
      <div className="table">
        <table className="table table-responsive-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{user}</tbody>
          
        </table>
      </div>
    );
  }
}
