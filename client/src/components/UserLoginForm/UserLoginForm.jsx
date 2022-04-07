import React from "react";
import { Link } from "react-router-dom";
import Google from '../../photos/google.png'

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
        <div className="loginscreen">
          <p style={{ backgroundColor: "lightpink", textAlign: "center" }}>
            {error}
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="login-username"
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
              className="login-password"
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
            <button className="submit">Sign In</button>
            <br />
            <img className="google-logo" src={Google} alt="" />
            <button
              className="google-login"
              onClick={() => {
                handleGoogleLogin();
              }}
            >
              Sign In With Google
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
