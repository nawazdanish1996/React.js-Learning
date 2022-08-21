import React, { useState } from "react";
import "../Basic Form Validation in React.js/Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function loginHandle(e) {
    if (user.length < 3 || password.length < 3) {
        alert("Type correct values")
    }else{
        alert("Successfully Login")
    }
    e.preventDefault();
  }

  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setErr(true);
    } else {
      setErr(false);
    }
    // console.log(e.target.value);
    setUser(item);
  }

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    // console.log(e.target.value);
    setPassword(item);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Basic Form Validation in React.js</h1>
      <br />
      <br />
      <br />

      <form onSubmit={loginHandle}>
        <input
          onChange={userHandler}
          style={{ padding: ".4rem 1rem" }}
          type="text"
          placeholder="Username"
          required
        />
        <br />
        {err ? <span>User Not Valid</span> : null}
        <br />

        <input
          style={{ padding: ".4rem 1rem", marginTop: ".5rem" }}
          type="text"
          placeholder="Password"
          required
          onChange={passwordHandler}
        />
        <br />
        {passErr ? <span>Password Not Valid</span> : null}

        <br />

        <button
          style={{
            marginTop: ".5rem",
            width: "12.8rem",
            height: "2rem",
          }}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
