import React from 'react'
import Clipboard from './Clipboard'

const Clipboards = ({clipboards,onDelete}) => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",margin:"20px"}}>
       { clipboards.map((clipboard) => (<Clipboard key={clipboard.code} clipboard={clipboard} onDelete={onDelete}/>)) }
    </div>
  )
}

export default Clipboards