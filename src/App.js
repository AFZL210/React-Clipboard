import './App.css';
import {React, useState, useEffect} from 'react'
import Clipboards from './components/Clipboards';

function App() {

  const [clipboards,setClipboards] = useState([])

  useEffect(() => {

    const getData = async () => {
      const dataFromServer = await getClips()
      setClipboards(dataFromServer)
    }

    getData()
  },[])

  const getClips = async () => {
    const res = await fetch('http://localhost:5000/notes')
    const data = await res.json()
    return data;
  }


  const DeleteClip = async (code) => {
    const res =  await fetch(`http://localhost:5000/notes/delete/${code}`,{
      method:'DELETE'
    })

    setClipboards(clipboards.filter((clipboard) => {
      return clipboard.code!=code
    }))
  }
  
  return (
    <div className="App">
      <h2>Admin Pannel</h2>
      <Clipboards clipboards={clipboards} onDelete={DeleteClip}/>
    </div>
  );
}

export default App;
