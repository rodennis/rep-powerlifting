import React from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


function SignUp() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPass] = useState('')
  const [confPass, setConfPass] = useState('')

  let navigate = useNavigate()


  const userData = {
    firstName,
    lastName,
    email,
    phone,
    password,
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8080/signup', userData).then((res, error) => {
      console.log(res);
      if(error) {
        console.log(error)
      }
    })
    // navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container'>
      <div id='signUpForm'>
        <h3>Sign Up</h3>
        <p>It only takes a second!</p>
        <hr />
        <form onSubmit={handleSubmit}>
          <Link to='/'id='closeForm'>x</Link>
          <input type="text" id='firstName' placeholder='First Name' value={firstName} onChange={(e) => {setFirstName(e.target.value)}}required/>
          <input type="text" id='lastName' placeholder='Last Name' value={lastName} onChange={(e) => {setLastName(e.target.value)}} required /><br />
          <input type="email" id='email' placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} required />
          <input type="text" id='phone' placeholder='(000)-000-0000' value={phone} onChange={(e) => {setPhone(e.target.value)}}/><br />
          <input type="password" id='pW' placeholder='Password' value={password} onChange={(e) => {setPass(e.target.value)}} required/>
          <input type="password" id='confPw' placeholder='Confirm Password' value={confPass} onChange={(e) => { setConfPass(e.target.value) }} required /><br />
          <button id='signUpSubmit'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
