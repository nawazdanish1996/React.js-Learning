import React, { useState } from "react";

const ClickEvent = () => {

    const [name, setName] = useState("Raja");
    
    function btn(){
        if(name === "Raja"){
            setName("Nawaz Danish")
        }else{
            setName("Raja")
        }
    };

    return(
        <div style={{textAlign: "center"}}>
            <h1>{name}</h1>
            <button
            type="button"
            onClick={btn}
            >
                Click Me!
            </button>
        </div>
    )
}


export default ClickEvent;