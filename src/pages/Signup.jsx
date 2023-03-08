import React, { useState, useContext, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { setauthToken, authToken } = useContext(noteContext);
  // const authToken = localStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    authToken ? navigate("/") : navigate("/signup");
    // eslint-disable-next-line
  }, [authToken]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const handleSubmit = async () => {
    const url = "http://localhost:5000/api/auth/createuser";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      }),
    });
    const json = await response.json();

    if ("authToken" in json) {
      setauthToken(json.authToken);
      localStorage.setItem("authToken", json.authToken);
    }
    return json;
  };
  return (
    <div className="container my-3">
      <Form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Signup;
