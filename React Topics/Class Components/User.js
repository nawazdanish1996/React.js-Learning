import React, {Component} from "react";

class User extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1 style={{color: "green", background: "skyblue", padding: "1rem", textAlign: "center"}}>Name of Student: {this.props.name} {this.props.email}</h1>
            </div>
        )
    }
}


export default User;