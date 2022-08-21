import React, { Component, createRef } from 'react';

class UseRefHook extends Component {

  constructor(){
    super();
    this.inputRef = createRef();
  }

  componentDidMount(){
    console.warn(this.inputRef.current.value = "1000");
  }

  render(){
    return (
      <div>
        <h1>useRef Hook</h1>

        <input type="text" ref={this.inputRef} placeholder='Name' />
      </div>
    )
  }
}

export default UseRefHook;
