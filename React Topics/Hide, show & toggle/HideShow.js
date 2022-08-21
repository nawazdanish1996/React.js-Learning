import React from "react";

const HideShow = () => {

    const [show, setShow] = React.useState(true);

    return(
        <div style={{textAlign: "center"}}>
            <h1>Hide, show & Toggle Element</h1>
            {
                show ? <h1>Lorem ipsum dolor sit amet.</h1> : null
            }
            <button onClick={() => setShow(true)}>Show</button>
            <button onClick={() => setShow(false)}>Hide</button>
        </div>
    )
}

export default HideShow;