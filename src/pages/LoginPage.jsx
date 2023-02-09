import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (
    e,
    url = "http://localhost:5000/api/auth/login"
  ) => {
    e.preventDefault();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: creds.email, password: creds.password }),
    });
    const json = await response.json();
    if ("authToken" in json) {
      console.log(json.authToken);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    } else console.log("invalid creds");
    return json;
  };
  return (
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default LoginPage;
