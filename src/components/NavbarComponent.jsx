import React from "react";
import { useState, useEffect } from "react";

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
      <nav expand="lg" className={changeColor ? "color-active" : ""}>
        <div className="wrapper">
          <div className="logo">
            <a href="/">
              <img src="/logo.png" alt="" className="img-fluid" />
              PT Triputra Agro Persada TBK
            </a>
          </div>
          <input type="radio" name="slide" id="menu-btn" />
          <input type="radio" name="slide" id="cancel-btn" />
          <ul className="nav-links" id="nav-links">
            <label htmlFor="cancel-btn" className="btn cancel-btn">
              <i className="fa-solid fa-times"></i>
            </label>
            <li>
              <a href="#" className="link desktop-item ">
                about <i className="fa-solid fa-caret-down"></i>
              </a>
              <input type="checkbox" id="showAbout" name="showAbout" />
              <label htmlFor="showAbout" className="mobile-item">
                about <i className="fa-solid fa-caret-down"></i>
              </label>
              <div className="mega-box">
                <div className="row">
                  <div className="col-lg-6">
                    <img src="/dropdown.png" alt="" className="img-fluid" />
                    <div>
                      <header>DNA Triputra</header>
                      <p>
                        Triputra DNA is a Guiding Values for Insan Triputra/
                        Triputra Individuals to manifest Triputra Group’s reason
                        for being, which is “We exist because of Indonesia, by
                        Indonesia and for Indonesia”.
                      </p>
                      <div>
                        <a href="/about/dna-triputra" className="btn">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <header>
                      <i className="fa-solid fa-building me-2"></i>Company
                      Overview
                    </header>
                    <ul className="mega-links">
                      <li>
                        <a href="/about-us">About Us</a>
                      </li>
                      <li>
                        <a href="/company-information">Company Information</a>
                      </li>
                      <li>
                        <a href="/visi-missio">Visi & Mission</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3">
                    <header>
                      <i className="fa-solid fa-briefcase me-2"></i>Profile
                      Management
                    </header>
                    <ul className="mega-links">
                      <li>
                        <a href="/about/founders">Founders</a>
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
              </div>
            </li>
            <li>
              <a href="/sustainability" className="link desktop-item">
                Sustainability <i className="fa-solid fa-caret-down"></i>
              </a>
              <input
                type="checkbox"
                id="showSustainability"
                name="showSustainability"
              />
              <label htmlFor="showSustainability" className="mobile-item ">
                Sustainability <i className="fa-solid fa-caret-down"></i>
              </label>
              <div className="mega-box">
                <div className="row">
                  <div className="col-lg-3">
                    <header>
                      <i class="fa-solid fa-hand-fist me-2"></i>Commitment
                    </header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Sustainability Commitment</a>
                      </li>
                      <li>
                        <a href="#">Sustainability Policy</a>
                      </li>
                      <li>
                        <a href="#">Sustainability Framework</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 policy">
                    <header>
                      <i class="fa-solid fa-file-shield me-2"></i>Policy
                    </header>
                    <div className="wrapper">
                      <ul>
                        <li>
                          <a href="#">Certification</a>
                        </li>
                        <li>
                          <a href="#">Enviromental Responsibility</a>
                        </li>
                        <li>
                          <a href="#">Corporate Social Responsibility</a>
                        </li>
                        <li>
                          <a href="#">Human Resource</a>
                        </li>
                        <li>
                          <a href="#">Occupational Health and Safety</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">
                            Forest and Land Fire Control Task Force
                          </a>
                        </li>
                        <li>
                          <a href="#">Prosperous Fire-Free Village</a>
                        </li>
                        <li>
                          <a href="#">Partnership</a>
                        </li>
                        <li>
                          <a href="#">Social Management</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <header>
                      <i class="fa-solid fa-file-circle-question me-2"></i>
                      Grievance
                    </header>
                    <ul className="mega-links">
                      <li>
                        <a href="/about/founders">Grievance Handling</a>
                      </li>
                      <li>
                        <a href="#">Grievance Form</a>
                      </li>
                      <li>
                        <a href="#">Grievance List</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/operational" className="link desktop-item">
                Operational <i className="fa-solid fa-caret-down"></i>
              </a>
              <input
                type="checkbox"
                id="showOperational"
                name="showOperational"
              />
              <label htmlFor="showOperational" className="mobile-item">
                Operational <i className="fa-solid fa-caret-down"></i>
              </label>
              <ul className="drop-menu">
                <li>
                  <a href="/operational/map">
                    <i className="fa-solid fa-map"></i> <p>Map</p>
                  </a>
                </li>
                <li>
                  <a href="/operational/product">
                    <i className="fa-solid fa-bottle-droplet"></i>
                    <p>Product</p>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="link desktop-item">
                investor <i className="fa-solid fa-caret-down"></i>
              </a>
              <input type="checkbox" id="showInvestor" name="showInvestor" />
              <label htmlFor="showInvestor" className="mobile-item ">
                investor <i className="fa-solid fa-caret-down"></i>
              </label>
              <div className="mega-box">
                <div className="row">
                  <div className="col-lg-6">
                    <img src="/investor.jpg" alt="" className="img-fluid" />
                    <div>
                      <header>Investor Update</header>
                      <p>
                        Explore the latest updates on our company's performance,
                        financial reports, news, and more. Transparency is at
                        the heart of our shareholder relationships.
                      </p>
                      <div>
                        <a href="/investor" className="btn">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <header>
                      <i className="fa-solid fa-handshake me-2"></i>Investor
                      Relation
                    </header>
                    <ul className="mega-links">
                      <li>
                        <a href="/investor/annual-report">Annual report</a>
                      </li>
                      <li>
                        <a href="#">Financial Highlight</a>
                      </li>
                      <li>
                        <a href="#">Dividen Information</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3">
                    <header>
                      <i className="fa-solid fa-diagram-project me-2"></i>
                      Corporate
                    </header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Corporate Action</a>
                      </li>
                      <li>
                        <a href="#">Corporate release</a>
                      </li>
                      <li>
                        <a href="#">General Meeting Shareholder</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/agritech" className="link desktop-item">
                Agritech <i className="fa-solid fa-caret-down"></i>
              </a>
              <input type="checkbox" id="showAgritech" name="showAgritech" />
              <label htmlFor="showAgritech" className="mobile-item ">
                Agritech <i className="fa-solid fa-caret-down"></i>
              </label>
              <ul className="drop-menu agritech">
                <li>
                  <a href="#" className="d-flex align-items-baseline gap-2 ">
                    <i className="fa-solid fa-computer"></i>
                    <p>Information Technology</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex align-items-baseline gap-2">
                    <i class="fa-solid fa-leaf"></i>
                    <p>Precision Agriculture</p>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="link desktop-item">
                Gallery <i className="fa-solid fa-caret-down"></i>
              </a>
              <input type="checkbox" id="showGallery" name="showGallery" />
              <label htmlFor="showGallery" className="mobile-item ">
                Gallery <i className="fa-solid fa-caret-down me-2"></i>
              </label>
              <ul className="drop-menu gallery">
                <li>
                  <a href="/gallery/news">
                    <i className="fa-solid fa-newspaper"></i> <p>News</p>
                  </a>
                </li>
                <li>
                  <a href="gallery/press">
                    <i className="fa-solid fa-camera"></i> <p>Press Release</p>
                  </a>
                </li>
                <li>
                  <a href="/gallery/video">
                    <i className="fa-solid fa-film"></i> <p>Video</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fa-solid fa-bars"></i>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
