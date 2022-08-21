import React, {useState} from "react";


const HandleForm = () => {


    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");

    function getFormData (e){
        console.log(name, tnc, interest)
        // useState(name, tnc, interest)
        e.preventDefault()
    }

    return(
        <div style={{textAlign: "center"}}>
            <h3>Handle Form, checkbox, input field, select in React</h3>

            <form onSubmit={getFormData}>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" /> <br /><br />
                <label htmlFor="">State: </label>
                <select name="" id="" onChange={(e) => setInterest(e.target.value)}>
                    <option value="">West Bengal</option>
                    <option value="">Bihar</option>
                    <option value="">Orissa</option>
                    <option value="">JharKhand</option>
                    <option value="">Assam</option>
                    <option value="">Karnataka</option>
                </select><br /><br />
                <input type="checkbox" name="" id="checkbox" onChange={(e) => setTnc(e.target.checked)} required/>
                <label style={{userSelect: "none"}} htmlFor="checkbox">Accept term and conditions</label>
                <br /><br />
                <button type="submit">Submit</button>
                <br />
                <button type="reset">Clear</button>
            </form>
        </div>
    )
}

export default HandleForm;