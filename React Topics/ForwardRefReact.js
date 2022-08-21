import React, { useRef } from 'react';
import ForwardChildCom from './ForwardChildCom';

function ForwardRefReact() {

  let inputRef = useRef(null);

  function updateInput(){
    inputRef.current.value = "1000";
    inputRef.current.style.color = "blue";
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>FrowardRef in React</h1>
      <ForwardChildCom ref={inputRef} />
      <button onClick={updateInput}>Update Input Box</button>
    </div>
  )
}


export default ForwardRefReact;
