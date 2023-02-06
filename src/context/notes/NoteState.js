// import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const getNotes = async (url = `${host}/api/notes/fetchallnotes`) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNWYwMDBkZGY1MmRhN2I2NWIxOWM4In0sImlhdCI6MTY3NDk5NDMxM30.-c2-lJ1FW6m1MwrDa3SYG2qOYyXMDVsBmuUinOLFgDg",
      },
    });
    return response.json();
  };

  const [notes, setNotes] = useState([]);

  // Adding note
  const addNote = (title, description, tag) => {
    let note = {
      _id: "63debff1dc3a4d5dfasdfas5bb4f0495",
      user: "63d5f000ddf52da7b65b19c8",
      title: "Dummy title ADDED",
      description: "dummy description23",
      tag: "general",
      date: "2023-02-04T20:28:33.722Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  // Deleting note

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => id !== note._id));
  };

  // Edit note
  const editNote = (id, title, description, tag) => {};

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes, setNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
