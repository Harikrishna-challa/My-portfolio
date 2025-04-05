// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-center py-4" data-aos="fade-up">
      <div className='full-screen'>
      <div className="container text-light">
        <p className="mb-2 fw-semibold">© {new Date().getFullYear()} Challa Harikrishna. All Rights Reserved.</p>
        <div className="social-links d-flex justify-content-center gap-3 mt-2">
          <a href="https://www.linkedin.com/in/challa-harikrishna" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href="https://github.com/Harikrishna-challa" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="/Challa_Harikrishna_Resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">
            Resume
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
