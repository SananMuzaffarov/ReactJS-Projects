// Counter App with Class Components, States.
/*
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0
      }
    }
    
    decrement(){
        this.setState({
            count: this.state.count - 1
        });
    }
    reset(){
        this.setState({
            count: 0
        });
    }
    increment(){
        this.setState({
            count: this.state.count + 1
        });
    }

  render() {
    return (
      <div className='container'>
        <h1>Count : {this.state.count}</h1>
            <div className='btns'>
              <button type='button' onClick={() => this.decrement()}>Decrement</button>
              <button type='button' onClick={() => this.reset()}>Reset</button>
              <button type='button' onClick={() => this.increment()}>Increment</button>
            </div>
      </div>
    );
  }
}
export default Counter;
*/