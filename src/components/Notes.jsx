import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, authToken } = context;
  const navigate = useNavigate();

  useEffect(() => {
    authToken ? getNotes() : navigate("/login");
    // eslint-disable-next-line
  }, [authToken]);
  return (
    <div className="container">
      <h2 className="text-center">Your Notes</h2>
      <div className="row">
        {notes.length !== 0
          ? notes.map((note) => {
              return <NoteItem key={note._id} note={note} />;
            })
          : "No Notes"}
      </div>
    </div>
  );
};

export default Notes;
