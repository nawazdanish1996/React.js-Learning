import React, { Component } from "react";

class RenderLife extends Component {
  constructor() {
    super();
    this.state = {
      email: "abc@gmail.com",
    };
  }

  render()
  {
    console.warn(this.state.email);
    return (
      <div>
        <h1>Render, Life Cycle Method</h1>
        <br />
        <br />
        <br />
        <button
          onClick={function () {
            this.state({ email: "xyz@gmil.ocm" });
          }}
        >
          Update Email Address
        </button>
      </div>
    );
  }
}

export default RenderLife;
