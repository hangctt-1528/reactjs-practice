import React, { Component } from 'react';
import '../../App.css';

export default class Header extends Component {
  calculateTime = (seconds) => {
    var date = new Date(1970,0,1);
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  }
  render() {
    return (
      <div className="App-header">
      <div className="row">
        <h2 className="col">Header</h2>
        <h2 className="col timer">{this.calculateTime(this.props.pageOpenTime)}</h2>
      </div>
      </div>
    );
  }
}
