import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0
    }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>{' '}
        <button onClick={this.handleDecrement}>Decrement</button>{' '}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
