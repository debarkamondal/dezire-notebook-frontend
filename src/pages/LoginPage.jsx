import React, { useState, useContext, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const LoginPage = () => {
  const { setauthToken } = useContext(noteContext);
  const [creds, setCreds] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    authToken ? navigate("/") : navigate("/login");
    // eslint-disable-next-line
  }, [authToken]);

  const handleSubmit = async (
    e,
    url = "http://localhost:5000/api/auth/login"
  ) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: creds.email, password: creds.password }),
    });
    const json = await response.json();

    // After submiting creds checking the response from the server
    if ("authToken" in json) {
      setauthToken(json.authToken);
      localStorage.setItem("authToken", json.authToken);
      // navigate("/", { replace: true });
    }
    return json;
  };

  return (
    <div className="container my-3">
      <Form onSubmit={handleSubmit}>
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

export default LoginPage;
