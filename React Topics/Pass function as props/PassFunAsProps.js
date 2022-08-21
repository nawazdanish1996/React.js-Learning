import React from "react";

function PassFunAsProps(props) {

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pass Function As Props</h1>
      <button onClick={props.data}>Call Data Function</button>
    </div>
  );
}

export default PassFunAsProps;
