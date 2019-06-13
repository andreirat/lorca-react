import React, { Component } from 'react';

export default class Homepage extends Component {
  constructor(props){
    super(props);
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = {
      value: 0
    };
  }
  
  increment() {
    window.counterAdd(1);
  }
  
  decrement() {
    window.counterAdd(-1);
  }
  
  async componentDidMount(){
    console.log('update');
    const a = await window.counterValue()
    this.setState({value: a});
  }
  
  async componentDidUpdate(){
    const a = await window.counterValue();
    this.setState({value: a});
  }
  
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <div className="counter-container">
          <div className="counter">{this.state.value}</div>
          <div className="btn-row">
            <div className="btn btn-incr" onClick={this.increment}>+1</div>
            <div className="btn btn-decr" onClick={this.decrement}>-1</div>
          </div>
        </div>
      </div>
    );
  }
}
