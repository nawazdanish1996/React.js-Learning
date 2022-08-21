import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.warn("useEffect");
  },[]);

  return (
    <div>
      <h1>UseEffect Hook in React</h1>

      <h2>{count}</h2>
      <button
      onClick={() =>{
        setCount(count + 1)
      }}
      >
      Updata counter
      </button>
    </div>
  );
}

export default UseEffectHook;
