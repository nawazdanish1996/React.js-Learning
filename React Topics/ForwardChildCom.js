import React, { forwardRef } from 'react';

function ForwardChildCom(props, ref) {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
}


export default forwardRef (ForwardChildCom);