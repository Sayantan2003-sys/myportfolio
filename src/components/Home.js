import React from 'react';
import '../App.css';
import profilePic from '../assets/profile.jpg';
import { ReactTyped } from 'react-typed';
import { FaArrowAltCircleDown } from "react-icons/fa";

export const Home = () => {
  return (
    <div className="home-hero">
      <div className="home-left">
        <img src={profilePic} alt="Sayantan Basu" className="hero-image-small" />
      </div>
      <div className="home-right">
        <h1 className="hero-title">
          I'm <span className="highlight">Sayantan Basu</span>
          <br />
          <ReactTyped
            strings={[
              "Frontend Developer",
              "ReactJS Enthusiast",
              "Backend-Ready Coder",
            ]}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </h1>
        <p className="hero-desc">
          A passionate <strong>Frontend Developer</strong> with a strong command of backend technologies.
          I create visually stunning, responsive, and efficient web interfaces using React, JavaScript, and modern tools — while confidently handling backend APIs and databases when needed.
        </p>
        <p className="hero-desc">
          I enjoy transforming ideas into interactive experiences. Whether it’s coding, debugging, or designing, I bring clean code and creativity to the table.
        </p>
        <div className="resume-download" style={{ marginTop: '20px' }}>
          <a
            href="/resume/Sayantan_Basu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-download"
          >
            Download Resume<span><FaArrowAltCircleDown /></span>
          </a>
        </div>
      </div>
    </div>
  );
};
