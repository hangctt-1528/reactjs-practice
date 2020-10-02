import React, { Component } from 'react';
import './App.css';
import Body from './component/Body/body';
import Header from './component/Header/header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }
  render() {
    return (
      <div className="App container">
        <Header pageOpenTime={this.state.seconds}/>
        <Body />
      </div>
    );
  }
}
