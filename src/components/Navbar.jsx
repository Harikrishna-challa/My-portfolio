import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="custom-navbar sticky-top" data-aos="fade-down">
      <Container>
        <Navbar.Brand href="#hero" className="fw-bold">Harikrishna</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarContent" />
        <Navbar.Collapse id="navbarContent" className="justify-content-end">
          <Nav className="me-3">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#tools">Tools</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <div className="navbar-icons d-flex gap-3">
            <Nav.Link href="https://github.com/Harikrishna-challa" target="_blank" rel="noopener noreferrer" className="icon-link">
              <i className="bi bi-github"></i>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/harikrishna-challa" target="_blank" rel="noopener noreferrer" className="icon-link">
              <i className="bi bi-linkedin"></i>
            </Nav.Link>
            <Nav.Link href="/Challa_Harikrishna_Resume.pdf" target="_blank" className="icon-link">
              <i className="bi bi-file-earmark-person-fill"></i>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
