import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='navbar-links'>
      <Link className='nav-header' to='/'>Home</Link>
      <Link className='nav-header' to='/newschedule'>New Schedule</Link>
      <Link className='nav-header' to='/activities'>Activities</Link>
    </div>
  )
}

export default Header
