import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Qualifications } from './components/Qualifications';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Slide, Fade } from 'react-awesome-reveal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="dark-theme">
        <BackgroundParticles />
        <nav className="navbar dark-navbar">
          <h1 className="nav-title">Sayantan Basu</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/qualifications">Qualifications</Link>
          </div>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/qualifications" element={<Qualifications />} />
          </Routes>
        </div>
        <Slide direction="up" triggerOnce>
          <Fade direction="up" triggerOnce>
            <footer className="footer">
              <p>📧 <a href="mailto:basusayantan821@gmail.com">basusayantan821@gmail.com</a></p>
              <p>📞 <a href="tel:+917980459062">7980459062</a></p>
              <p>📍 Chinsurah, Hooghly, India</p>
              <div className="footer-social-icons">
                <a href="https://github.com/Sayantan2003-sys" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/https://www.linkedin.com/in/sayantan-basu-272953354" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </footer>
          </Fade>
        </Slide>
      </div>
    </Router>
  );
}


