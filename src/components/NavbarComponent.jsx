import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div id="navbar">
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo-TPAG-White1.svg"
              alt="logo navbar"
              className="img-fluid"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown title="Company Overview" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Company Information
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Vision & Mission</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Profile Management" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Founders</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Good Corporate Governance
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Risk Management & Tax Policy
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <Nav.Link href="/sustainability">Sustainability</Nav.Link>
              <Nav.Link href="/operational">Operational</Nav.Link>
              <NavDropdown title="Investor" id="basic-nav-dropdown">
                <NavDropdown title="Investor Relation" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Annual Report</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Financial Higlight
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Dividen Information
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Corporate" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Corporate Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Corporate Realese
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    General Meeting Shareholder
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <Nav.Link href="/agritech">Agritech</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
