// src/components/Hero.jsx
import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Hero.css'; // Custom CSS
import profileImage from '../assets/portfolioProfile.jpg';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <section id="hero" className="hero-section text-light" data-aos="fade-up">
      <div className='full-screen'>
      <Container className="text-center">
        <img
          src={profileImage}
          alt="Harikrishna"
          className="rounded-circle mb-3 hero-image"
        />
        <h1 className="display-4 fw-bold glitch-text">Hi, I'm Challa Harikrishna</h1>
        <p className="lead">Frontend Developer | ReactJS | JavaScript | CSS | Java</p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Button
            variant="outline-info"
            className="hero-btn"
            href="https://www.linkedin.com/in/challa-harikrishna"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            variant="outline-light"
            className="hero-btn"
            href="https://github.com/Harikrishna-challa"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            variant="outline-success"
            className="hero-btn"
            href="/Challa_Harikrishna_Resume.pdf"
            target="_blank"
          >
            Resume
          </Button>
        </div>
      </Container>
      </div>
    </section>
  );
};

export default Hero;
