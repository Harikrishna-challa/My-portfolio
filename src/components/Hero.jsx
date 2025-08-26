import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypeAnimation from 'react-type-animation';
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
          <h1 className="display-4 fw-bold glitch-text">
            Hi, I'm Challa Harikrishna 👋
          </h1>
          <p className='interested-text'>🚀 Passionate About:</p>
          <TypeAnimation
            sequence={[
              '💻 Software Development..',
              2000,
              '🌐 Web Development..',
              2000,
              '⚛️ ReactJS Developing..',
              2000,
              '🛠️ Software Engineering..',
              2000,
              '☕ Java Programming',
              2000
            ]}
            wrapper="p"
            speed={100}
            repeat={Infinity}
            className="lead typing-effect"
          />
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button
              variant="outline-info"
              className="hero-btn"
              href="https://www.linkedin.com/feed/"
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
               href={`${import.meta.env.BASE_URL}Challa_Harikrishna_Resume.pdf`}
               target="_blank"
               rel="noopener noreferrer"
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
