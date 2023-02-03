import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import noteContext from '../Context/notes/noteContext';
// import Notes from './Notes';

const Addnote = (props) => {
    const context = useContext(noteContext);

    const { addNote } = context;
    const [note, setnote] = useState({ title: "", description: "", tag: "" })
    const onChangee = (e) => {
        console.log("inside change");
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    const handleClick = (e) => {
        e.preventDefault();
        console.log("inside click ");
        console.log(note.title,note.description,note.tag) ; 
        addNote(note.title,note.description,note.tag);
        setnote({ title: "", description: "", tag: "" })
        props.showAlert("Added successfully", "success")
    }
    return (
        <div>
            <div className="container my-3">
                <div >  
                    <h2>Add a note</h2>
                    <form >
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">title</label>
                            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp"  value={note.title} minLength={5} onChange={onChangee} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">description</label>
                            <input type="text" className="form-control" id="description" name='description' value={note.description}  minLength={5} onChange={onChangee} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">tag</label>
                            <input type="text" className="form-control" id="tag" name='tag' value={note.tag} minLength={5} onChange={onChangee} />
                        </div>
                        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                    </form>
                </div>
                {/* <Notes/> */}
            </div>
        </div>
    )
}

export default Addnote
