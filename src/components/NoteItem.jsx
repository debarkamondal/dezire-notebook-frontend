import React, { useContext } from "react";
import { Link } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const { deleteNote } = useContext(noteContext);
  const { title, description, _id } = props.note;
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link
            to="/"
            className="btn btn-primary"
            onClick={() => deleteNote(_id)}
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
