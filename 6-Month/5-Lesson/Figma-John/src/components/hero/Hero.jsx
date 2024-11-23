import React from "react";
import "./Hero.css";
import avatar from "../../assets/avatar.png";
const Hero = () => {
  return (
    <div className="container">
      <div className=" nav d-flex justify-content-center  gap-4">
        <a className="text-decoration-none text-dark fw-bold " href="/">
          Works
        </a>
        <a className="text-decoration-none  text-dark fw-bold" href="/">
          Blog
        </a>
        <a className="text-decoration-none text-dark fw-bold " href="/">
          Contact
        </a>
      </div>
      <div className="hero-section d-flex align-items-center gap-5">
        <div className="hero-desc">
          <h1 className="Hero">Hi, I am John, Creative Technologist</h1>
          <p className="first-p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="btn-dowonload">Download Resume</button>
        </div>
        <div>
          <img className="img" src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
