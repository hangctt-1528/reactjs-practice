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
    this.escFunction = this.escFunction.bind(this);
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
  escFunction = (e) => {
    const { hoverIndex, pageOfItems } = this.state
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && hoverIndex > -1) {
      this.setState( prevState => ({
        hoverIndex: prevState.hoverIndex - 1
      }))
    } else if (e.keyCode === 40 && hoverIndex < pageOfItems.length - 1) {
      this.setState( prevState => ({
        hoverIndex: prevState.hoverIndex + 1
      }))
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
        onMouseEnter={() => this.mouseEnter(index)}
        onMouseLeave={this.mouseLeave}>
        <td className="name">{item.name}</td>
        <td className="email">{item.email}</td>
        <td className="edit-action">
          {(this.state.isHover && this.state.hoverIndex === index) && (
            <button
            type="button"
            className="btn btn-success btn-sm m-0"
            onClick={()=>this.props.onChangeIsEdit(true, item.id, item)}
            >
              Edit
            </button>
          )}
        </td>
        <td className="delete-action">
          {(this.state.isHover && this.state.hoverIndex === index) && (
            <button
            type="button"
            className="btn btn-danger btn-sm m-0 btn-delete"
            onClick={()=>this.props.onDeleteUser(item)}>
              Delete
            </button>
          )}
        </td>
      </tr>
    });

    const paginate = ({pager, setPage}) => (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item  ${pager.currentPage === 1 ? 'disabled' : ''}`}>
            <a className="page-link" onClick={() => setPage(1)}>First</a>
          </li>
          <li className={`page-item  ${pager.currentPage === 1 ? 'disabled' : ''}`}>
            <a className="page-link" onClick={() => setPage(pager.currentPage - 1)}>Previous</a>
          </li>
          {pager.pages.map((page, index) =>
            <li key={index} className={`page-item ${pager.currentPage === page ? 'active' : ''}`}>
              <a className="page-link" onClick={() => setPage(page)}>{page}</a>
            </li>
          )}
          <li className={`page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
            <a className="page-link" onClick={() => setPage(pager.currentPage + 1)}>Next</a>
          </li>
          <li className={`page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
            <a className="page-link" onClick={() => setPage(pager.totalPages)}>Last</a>
          </li>
        </ul>
      </nav>
    )

    return (
      <div>
        <div className="table">
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="name-title">Name</th>
                <th className="email-title">Email</th>
                <th className="edit-title">Edit</th>
                <th className="delete-title">Delete</th>
              </tr>
            </thead>
            <tbody>{user}</tbody>
          </table>
        </div>
        <Pagination items={this.props.user} isEdit={this.props.isEdit} onChangePage={(pageIndex) => this.onChangePage(pageIndex)}>
          {paginate}
        </Pagination>
      </div>
    );
  }
}
