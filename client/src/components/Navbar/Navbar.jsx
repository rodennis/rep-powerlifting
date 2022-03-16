import React from 'react'
import '../Navbar/Navbar.css'
import Upload from '../Upload/Upload'

function Navbar() {
  return (
    <div>
      <nav>
        <h1 className='nav-logo'>rep<br />powerlifting</h1>
          <Upload />
      </nav>
    </div>
  )
}

export default Navbar
