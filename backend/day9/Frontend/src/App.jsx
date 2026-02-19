import { useEffect, useState } from 'react'
import axios from "axios"
function App() {

  const [notes, setNotes ] = useState([])

  function fetchNotes(){
    axios.get('http://localhost:3000/api/notes')
    .then((res) =>{
      setNotes(res.data.notes)
    })
  }
  
  useEffect(()=> { fetchNotes() },[])
  
  function handleSubmit(e){
    e.preventDefault()

    const {title, description} = e.target.elements 

    console.log(title.value, description.value)

    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })

    .then(()=>{
        fetchNotes()
      })
    
  }

  function handleNoteDelete(noteId){
    axios.delete('http://localhost:3000/api/notes/'+noteId)
    .then(res => {
      console.log(res.data)
      fetchNotes()
    })
  }

  function handleNoteUpdate(noteId){
    const newDescription = prompt("Enter new description");
    axios.patch('http://localhost:3000/api/notes/'+noteId,
      { description: newDescription }
    )
    .then(()=> {
      fetchNotes()
    })
    
    // const newTitle = prompt("Enter new title");
    axios.patch('http://localhost:3000/api/notes/'+noteId,
      { title: newTitle }
    )
    .then(res => {
      console.log(res.data)
      fetchNotes()
    })
  }

  return (
    <>
      <div className="topBar">
        <form className='note-create' onSubmit={handleSubmit}>
          <input className='entries' type="text" name='title' placeholder='Enter title' />
          <input className='entries' type="text" name='description' placeholder='Enter description' />
          <button className='entries entBtn'>Create Note</button>
        </form>
      </div>

    <div className="notes">
      {
        notes.map(note => {
          return < div className="note" >
            <h1>{note.title}</h1>
            <p className='para'>{note.description}</p>
            <button className='noteBtn delete-note' onClick={()=>handleNoteDelete(note._id)}>Delete</button>
            <button className='noteBtn update-note' onClick={()=>handleNoteUpdate(note._id)}>Update</button>
          </div>
        })
      }
    </div >
    </>
  )
}

export default App
