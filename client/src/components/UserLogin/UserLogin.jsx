import React, {useState} from "react"
import {useNavigate, Link} from 'react-router-dom'
import {googleLogin, emailPasswordSignIn} from '../../firebase/auth'
import './UserLogin.css'

function UserLogin({setUser}) {

 const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleGoogleLogin = async () => {
      const user = await googleLogin();
      await setUser(user?.displayName);
      navigate('/home')
  }
  const handleSubmit = async () => {
      const user = await emailPasswordSignIn(email, password);
      await console.log(Object.values(user))
      await console.log(user["FirebaseError"])
      if (Object.values(user)[0] === "firebase"){
          await console.log('success')
          await setUser(user?.displayName)
          await navigate('/')

      }else {
          await console.log('failure')
          await console.log(Object.values(user))
          setError(Object.values(user)[0].slice(5))
      }
  }

  return (
    <div className="container">
    <div className='login'>
      <div className="logo">
        <p>Rep<br/>Powerlifting</p>
      </div>
      <div className="loginscreen">
      <p style={{backgroundColor: 'lightpink', textAlign: 'center'}}>{error}</p>
        <form onSubmit={handleSubmit}>
          <input className='input' type="text" id='username' placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value); setError('')}} required/><br/>
          <input className='input' type="password" id='password' placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value); setError('')}} required/><br/>
          <button className='submit'>Login</button><br />
          <button className='submit' onClick={() => {handleGoogleLogin()}}>Login With Google</button>

        </form>

        <div className="links">
          <Link id='signUp' to='/signup'>Sign Up</Link>
          <Link className='forgotPassword' to='/ForgotPassword'>Forgot Password</Link>

        </div>
      </div>
      </div>
      </div>
  )
}

export default UserLogin