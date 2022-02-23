import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import './Login.css'

function Login() {

  const [loginemail, setLoginEmail] = useState('')
  const [loginpassword, setLoginpassword] = useState('')
  const [loginStatus, setLoginStatus] = useState('')
  const [returnedData, setReturnedData] = useState([])

  const navigate = useNavigate()

  const userData = {
    email: loginemail,
    password: loginpassword,
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/', userData).then((res) => {
      setReturnedData(res.data[0])
    })
  }

  useEffect(() => {
    if (returnedData) {
      if (returnedData.email === loginemail && returnedData.password === loginpassword) {
        navigate("/home")
    }
    } else {
      setLoginStatus('Incorrect Email/Password Combination');
    }
  }, [returnedData])

  return (
    <div className="container">
    <div className='login'>
      <div className="logo">
        <p>Rep<br/>Powerlifting</p>
      </div>
      <div className="loginscreen">
        <form onSubmit={handleSubmit}>
          <input className='input' type="text" id='username' placeholder='Email' value={loginemail} onChange={(e) => {setLoginEmail(e.target.value)}} required/><br/>
          <input className='input' type="password" id='password' placeholder='Password' value={loginpassword} onChange={(e) => {setLoginpassword(e.target.value)}} required/><br/>
          <button className='submit'>Login</button>
        </form>

        <div className="links">
          <Link id='signUp' to='/SignUp'>Sign Up</Link>
          <Link className='forgotPassword' to='/ForgotPassword'>Forgot Password</Link>

        </div>
      </div>
      <h1>{loginStatus}</h1>
      </div>
      </div>
  )
}

export default Login
