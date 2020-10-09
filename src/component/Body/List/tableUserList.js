import React, { Component } from 'react';
import Pagination from '../../common/pagination';

export default class TableUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      hoverIndex: -1,
      pageOfItems: [],
      pageIndex: 1,
      cursor: 0
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
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  escFunction = ( e ) => {
    console.log(e.keyCode)
    const { cursor, pageOfItems } = this.state
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
      console.log(this.state.cursor)
    } else if (e.keyCode === 40 && cursor < pageOfItems.length - 1) {
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
      console.log(this.state.cursor)
    }
  }
  componentWillMount() {
    document.addEventListener("keydown", this.escFunction.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction.bind(this));
  }
  render() {
    const userList = this.state.pageOfItems;
    const user = userList.map((item, index) => {
      return <tr
             key={index}
             onKeyDown={this.escFunction}
             onMouseEnter={() => this.mouseEnter(index)}
             onMouseLeave={this.mouseLeave}>
              <td>{item.name}</td>
              <td>{item.email}</td>
                <td>
                  {(this.state.isHover && this.state.hoverIndex === index) && (
                    <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={()=>this.props.onChangeIsEdit(true, item.id, item)}
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
      <div>
        <div className="table">
          <table className="table table-striped">
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
        <Pagination items={this.props.user} isEdit={this.props.isEdit} onChangePage={(pageIndex) => this.onChangePage(pageIndex)} />
      </div>
    );
  }
}
