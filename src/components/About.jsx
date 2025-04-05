// src/components/About.jsx
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
       <div className="full-screen">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-card">
          <p>
            I am a passionate and dedicated <strong>Frontend Developer</strong> with strong hands-on experience in
            <strong> React.js</strong>, <strong>JavaScript</strong>, <strong>Bootstrap</strong>, <strong>HTML</strong>, and <strong>CSS</strong>. I’ve built and deployed multiple full-stack MERN projects including an
            <strong> Authentication System</strong> and a <strong>To-Do List App</strong>.
          </p>
          <p>
            Currently pursuing <strong>MCA (2nd semester)</strong>, I continue to enhance my skills in both frontend and backend, especially with <strong>Node.js</strong> and <strong>Express.js</strong>.
          </p>
          <p>
            I’m actively looking for opportunities to contribute to dynamic development teams and grow as a <strong>Full Stack Developer</strong>.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
