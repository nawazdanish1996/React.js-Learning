import React, { useState } from "react";

const Condi = () => {
  const [con] = useState(1);

  return (
    <>
      {/* if else conditions */}
      {/* {con ? <h1>Mister</h1> : <h1>Raja</h1>} */}

      {/* if else-if else conditions */}
      {con === 1 ? <h1>Mister</h1> : con === 2 ? <h1>Raja</h1> : <h1>Rana</h1>}
    </>
  );
};

export default Condi;
