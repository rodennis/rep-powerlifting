import React from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function SignUp() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [pass, setPass] = useState('')
  const [confPass, setConfPass] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
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
          <input type="password" id='pW' placeholder='Password' value={pass} onChange={(e) => {setPass(e.target.value)}} required/>
          <input type="password" id='confPw' placeholder='Confirm Password' value={confPass} onChange={(e) => { setConfPass(e.target.value) }} required /><br />
          <Link to='/'>
          <button id='signUpSubmit'>Sign Up</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp
