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
            <img src="/logo-TPAG-White1.svg" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <NavDropdown
                title="About"
                id="basic-nav-dropdown"
                className="about"
              >
                <div className="row">
                  <div className="col-md-6">
                    <img src="/dropdown.png" alt="" className="img-fluid" />
                    <div>
                      <h5>DNA TRIPUTRA</h5>
                      <p>
                        Triputra DNA is a Guiding Values for Insan Triputra/
                        Triputra Individuals to manifest Triputra Group’s reason
                        for being, which is “We exist because of Indonesia, by
                        Indonesia and for Indonesia”.
                      </p>
                      <a href="#" className="btn">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <h5>Company Overview</h5>
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Company Information</a>
                      </li>
                      <li>
                        <a href="#">Vision & Mission</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h5>Profile Management</h5>
                    <ul>
                      <li>
                        <a href="#">Founders</a>
                      </li>
                      <li>
                        <a href="#">Good Corporate Governance</a>
                      </li>
                      <li>
                        <a href="#">Risk Management & Tax Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </NavDropdown>
              <Nav.Link href="/sustainability">Sustainability</Nav.Link>
              <Nav.Link href="/operational">Operational</Nav.Link>
              <NavDropdown
                title="Investor"
                id="basic-nav-dropdown"
                className="investor"
              >
                <div className="row">
                  <div className="col-md-6">
                    <img src="/dropdown.png" alt="" className="img-fluid" />
                    <div>
                      <h5>INVESTOR UPDATE</h5>
                      <p>
                        Explore the latest updates on our company's performance,
                        financial reports, news, and more. Transparency is at
                        the heart of our shareholder relationships.
                      </p>
                      <a href="#" className="btn">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <h5>Investor Relation</h5>
                    <ul>
                      <li>
                        <a href="#">Annual report</a>
                      </li>
                      <li>
                        <a href="#">Financial Highlight</a>
                      </li>
                      <li>
                        <a href="#">Dividen & Information</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h5>Corporate</h5>
                    <ul>
                      <li>
                        <a href="#">Corporate Action</a>
                      </li>
                      <li>
                        <a href="#">Corporate Release</a>
                      </li>
                      <li>
                        <a href="#">General Meeting Shareholder</a>
                      </li>
                    </ul>
                  </div>
                </div>
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
