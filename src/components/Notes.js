import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react'

import noteContext from '../Context/notes/noteContext';
import Addnote from './Addnote';
import Noteitem from './Noteitem';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
  let navigate = useNavigate();


    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        }
        else{
    navigate("/login");

        }
    }, [])

    const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    const onChangee = (e) => {
        console.log("inside change");
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    const handleClick = (e) => {
        console.log("updating the node", note);
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showAlert("updated successfully", "success")
    }

    const ref = useRef(null);
    const refClose = useRef(null);

    const updateNote = (currentnote) => {
        ref.current.click();
        setnote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag });
    }

    return (
        <div>
            <Addnote showAlert={props.showAlert}/>
            {/* <!-- Button trigger modal --> */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" minLength={5} onChange={onChangee} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} minLength={5} onChange={onChangee} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} minLength={5} onChange={onChangee} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" container my-3">

                <div>
                    <h2>your notes</h2>
                    {notes.map((note) => {
                        return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
                    })}
                </div>

            </div>

        </div>
    )
}

// <div>
//             <div className="container md-3">
//                 <div> 
export default Notes
