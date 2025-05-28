import React from 'react';
import '../App.css';
import { Slide, Fade } from 'react-awesome-reveal';

const certificates = [
  "Information Technology – CMC Phoenix",
  "Front-End Development – CMC Phoenix",
  "Web Programming – CMC Phoenix",
  "Dotnet Specialization – CMC Phoenix",
  "React & Node.js – CMC Phoenix",
];

const education = [
  { year: "2024", degree: "B.A. – Burdwan University", grade: "CGPA: 6.2" },
  { year: "2021", degree: "12th – W.B.C.H.S.E", grade: "B+" },
  { year: "2019", degree: "10th – W.B.B.S.E", grade: "B" },
];

export const Qualifications = () => {
  return (
    <div className="container">
      <h2 className="section-title">Certifications</h2>
      <p className="section-text">
        Throughout my journey as a developer, I’ve earned multiple certifications to sharpen my skills and stay aligned with the latest industry practices. These courses covered both theoretical and practical aspects of full-stack development with a focus on modern web technologies.
      </p>
      <p className="section-text">
        Below is a list of certifications I completed at CMC Phoenix, reflecting hands-on learning and real-world projects.
      </p>

      <div className="card-grid">
        <Slide direction="up" cascade damping={0.15} triggerOnce>
          <Fade cascade damping={0.1} triggerOnce>
            {certificates.map((title, index) => (
              <div key={index} className="cert-card">
                <p>{title}</p>
              </div>
            ))}
          </Fade>
        </Slide>
      </div>

      <h2 className="section-title" style={{ marginTop: '3rem' }}>Education</h2>
      <p className="section-text">
        My academic background provides a solid foundation for logical problem-solving and structured learning. Here's a snapshot of my educational journey.
      </p>

      <div className="timeline">
        <Slide direction="up" cascade damping={0.2} triggerOnce>
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{edu.year}</div>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                {edu.grade && <p>{edu.grade}</p>}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

