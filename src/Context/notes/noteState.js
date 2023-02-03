// import { useState } from "react";
// import noteContext from "./noteContext";

// const NoteSteate =(props)=>{
//   const host = "http://localhost:5000";
//    const noteintial=[]
//   const [notes, setnote] = useState(noteintial)   
// //fetch  all notes
// const getnote = async ()=>{
//   const response = await fetch(`${host}/api/notes/fetchallnotes`, {
//     method: 'GET',  
//     headers: {
//       'Content-Type': 'application/json',
//       "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMTYwYzFkYzJhYzlmZjI5ZDc2NzZlIn0sImlhdCI6MTY3MTUyMDUyMn0._z0IcMuH44gcxAHX9s7dNLK7X-3EtGHOxe7aNVX7cf8"
//     },
//   });
// const json = await response.json();
// console.log(json);
//   setnote(json);
// }



// //Add a note
// const addnote = async (title, description, tag) => {
//   // TODO: API Call
//   // API Call 
//   const response = await fetch(`${host}/api/notes/addnote`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMTYwYzFkYzJhYzlmZjI5ZDc2NzZlIn0sImlhdCI6MTY3MTUyMDUyMn0._z0IcMuH44gcxAHX9s7dNLK7X-3EtGHOxe7aNVX7cf8"
//     },
//     body: JSON.stringify(title, description, tag)
//   });

//   const note = response.json();
//   setnote(notes.concat(note))
// }

// // Delete a note
// const deletenote =async (id)=>{
//   const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMTYwYzFkYzJhYzlmZjI5ZDc2NzZlIn0sImlhdCI6MTY3MTUyMDUyMn0._z0IcMuH44gcxAHX9s7dNLK7X-3EtGHOxe7aNVX7cf8"
//     }
//   });
//   const json = response.json(); 
//   const newNotes = notes.filter((note) => { return note._id !== id })
//   setnote(newNotes)

// }
// //Edit a note
// const editnote = async (id,title,description,tag)=>{

//   const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
//     method: 'PUT',  
//     headers: {
//       'Content-Type': 'application/json',
//       "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMTYwYzFkYzJhYzlmZjI5ZDc2NzZlIn0sImlhdCI6MTY3MTUyMDUyMn0._z0IcMuH44gcxAHX9s7dNLK7X-3EtGHOxe7aNVX7cf8"
//     },
//     body: JSON.stringify(title,description,tag) 
//   });
//   const json = await response.json(); 

//   let newNotes = JSON.parse(JSON.stringify(notes))

//   for (let index = 0; index < newNotes.length; index++) {
//     const element = newNotes[index];
//     if(element._id=== id){
//       element.title = title;
//       element.description = description;
//       element.tag = tag;
//     }
//   }
//   setnote(newNotes);
// }
//     return(
//         <noteContext.Provider value={{notes,getnote,addnote,deletenote,editnote}}>
//             {props.children}
//         </noteContext.Provider>
//     )

// }
// export default NoteSteate;


// new 

import NoteContext from "./noteContext";
import { useState } from "react";

// const NoteState = (props) => {
//   const host = "http://localhost:5000"
//   const notesInitial = []
//   const [notes, setNotes] = useState(notesInitial)

//   // Get all Notes
//   const getNotes = async () => {
//     // API Call 
//     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMTYwYzFkYzJhYzlmZjI5ZDc2NzZlIn0sImlhdCI6MTY3MzI1OTc2NH0.suCuV0ECjOyINTP2YGfeCiFwk3XpHLBwhbvefzfvNnA"
//       }
//     });
//     const json = await response.json() 
//     setNotes(json)
//   }

//   // // Add a Note
//   // const addNote = async (title, description, tag) => {
//   //   // TODO: API Call
//   //   // API Call 
//   //   console.log("helloo ",title , description , tag );
//   //   const response = await fetch(`${host}/api/notes/addnote`, {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMTYwYzFkYzJhYzlmZjI5ZDc2NzZlIn0sImlhdCI6MTY3MzI1OTc2NH0.suCuV0ECjOyINTP2YGfeCiFwk3XpHLBwhbvefzfvNnA"
//   //     },
//   //     body: JSON.stringify({title, description, tag})
//   //   });

//   //   const note = await response.json();
//   //   setNotes(notes.concat(note))
//   // }
//     const addNote = async (title , description , tag ) =>{
//       console.log("hello1") ; 
//       const response = await fetch(`${host}/api/notes/addnote` , {
//         method: 'POST' , 
//         headers :{
//           'Content-Type' : 'application/json' , 
//           "auth-token"localStorage.getItem('token')

//         } , 
//         body: JSON.stringify({title , description , tag })
//       }) ; 
//       console.log("hello2") ; 
//       const note = await response.json()
//       console.log(note) ; 
//       setNotes(notes.concat(note)); 
//     }



//   // Delete a Note
//   const deleteNote = async (id) => {
//     // API Call
//     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMTYwYzFkYzJhYzlmZjI5ZDc2NzZlIn0sImlhdCI6MTY3MzI1OTc2NH0.suCuV0ECjOyINTP2YGfeCiFwk3XpHLBwhbvefzfvNnA"
//       } 
//     });
//     const json =  await response.json(); 
//     const newNotes = notes.filter((note) => { return note._id !== id })
//     setNotes(newNotes)
//   }

//   // Edit a Note
//   const editNote = async (id, title, description, tag) => {
//     // API Call 
//     const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMTYwYzFkYzJhYzlmZjI5ZDc2NzZlIn0sImlhdCI6MTY3MzI1OTc2NH0.suCuV0ECjOyINTP2YGfeCiFwk3XpHLBwhbvefzfvNnA"
//       },
//       body: JSON.stringify({title, description, tag})
//     });
//     const json = await response.json(); 

//      let newNotes = JSON.parse(JSON.stringify(notes))
//     // Logic to edit in client
//     for (let index = 0; index < newNotes.length; index++) {
//       const element = newNotes[index];
//       if (element._id === id) {
//         newNotes[index].title = title;
//         newNotes[index].description = description;
//         newNotes[index].tag = tag; 
//         break; 
//       }
//     }  
//     setNotes(newNotes);
//   }

//   return (
//     <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
//       {props.children}
//     </NoteContext.Provider>
//   )

// }
// export default NoteState;

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      }
    });
    
    const json = await response.json() ;
    setNotes(json); 
    console.log(json);  
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      }
    });
    const json =await response.json(); 
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json(); 

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;