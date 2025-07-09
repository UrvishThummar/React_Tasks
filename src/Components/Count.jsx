import React, { Component } from 'react';

export default class count extends Component {

    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
  render() {
    return (
      <div> 
        <h2>{this.state.count}</h2> 
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>increment</button>
        <button onClick={()=>{this.setState({count:this.state.count-1})}}>decrement</button>
        {/* <button onClick={()=>{this.setState({count:this.state.count(0)})}}>reset</button> */}
        </div>
    );
  }
}


