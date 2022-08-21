import React, { useState } from 'react';

const GetInput = () => {

    const [text, setText] = useState(null);

    function getData(val){
        setText(val.target.value);
        console.log(val.target.value);
    }

  return (
    <div>
        <h1>Get Input Box Value</h1>
        <input type="text" onChange={getData} />
        <p style={{color: "#fff", backgroundColor: "#111111", padding: "1rem"}}>{text}</p>
    </div>
  )
}


export default GetInput;


