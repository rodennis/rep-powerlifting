import React from 'react'
import './Home.css'
import Main from '../Main/Main.jsx'
import { useState } from 'react'

function Home() {

  const [userMedia, setUserMedia] = useState([])

  return (
    <div className='home'>
      <h1>Home page</h1>
      <Main userMedia={userMedia} setUserMedia={setUserMedia}/>
    </div>
  )
}

export default Home
