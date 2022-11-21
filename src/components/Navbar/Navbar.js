import React from 'react'
import './Navbar.css'

const Navbar = ({title}) => {
  return (
    <div className='nav'>
        <h3>{title}</h3>
    </div>
  )
}

export default Navbar