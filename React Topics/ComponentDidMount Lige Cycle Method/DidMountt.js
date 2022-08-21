import React, { Component } from 'react'

class DidMountt extends Component {
    constructor()
    {
        super();
        this.state={
            name: "Nawaz Danish"
        }
        // console.log("constructor");
    }

    componentDidMount()
    {
        console.log("componentDidMount");
    }

  render()
  {
    console.log("render");

    return (
      <div>
        <h1>Component Did Mount {this.state.name}</h1>
        <button
        onClick={() => {this.setState({name: "Raja"})}}
        >Update Name</button>
      </div>
    )
  }
}

export default DidMountt;
