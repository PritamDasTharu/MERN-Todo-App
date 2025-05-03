import React, { useState } from "react";
import "./AuthStyles.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHanlder = (e) => {
    try {
      e.preventDefault();
      alert(`Register Data:\nEmail: ${email}\nPassword: ${password}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="login-container mx-auto mt-5 p-4 shadow-sm bg-white rounded-4">
        <h2 className="text-center mb-2">Login</h2>
        <p className="text-center text-muted mb-4">Your day, done your way.</p>

        <form onSubmit={loginHanlder}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-orange">
              Login
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none">
            Forgot password?
          </a>
        </div>
        <div className="text-center mt-2">
          <span className="text-muted">New here?</span>{" "}
          <Link to="/register" className="text-decoration-none text-orange">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
