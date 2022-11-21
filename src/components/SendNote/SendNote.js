import {React, useState} from 'react'
import './SendNote.css'
import Button from '../Button/Button'

const SendNote = ({onAdd,clipboards}) => {
  const [user,setUser] = useState('anonymous')
  const [desc,setDesc] = useState('')
  const [title,setTitle] = useState('')


  const onSubmit = (e) => {
    e.preventDefault(); // to prevent sending to page / refresh

    if(!desc) {
        alert("description cannot be empty!")
        return 
    }

    if(!title) {
      alert("title cannot be empty!")
      return
    }

    onAdd({
      code: Math.floor(Math.random() * 10000) + Math.floor(Math.random() * 500),
      username:user,
      text:title,
      description:desc
    })

    setUser('anonymous')
    setDesc('')
    setTitle('')
    
}
  
  return (
    <>
    <div className='send-note-container'>
      <h4>Send Data</h4>
      <form onSubmit={onSubmit}>
        <input className='username-arae' type="text" placeholder='username' value={user} onChange={(e) => setUser(e.target.value)} /><br/>
        <input className='title-area' type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} /><br/>
        <textarea className='description-area' cols="30" rows="10" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea><br/>
        <Button type="submit" text="Send"/>
      </form>
    </div>
    </>
  )
}

export default SendNote