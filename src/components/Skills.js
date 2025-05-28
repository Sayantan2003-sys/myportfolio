import React from 'react';
import '../App.css';
import {
  FaReact, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt,
  FaDatabase, FaJsSquare, FaCode
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiMysql, SiLaravel, SiCodeigniter, SiJquery,
  SiPostgresql, SiAngular, SiMongodb
} from 'react-icons/si';

const skills = [
  { name: 'C', icon: <SiC /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'ReactJS', icon: <FaReact /> },
  { name: 'Angular', icon: <SiAngular /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Laravel', icon: <SiLaravel /> },
  { name: 'CodeIgniter', icon: <SiCodeigniter /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'AJAX', icon: <SiJquery /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'PL/SQL', icon: <SiPostgresql /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'REST APIs', icon: <FaCode /> },
];

export const Skills = () => {
  return (
    <div className="container">
      <h2>Technical Skills</h2>
      <p className="section-text" style={{ marginBottom: '1.5rem', color: '#ccc', fontSize: '1.1rem' }}>
        Throughout my journey as a software developer, I have acquired a diverse set of technical skills spanning programming languages, frameworks, and tools.
        I leverage these skills to build efficient, scalable, and maintainable web applications with a focus on modern technologies and best practices.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{skill.icon}</div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
