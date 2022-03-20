import React from 'react'
import '../Navbar/Navbar.css'
import Upload from '../Upload/Upload'

function Navbar({setToggle}) {
  return (
    <div>
      <nav>
        <h1 className='nav-logo'>rep<br />powerlifting</h1>
          <Upload setToggle={setToggle}/>
      </nav>
    </div>
  )
}

export default Navbar
