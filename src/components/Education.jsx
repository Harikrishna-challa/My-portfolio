// src/components/Education.jsx
import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Prof. G. Ram Reddy Centre for Distance Education, Osmania University',
      status: 'Pursuing (2nd Semester)',
      subjects: 'OS, DBMS, DAA, AI, ML, Web Technologies',
    },
    {
      degree: 'Bachelor of Science (B.Sc.) – MPCs',
      institution: 'Sai Ram Degree College, Satavahana University',
      status: 'Graduated in 2022',
      subjects: 'Mathematics, Physics, Computer Science',
    },
    {
      degree: 'Intermediate – MPC',
      institution: 'Masters Junior College, Jammikunta',
      status: 'Completed in 2019',
      subjects: 'Mathematics, Physics, Chemistry',
    },
    {
      degree: 'SSC (10th Class)',
      institution: 'ZPHS High School Vavilala, Vavilala',
      status: 'Completed in 2016',
    },
  ];

  return (
    <section id="education" className="education-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Education</h2>
          {educationData.map((edu, index) => (
            <div className="education-card" key={index}>
              <h4>{edu.degree}</h4>
              <p><strong>Institution:</strong> {edu.institution}</p>
              <p><strong>{edu.status.includes('Pursuing') ? 'Status' : 'Year'}:</strong> {edu.status}</p>
              {edu.subjects && <p><strong>Subjects:</strong> {edu.subjects}</p>}
            </div>
          ))}
        </div>
    </section>
  );
};

export default Education;
