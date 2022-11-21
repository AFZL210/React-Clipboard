import React from 'react'
import './Notes.css'
import Note from '../Note/Note'

const Notes = ({clipboards,onCopy}) => {
  return (
    <div className='notes-container'>
      {clipboards.map((clipboard) => (<Note key={clipboard.code} clipboard={clipboard} onCopy={onCopy}/>))}
    </div>
  )
}

export default Notes