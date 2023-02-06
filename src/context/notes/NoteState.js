// import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInit = [
    {
      _id: "63debfe7dcert3a4d55bb4f0491",
      user: "63d5f000ddf52da7b65b19c8",
      title: "Dummy title",
      description: "dummy description",
      tag: "general",
      date: "2023-02-04T20:28:23.872Z",
      __v: 0,
    },
    {
      _id: "63debfehjddc3a4d55bb4f0493",
      user: "63d5f000ddf52da7b65b19c8",
      title: "Dummy title2",
      description: "dummy description2",
      tag: "general",
      date: "2023-02-04T20:28:29.696Z",
      __v: 0,
    },
    {
      _id: "63debff1asdc3a4d55bb4f0495",
      user: "63d5f000ddf52da7b65b19c8",
      title: "Dummy title23",
      description: "dummy description23",
      tag: "general",
      date: "2023-02-04T20:28:33.722Z",
      __v: 0,
    },
    {
      _id: "63debff1dc3a4d5df5bb4f0495",
      user: "63d5f000ddf52da7b65b19c8",
      title: "Dummy title23",
      description: "dummy description23",
      tag: "general",
      date: "2023-02-04T20:28:33.722Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInit);

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
    console.log(notes);
    setNotes(notes.filter((note) => id !== note._id));
  };

  // Edit note
  const editNote = (id, title, description, tag) => {};

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, setNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
