import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      // Use <React.Fragment> tag if I don't wanna use extra <div>
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
