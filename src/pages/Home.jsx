import Notes from "../components/Notes";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center my-4">Add a note</h1>
        <form classsame=" my-2">
          <div className="mb-3">
            <label htmlFor="noteTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="noteTitle"
              aria-describedby="noteTitle"
              placeholder="Enter you title here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="noteTag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="noteTag"
              aria-describedby="noteTag"
              placeholder="Enter you tag here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check"></div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Notes />
    </>
  );
};

export default Home;
