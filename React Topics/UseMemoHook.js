import React, { useState, useMemo } from 'react';

function UseMemoHook() {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);

    const multiCountMemo = useMemo(function multiCount(){
        return count * 5;
    }, [count])


  return (
    <div>
        <h1>useMemo Hook</h1>

        <h3>Count: {count}</h3>
        <h3>Item: {item}</h3>
        <h2>{multiCountMemo}</h2>
        <button onClick={()=> setCount(count + 1)}>Update Count</button>
        <button onClick={()=> setItem(item + 10)}>Update Item</button>

    </div>
  )
}

export default UseMemoHook;
