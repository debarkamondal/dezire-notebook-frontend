import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const ref = useRef(null);
  const { deleteNote, updateNote } = useContext(noteContext);
  const { title, description, _id } = props.note;

  const [note, setNote] = useState(props.note);

  const onChange = (e) => {
    setNote({ ...note, [e.target.id]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    updateNote(note);
    ref.current.click();
    // addNote(note);
  };

  return (
    <>
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
            <button
              ref={ref}
              type="button"
              className="btn btn-primary mx-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="container">
              <form classsame=" my-2 ">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="title"
                    placeholder="Enter you title here"
                    onChange={onChange}
                    value={note.title}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    aria-describedby="tag"
                    placeholder="Enter you tag here"
                    onChange={onChange}
                    value={note.tag}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    onChange={onChange}
                    value={note.description}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3 form-check"></div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={note.title.length < 5 || note.description.length < 5}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
