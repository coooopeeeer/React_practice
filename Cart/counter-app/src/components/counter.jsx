import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };
  render() {
    return (
      // Use <React.Fragment> tag if I don't wanna use extra <div>
      <React.Fragment>
        {/* Any expression is available between {} */}
        <span>{this.state.count}</span>
        {/* <span>{2 + 2}</span> */}
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
