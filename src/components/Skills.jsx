// src/components/Skills.jsx
import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5" data-aos="fade-up">
        <div className='full-screen'>
      <div className="container text-center text-light">
        <h2 className="mb-4 display-5 fw-bold text-uppercase">Skills</h2>
        <p className="mb-4">Here are some technologies I work with:</p>
        <div className="row justify-content-center">
          {[
            'HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap',
            'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Git & GitHub',
            'Java (Core)', 'Problem Solving', 'REST APIs'
          ].map((skill, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 mb-4">
              <div className="skill-card">{skill}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
