import React from 'react'
import '../Navbar/Navbar.css'

function Navbar(props) {
  return (
    <div>
      <nav>
        <h1 className='nav-logo'>rep<br />powerlifting</h1>
        <form onSubmit={props.handleSubmit}>
        <input type="file" onChange={e => {props.setUserMedia(e.target.files[0])}}/>
        <button>Submit</button>
      </form>
      </nav>
    </div>
  )
}

export default Navbar
