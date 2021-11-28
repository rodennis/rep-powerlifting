import React from 'react'
import './Home.css'
import Main from '../Main/Main.jsx'
import { useState } from 'react'

function Home() {

  const [media, setMedia] = useState([])

  return (
    <div className='home'>
      <h1>Home page</h1>
      <Main media={media} setMedia={setMedia}/>
    </div>
  )
}

export default Home
