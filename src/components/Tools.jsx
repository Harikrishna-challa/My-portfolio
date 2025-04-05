// src/components/Tools.jsx
import React from 'react';
import '../styles/Tools.css';

const Tools = () => {
  return (
    <section id="tools" className="tools-section py-5" data-aos="fade-up">
        <div className='full-screen'>
      <div className="container text-center text-light">
        <h2 className="mb-4 display-5 fw-bold text-uppercase">Tools</h2>
        <p className="mb-4">These are the tools and platforms I use regularly:</p>
        <div className="row justify-content-center">
          {[
            'VS Code', 'Git', 'GitHub', 'Postman',
            'Render', 'Vercel', 'Chrome DevTools',
            , 'MongoDB Compass', 'MySQL Workbench'
          ].map((tool, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 mb-4">
              <div className="tool-card">{tool}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Tools;
