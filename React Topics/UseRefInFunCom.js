import React, { useRef } from 'react'

export default function UseRefInFunCom() {
    let inputRef = useRef(null);

    function HandleInput(){
        console.warn("Function Called");
        // inputRef.current.value = "1000";
        inputRef.current.style.color = "blue";
    }

  return (
    <div>
      <h1>useRef in Functional Component</h1>

      <input type="text" ref={inputRef} />
      <button onClick={HandleInput}>Update Value</button>
    </div>
  )
}
