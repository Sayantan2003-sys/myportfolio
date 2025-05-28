import React from 'react';
import '../App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const About = () => {
  return (
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <p className="section-text">
        I'm a creative and detail-oriented <strong>Frontend Developer</strong> who builds seamless, engaging, and responsive interfaces using modern technologies like <strong>ReactJS</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>.
      </p>
      <p className="section-text">
        While my focus is on frontend development, I also have a strong foundation in backend technologies such as <strong>Node.js</strong>, <strong>PHP</strong>, <strong>MySQL</strong>, and RESTful APIs — enabling me to understand full application flow from UI to server logic.
      </p>
      <p className="section-text">
        I love solving real-world problems, learning new frameworks, and building user-centered web apps. I’m currently pursuing a B.A. from Burdwan University and continuously enhance my skills through certifications and hands-on projects.
      </p>
      <p className="section-text">
        Outside of coding, I enjoy exploring UI/UX design trends, reading tech blogs, and experimenting with new web technologies.
      </p>

      {/* Social Links */}
      <div className="social-icons">
        <a href="https://github.com/Sayantan2003-sys" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/https://www.linkedin.com/in/sayantan-basu-272953354">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};
