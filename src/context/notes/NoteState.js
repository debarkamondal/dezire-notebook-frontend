// import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  const host = "http://localhost:5000";

  // Fetching notes
  const getNotes = async (url = `${host}/api/notes/fetchallnotes`) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNWYwMDBkZGY1MmRhN2I2NWIxOWM4In0sImlhdCI6MTY3NDk5NDMxM30.-c2-lJ1FW6m1MwrDa3SYG2qOYyXMDVsBmuUinOLFgDg",
      },
    });
    setNotes(await response.json());
  };

  // Adding note
  const addNote = async (note, url = `${host}/api/notes/addnote`) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNWYwMDBkZGY1MmRhN2I2NWIxOWM4In0sImlhdCI6MTY3NDk5NDMxM30.-c2-lJ1FW6m1MwrDa3SYG2qOYyXMDVsBmuUinOLFgDg",
      },
      body: JSON.stringify({
        title: note.title,
        description: note.description,
        tag: note.tag,
      }),
    });
    note = await response.json();
    setNotes(notes.concat(note)); // Updating the frontend
    return note;
  };

  // Deleting note

  const deleteNote = async (id) => {
    let url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNWYwMDBkZGY1MmRhN2I2NWIxOWM4In0sImlhdCI6MTY3NDk5NDMxM30.-c2-lJ1FW6m1MwrDa3SYG2qOYyXMDVsBmuUinOLFgDg",
      },
    });
    setNotes(notes.filter((note) => id !== note._id));
    return response;
  };

  // Edit note
  const updateNote = async (note) => {
    const id = note._id;
    let url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNWYwMDBkZGY1MmRhN2I2NWIxOWM4In0sImlhdCI6MTY3NDk5NDMxM30.-c2-lJ1FW6m1MwrDa3SYG2qOYyXMDVsBmuUinOLFgDg",
      },
      body: JSON.stringify({ ...note }),
    });

    setNotes(
      notes.map((note) => {
        return { ...note };
      })
    );
    return response.json();
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, getNotes, setNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
