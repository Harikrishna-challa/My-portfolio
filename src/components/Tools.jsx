// src/components/Tools.jsx
import React from 'react';
import '../styles/Tools.css';
import { FaGithub, FaChrome, FaCode } from 'react-icons/fa';
import { SiPostman, SiRender, SiVercel, SiMongodb, SiMysql } from 'react-icons/si';

const tools = [
  { name: 'VS Code', icon: <FaCode /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'Render', icon: <SiRender /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Chrome DevTools', icon: <FaChrome /> },
  { name: 'MongoDB Compass', icon: <SiMongodb /> },
  { name: 'MySQL Workbench', icon: <SiMysql /> }
];

const Tools = () => {
  return (
    <section id="tools" className="tools-section py-5" data-aos="fade-up">
      <div className="container text-center text-light">
        <h2 className="mb-4 display-5 fw-bold text-uppercase">Tools</h2>
        <p className="mb-4">These are the tools and platforms I use regularly:</p>
        <div className="row justify-content-center">
          {tools.map((tool, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 mb-4">
              <div className="tool-card">
                {tool.icon && <div className="tool-icon">{tool.icon}</div>}
                <div className="tool-name">{tool.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
