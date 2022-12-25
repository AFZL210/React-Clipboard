import './App.css';
import { React, useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Button from './components/Button/Button';

function App() {

  const [clipboard,setClipboard] = useState([])

  useEffect(() => {

    const getData = async () => {
      const clips = await fetchClip()
      setClipboard(clips)
    }

    getData()

  },[])

  const fetchClip = async () => {
    const res = await fetch('https://copy-5cld.onrender.com/notes')
    const data = await res.json()
    return data;
  }

  const copyClip = (code) => {
    console.log(code)
    alert("Copied!")
  }

  const addNewNote = async(note) => {
    const res = await fetch('https://copy-5cld.onrender.com/notes/add',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(note)
    })

    const data =  await res.json()
    setClipboard([...clipboard,note])
  }
 
  return (
    <div className="App">
      <Navbar title="COPY"/>
      <Content clipboards={clipboard} onCopy={copyClip} onAdd={addNewNote}/>
    </div>
  );
}

export default App;
