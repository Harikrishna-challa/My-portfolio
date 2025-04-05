// src/components/Education.jsx
import React from 'react';
import '../styles/Education.css'; // Linked external CSS

const Education = () => {
  return (
    <section id="education" className="education-section" data-aos="fade-up">
        <div className='full-screen'>
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h4>Master of Computer Applications (MCA)</h4>
          <p><strong>Institution:</strong> Prof. G. Ram Reddy Centre for Distance Education, Osmania University</p>
          <p><strong>Status:</strong> Pursuing (2nd Semester)</p>
          <p><strong>Core Subjects:</strong> OS, DBMS, DAA, AI, ML, Web Technologies</p>
        </div>

        <div className="education-card">
          <h4>Bachelor of Science (B.Sc.) – MPCs</h4>
          <p><strong>Institution:</strong> University College of Science, Osmania University</p>
          <p><strong>Graduation:</strong> 2022</p>
          <p><strong>Subjects:</strong> Mathematics, Physics, Computer Science</p>
        </div>

        <div className="education-card">
          <h4>Intermediate – MPC</h4>
          <p><strong>Board:</strong> Board of Intermediate Education, Telangana</p>
          <p><strong>Year:</strong> 2019</p>
          <p><strong>Subjects:</strong> Mathematics, Physics, Chemistry</p>
        </div>

        <div className="education-card">
          <h4>SSC (10th Class)</h4>
          <p><strong>Board:</strong> Board of Secondary Education, Telangana</p>
          <p><strong>Year:</strong> 2017</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Education;
