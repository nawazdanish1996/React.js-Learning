import React, { Component } from 'react'

class ShouldComponentUpdatee extends Component {
    
    constructor()
    {
        super();
        this.state={
            count: 0
        }
    }

    shouldComponentUpdate()
    {
        console.warn("shouldComponentUpdate", this.state.count);
        return true;
    }

  render() {
    return (
      <div>
        <h1>Should Component Update, Life cycle method</h1>
        <h3>count: {this.state.count}</h3>

        <button
        onClick={() => {
            if(this.state.count < 5){
                this.setState({count: this.state.count + 1})
                console.log("1")
            }
        }}
        >Update Counter Increment</button>

        <button
        onClick={() => {
            if(this.state.count > 0){
                this.setState({count: this.state.count - 1})
                console.log("2")
            }
        }}
        >Update Counter Decrement</button>
      </div>
    )
  }
}


export default ShouldComponentUpdatee;