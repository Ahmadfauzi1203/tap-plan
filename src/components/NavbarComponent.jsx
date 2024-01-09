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
                    <header>Company Overview</header>
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
                    <header>Profile Management</header>
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
              <a href="/sustainability" className="link">
                Sustainability
              </a>
            </li>
            <li>
              <a href="/operational" className="link">
                Operational
              </a>
            </li>
            <li>
              <a href="/investor" className="link desktop-item">
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
                        <a href="#" className="btn">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <header>Investor Relation</header>
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
                    <header>Corporate</header>
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
              <a href="/agritech" className="link">
                Agritech
              </a>
            </li>
            <li>
              <a href="/gallery" className="link">
                Gallery
              </a>
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
