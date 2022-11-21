import React from 'react'
import './Content.css'
import Notes from '../Notes/Notes'
import SendNote from '../SendNote/SendNote'
import GetNote from '../GetNote/GetNote'

const Content = ({clipboards,onCopy,onAdd}) => {
  return (
    <div className='content-wrapper'>
      <Notes clipboards={clipboards} onCopy={onCopy}/>
      <SendNote onAdd={onAdd} clipboard={clipboards}/>
    </div>
  )
}

export default Content