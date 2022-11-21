import React from 'react'
import './Note.css'
import Button from '../Button/Button'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Note = ({clipboard,onCopy}) => {
  return (
    <div className='note-container'>
        <h4 className='note-text'>{clipboard.text}</h4>
        <div className="note-content">
            <p className='note-description'>{clipboard.description}</p>
        </div>
        <div className="note-data">
            <p className="author-name">{clipboard.username}</p>
            <p className='clipboard-code'>{clipboard.code}</p>
            <CopyToClipboard text={clipboard.description}>
                <Button text="Copy" onClick={() => onCopy(clipboard.code)}/>
            </CopyToClipboard>
        </div>
    </div>
  )
}

export default Note