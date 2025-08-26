import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />
      
      <section data-aos="fade-up">
        <Projects />
      </section>

      <section data-aos="fade-up">
        <About />
      </section>

      <section data-aos="fade-up">
        <Skills />
      </section>

      <section data-aos="fade-up">
        <Tools />
      </section>

      <section data-aos="fade-up">
        <Education />
      </section>

      <section data-aos="fade-up">
        <Certificates />
      </section>

      <section data-aos="fade-up">
        <Contact />
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
