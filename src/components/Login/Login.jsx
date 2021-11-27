import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='login'>
      <div className="logo">
        <p>Rep<br/>Powerlifting</p>
      </div>
      <div className="loginscreen">
        <form >
          <input type="text" id='username' placeholder='Email'/><br/>
          <input type="password" id='password' placeholder='Password'/><br/>
          <button className='submit'>Login</button>
        </form>

        <div className="links">
          <Link id='signUp' to='/SignUp'>Sign Up</Link>
          <Link class='forgotPassword' to='/ForgotPassword'>Forgot Password</Link>

        </div>
      </div>
    </div>
  )
}

export default Login
