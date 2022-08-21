import React, { Component } from "react";

class Life extends Component {
  constructor() {
    super();
    this.state={
        data: "Nawaz Danish, Raja"
    }
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default Life;
