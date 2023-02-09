import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const onChange = (e) => {
    setNote({ ...note, [e.target.id]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({ title: "", description: "", tag: "" });

    // Flusing out the fields after submit button is clicked
    document.getElementById("description").value = "";
    document.getElementById("title").value = "";
    document.getElementById("tag").value = "";
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center my-4">Add a note</h1>
        <form classsame=" my-2">
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
              minLength={5}
              required
            />
          </div>
          <div className="mb-3 form-check"></div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
            disabled={note.title.length < 5 || note.description.length < 5}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
