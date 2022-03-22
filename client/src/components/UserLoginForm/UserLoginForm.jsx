import React from "react";
import { Link } from "react-router-dom";

function UserLoginForm(props) {
  const {
    error,
    handleSubmit,
    setEmail,
    setError,
    setPassword,
    email,
    password,
    handleGoogleLogin,
 } = props;

  return (
      <div className="login">
        {/* <div className="logo">
          <p>
            Rep
            <br />
            Powerlifting
          </p>
        </div> */}
        <div className="loginscreen">
          <p style={{ backgroundColor: "lightpink", textAlign: "center" }}>
            {error}
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              id="username"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              required
            />
            <br />
            <input
              className="input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              required
            />
            <br />
            <button className="submit">Login</button>
            <br />
            <button
              className="submit"
              onClick={() => {
                handleGoogleLogin();
              }}
            >
              Login With Google
            </button>
          </form>

          <div className="links">
            <Link id="signUp" to="/signup">
              Sign Up
            </Link>
            <Link className="forgotPassword" to="/ForgotPassword">
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
  );
}

export default UserLoginForm;
