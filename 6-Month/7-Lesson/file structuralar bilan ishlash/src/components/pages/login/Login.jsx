import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import "./login.css";
const Login = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(form);
    const { username, password } = form;
    if (username === "admin" && password === "123") {
      navigate("/main");
    } else {
      alert("404");
    }
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <form id="submit" onSubmit={handleSubmit}>
                <TextField
                  type="text"
                  name="username"
                  fullWidth
                  label="Username"
                  id="username"
                  className="my-2"
                  onChange={handleChange}
                />
                <TextField
                  type="password"
                  name="password"
                  fullWidth
                  label="Password"
                  id="password"
                  className="my-2"
                  onChange={handleChange}
                />

                {/* <input
                  type="text"
                  placeholder="Username"
                  className="form-control my-2"
                  name="username"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control my-2"
                  name="password"
                  onChange={handleChange}
                /> */}
              </form>
            </div>
            <div className="card-footer">
              <button className="btn btn-success" type="submit" form="submit">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
