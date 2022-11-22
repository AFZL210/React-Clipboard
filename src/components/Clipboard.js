import React from 'react'

const Clipboard = ({clipboard,onDelete}) => {
  return (
    <div style={{width:"40%",overflow:"auto",border:"2px solid black"}}>
        <h4>{clipboard.text}</h4>
        <p>{clipboard.description}</p>
        <h4>{clipboard.code}</h4>
        <h4>{clipboard.username}</h4>
        <button onClick={() => onDelete(clipboard.code)} style={{color:"red"}}>Delete</button>
    </div>
  )
}

export default Clipboard