import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../assets/images/hero.jpeg";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="hero">
      <div className="intro-text">
        <h1>
          <span className="tagline1">Your day,</span>
          <br />
          <span className="tagline2">done your way.</span>
        </h1>
        <p>
          Tackle tasks with ease and keep life in order using our clean,
          no-stress todo manager.
        </p>
        <Link className="btn red" to="/register">
          Register Now!
        </Link>
        <Link className="btn blue" to="/login">
          Login
        </Link>
      </div>
      <div className="">
        <img src={pic1} alt="heroimage" width={"100%"} height={515} />
      </div>
    </div>
  );
};

export default Landing;
