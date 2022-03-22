import React from 'react'
import '../Navbar/Navbar.css'
import Upload from '../Upload/Upload'

function Navbar({setToggle, user}) {
  return (
    <div>
      <nav>
        <h1 className='nav-logo'>rep<br />powerlifting</h1>
          <Upload user={user} setToggle={setToggle}/>
      </nav>
    </div>
  )
}

export default Navbar
