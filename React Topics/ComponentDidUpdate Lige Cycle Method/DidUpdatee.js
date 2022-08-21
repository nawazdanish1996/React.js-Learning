import React, { Component } from 'react';

class DidUpdatee extends Component {

  constructor()
  {
    super();
    console.log("constructor");
    this.state={
      name: "Nawaz Danish"
    }
  }

  componentDidUpdate()
  {
    console.log("componentDidUpdate");
  }
  
  render() {
    console.log("render");

    return (
      <div>
        <h1>Component Did Update</h1>
        <button
        onClick={
          () => this.setState({name: "Mister"})
        }
        >Update Name</button>
      </div>
    )
  }
}

export default DidUpdatee;
