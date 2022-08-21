import React, { useState } from 'react';

function HOC(){
    return(
        <>
            <h1>High Order Function (HOC)</h1>
            <HOCRed cmp={HighOrderFun} />
            <HOCGreen cmp={HighOrderFun} />
        </>
    )
}

function HOCRed(props){
    return <h2 style={{background: "red", width: "50%", margin: "0 auto", padding: "1rem", color: "white"}}><props.cmp /></h2>
}
function HOCGreen(props){
    return <h2 style={{background: "green", width: "50%", margin: "0 auto", padding: "1rem", color: "white"}}><props.cmp /></h2>
}



function HighOrderFun() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={()=> setCount(count + 1)}>Update</button>
    </div>
  )
}

export default HOC;
