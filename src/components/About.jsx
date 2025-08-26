// src/components/About.jsx
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section" data-aos="fade-up" aria-labelledby="about-heading">
      <div className="full-screen">
        <div className="container about-container">
          {/* LEFT: Profile image (optional) */}

          {/* RIGHT: Professional summary only */}
          <div className="about-right" data-aos="fade-left">
            <h2 id="about-heading" className="section-title">About Me</h2>

            <div className="about-card">
              <p>
                I am a focused Frontend & Full Stack Developer and an MCA candidate with practical experience building
                and deploying production-ready web applications. I specialize in modern frontend development with
                React.js and responsive UI design, and I have a strong foundation in Core Java and backend fundamentals.
              </p>

              <p>
                During my Software Engineer internship at <strong>Zelis Healthcare India</strong> (May 2023 – Feb 2024), I contributed to feature
                development, debugging, and performance optimization—working on user-facing improvements and backend reliability fixes.
              </p>

              <p>
                I am actively seeking roles in product-focused teams where I can apply my problem-solving skills and continue growing as a
                Full Stack Developer, focusing on building reliable, user-friendly applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;