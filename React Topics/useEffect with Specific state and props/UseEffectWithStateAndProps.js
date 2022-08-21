import React, { useEffect, useState } from "react";

function UseEffectWithStateAndProps() {
    const [data, setData] = useState(0);
    const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn("Called With Data State");
  }, [data]);
  useEffect(() => {
    console.warn("Called With Count State");
  }, [count]);

  return (
    <div>
      <h1>useEffect with specific state and props</h1>
      <br />

      <h1 style={{color: "green"}}>Count : {count}</h1>
      <h1 style={{color: "red"}}>Data : {data}</h1>
      <button
      onClick={()=>{
        setCount(count + 1)
      }}
      >
      Update Counter
      </button>
      <button
      onClick={()=>{
        // if(data > 0){
            setData(data + 1)
        // }
      }}
      >
      Update Counter
      </button>
    </div>
  );
}

export default UseEffectWithStateAndProps;
