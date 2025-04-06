// src/components/Skills.jsx
import React, { useEffect } from 'react';
import '../styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaJava, FaBrain, FaCode } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Git & GitHub', icon: <FaGitAlt /> },
  { name: 'Java (Core)', icon: <FaJava /> },
  { name: 'Problem Solving', icon: <FaBrain /> },
  { name: 'REST APIs', icon: <FaCode /> }
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation will happen only once
    });
    AOS.refresh(); // Refresh AOS to apply animations
  }, []);

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container text-center text-light">
        <h2 className="mb-4 display-5 fw-bold text-uppercase">Skills</h2>
        <p className="mb-4">Here are some technologies I work with:</p>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 mb-4" data-aos="fade-up">
              <div className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
