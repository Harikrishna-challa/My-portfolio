// src/components/Certificates.jsx
import React from 'react';
import '../styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Development',
      issuer: 'JSpiders Java Development Centre',
      description: 'Comprehensive training in both front-end and back-end Java technologies, including frameworks and tools essential for full-stack development.',
    },
    {
      id: 2,
      title: 'Software Engineer Intern',
      issuer: 'Zelis Healthcare India',
      duration: 'May 2023 – Feb 2024',
      description: 'Contributed to the development and optimization of healthcare solutions. Gained hands-on experience in development, troubleshooting, and system optimization.',
    },
    {
      id: 3,
      title: 'PowerShell',
      issuer: 'LinkedIn Learning',
      description: 'Completed training on PowerShell scripting including command-line automation and shell commands.',
    },
    {
      id: 4,
      title: 'Git and GitHub',
      issuer: 'LinkedIn Learning',
      description: 'Learned version control, branching, merging, and GitHub collaboration techniques.',
    },
    {
      id: 5,
      title: 'Java Object-Oriented Programming',
      issuer: 'LinkedIn Learning',
      description: 'Mastered Java fundamentals including classes, objects, inheritance, encapsulation, and polymorphism.',
    },
  ];

  return (
    <section id="certificates" className="certificates-section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Certificates & Experience</h2>
        <div className="certificate-list">
          {certificates.map(cert => (
            <div key={cert.id} className="certificate-card">
              <h5>{cert.title}</h5>
              <p><strong>Issuer:</strong> {cert.issuer}</p>
              {cert.duration && <p><strong>Duration:</strong> {cert.duration}</p>}
              <p>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
