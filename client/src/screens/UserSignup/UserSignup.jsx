import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { emailPasswordSignUp } from "../../firebase/auth";
import "./UserSignup.css";

function UserSignup({ setUser }) {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confPass, setConfPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await emailPasswordSignUp(userName, email, password);
    if (Object.values(user)[0] === "firebase") {
      await console.log("success");
      await setUser(user);
      await navigate("/home");
    } else {
      await console.log("failure");
      setError(Object.values(user)[0].slice(5));
    }
  };

  return (
    <div className="container">
      <div id="signUpForm">
        <h3 className="sign-up-h3">Sign Up</h3>
        <p className="sign-up-p">It only takes a second!</p>
        <p style={{ backgroundColor: "lightpink", textAlign: "center" }}>
          {error}
        </p>
        <hr />
        <form onSubmit={handleSubmit}>
          <Link to="/" id="closeForm">
            x
          </Link>
          <input
            style={{ marginTop: "40px" }}
            type="text"
            className="sign-up-input"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
          <input
            type="text"
            className="sign-up-input"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
          />
          <br />
          <input
            style={{ marginTop: "40px" }}
            type="email"
            className="sign-up-input"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="text"
            className="sign-up-input"
            placeholder="Username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <input
            style={{ marginTop: "40px" }}
            type="password"
            className="sign-up-input"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <input
            type="password"
            className="sign-up-input"
            placeholder="Confirm Password"
            value={confPass}
            onChange={(e) => {
              setConfPass(e.target.value);
            }}
            required
          />
          <br />
          <button id="signUpSubmit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default UserSignup;
