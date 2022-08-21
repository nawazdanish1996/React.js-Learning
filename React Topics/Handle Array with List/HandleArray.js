import React from "react";

export default function HandleArray() {

  const students = ["Nawaz", "Danish", "Raja", "Rana"];
//   students.map((item) => {
//     // console.warn("My Name is", item);
//     return () => {};
//   });

//   for(let i = 0 ; i < students.length ; i++){
//     console.warn("For Loop: My Name is:", students);
//   }

  return (
    <div>
      <h1>Handle Array with List</h1>

      {
        students.map((data)=>
        <h1>{data}</h1>
        )
      }
    </div>
  );
}
