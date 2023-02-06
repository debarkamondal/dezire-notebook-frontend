import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { notes, getNotes, setNotes, addNote } = context;

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">Your Notes</h2>
      <div className="row">
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
