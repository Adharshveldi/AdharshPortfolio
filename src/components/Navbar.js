import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs"; // Teams Icon
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Navbar Logo */}
        <Navbar.Brand href="/" className="d-flex">
          <strong className="logo" style={{ color: "#A855F7", fontSize: "1.8rem" }}>VAV.</strong>
        </Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* Navbar Items */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome className="nav-icon" /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser className="nav-icon" /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen className="nav-icon" /> Projects
              </Nav.Link>
            </Nav.Item>

            {/* GitHub */}
            <Nav.Item>
              <Nav.Link href="https://github.com/Adharshveldi" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="nav-icon" /> GitHub
              </Nav.Link>
            </Nav.Item>

            {/* LinkedIn */}
            <Nav.Item>
              <Nav.Link href="https://www.linkedin.com/in/vivek-adharsh-veldi-b98b8a232/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="nav-icon" /> LinkedIn
              </Nav.Link>
            </Nav.Item>

            {/* Microsoft Teams */}
            <Nav.Item>
              <Nav.Link href="https://teams.live.com/l/invite/FBAoLWQUWxewanIIAE" target="_blank" rel="noopener noreferrer">
                <BsMicrosoftTeams className="nav-icon" /> Connect
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
