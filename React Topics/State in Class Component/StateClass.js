import React, { Component } from "react";

class StateClass extends Component{

    constructor(){
        super();
        this.state={
            data: "Nawaz Danish"
        }
    }

    render(){

        return(
            <>
                <h1>State in Class Component</h1>
                <h2>{this.state.data}</h2>
                <button
                onClick={
                    function Update(){
                        this.setState({data:this.state.data + 1})
                    }
                }
                >Update Data</button>
            </>
        )
    }
}




export default StateClass;