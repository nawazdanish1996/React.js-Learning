import React, { Component } from 'react'

class ComponentWillUnmountt extends Component {

    constructor()
    {
        super();
        this.state={
          show: true
        }
    }
    // componentWillUnmount()
    // {
        
    // }

  render() {
    return (
      <div>
        <h1>Component Will Unmount, Life Cycle Method</h1>
        <br />
        {
          this.state.show ? <h1>Mister</h1> : <h1>Raja</h1>
        }
        <button
        onClick={() =>{
          this.setState({show:! this.state.show})
        }}
        >Toggle Child Component</button>
      </div>
    )
  }
}

export default ComponentWillUnmountt;
