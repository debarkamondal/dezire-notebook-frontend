import React from "react";
import { Link } from "react-router-dom";

const NoteItem = (props) => {
  const { title, description } = props.note;
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to="/" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
