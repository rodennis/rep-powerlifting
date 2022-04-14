import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { googleLogin, emailPasswordSignIn } from "../../firebase/auth";
import "./UserLogin.css";
import UserLoginForm from "../../components/UserLoginForm/UserLoginForm";

function UserLogin({ setUser }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    const user = await googleLogin();
    await setUser(user?.displayName);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await emailPasswordSignIn(email, password);
    try {
      if (Object.values(user)[0] === "firebase") {
        await setUser(user);
        navigate("/");
      } else {
        setError(Object.values(user)[0].slice(5));
      }
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <div className="container">
      <div className="login-div">
        <div className="login-helper-text">
          <h1>Rep-Powerlifting</h1>
          <h3>A Social network for <br /> gym goers all around the world.</h3>
        </div>
        <UserLoginForm
          setEmail={setEmail}
          setPassword={setPassword}
          email={email}
          password={password}
          error={error}
          handleGoogleLogin={handleGoogleLogin}
          handleSubmit={handleSubmit}
          setError={setError}
        />
      </div>
    </div>
  );
}

export default UserLogin;
