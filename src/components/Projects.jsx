import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'MERN To-Do List App',
    description: 'A full-stack To-Do application with user authentication and task CRUD functionality.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'GitHub', 'Vercel', 'Render'],
    github: 'https://github.com/Harikrishna-challa/MERN_TO_DO_List-frontend',
    demo: 'https://mern-to-do-list-frontend.vercel.app/',
  },
  {
    title: 'MERN Auth System',
    description: 'Authentication system with login, registration, forgot/reset password using JWT & Nodemailer.',
    tech: ['React', 'Express', 'MongoDB', 'JWT', 'SendGrid', 'GitHub', 'Vercel', 'Render'],
    github: 'https://github.com/Harikrishna-challa/Mern_Auth_Frontend',
    demo: 'https://mern-auth-jet-kappa.vercel.app/login',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio showcasing my skills, projects, and experiences.',
    tech: ['React.js', 'Vite', 'Bootstrap', 'AOS', 'GitHub Pages'],
    github: 'https://github.com/Harikrishna-challa/My-portfolio',
    demo: 'https://harikrishna-challa.github.io/My-portfolio/',
  },
  {
    title: 'Currency Converter',
    description: 'A web app that converts currency values using a real-time exchange API.',
    tech: ['JavaScript', 'HTML', 'CSS', 'GitHub'],
    github: 'https://github.com/Harikrishna-challa/CurrencyConverter.git',
    demo: 'https://harikrishna-challa.github.io/CurrencyConverter/',
  },
  {
    title: 'Rock Paper Scissors Game',
    description: 'Interactive browser game to play Rock Paper Scissors against the computer.',
    tech: ['JavaScript', 'HTML', 'CSS', 'GitHub'],
    github: 'https://github.com/Harikrishna-challa/Rock-Papers-Scissors',
    demo: 'https://harikrishna-challa.github.io/Rock-Papers-Scissors/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center fw-bold text-uppercase mb-5 text-glow">Projects</h2>
        <div className="row gy-4">
          {projects.map((project, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="card project-card h-100 p-3 shadow-lg border border-light">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-info">{project.title}</h5>
                  <p className="card-text">{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light btn-sm me-2"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-success btn-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
