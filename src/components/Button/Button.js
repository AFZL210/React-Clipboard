import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'


function Button({color,text,onClick}) {
  return <button className='btn' onClick={onClick}>{text}</button>
}

export default Button