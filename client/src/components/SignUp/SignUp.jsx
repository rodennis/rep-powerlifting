import React from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { emailPasswordSignUp } from '../../firebase/auth'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import '../../firebase/firebase.js'

function SignUp({setUser}) {

  const history = useHistory()

    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('');
    const [confPass, setConfPass] = useState('')

    const handleSubmit = async () => {
        const user = await emailPasswordSignUp(userName, email, password);
        // await console.log(result)
        if (Object.values(user)[0] === "firebase"){
            await console.log('success')
            await setUser(user?.displayName)
            await history.push('/')

        }else {
            await console.log('failure')
            setError(Object.values(user)[0].slice(5))

        }
    }

  return (
    <div className='container'>
      <div id='signUpForm'>
        <h3>Sign Up</h3>
        <p>It only takes a second!</p>
        <p style={{backgroundColor: 'lightpink', textAlign: 'center'}}>{error}</p>
        <hr />
        <form onSubmit={handleSubmit}>
          <Link to='/'id='closeForm'>x</Link>
          <input type="text" id='firstName' placeholder='First Name' value={userName} onChange={(e) => {setUserName(e.target.value)}}required/>
          <input type="text" id='lastName' placeholder='Last Name' value={lastName} onChange={(e) => {setLastName(e.target.value)}} required /><br />
          <input type="email" id='email' placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} required />
          <input type="text" id='phone' placeholder='(000)-000-0000' value={phone} onChange={(e) => {setPhone(e.target.value)}}/><br />
          <input type="password" id='pW' placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
          <input type="password" id='confPw' placeholder='Confirm Password' value={confPass} onChange={(e) => { setConfPass(e.target.value) }} required /><br />
          <button id='signUpSubmit'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
