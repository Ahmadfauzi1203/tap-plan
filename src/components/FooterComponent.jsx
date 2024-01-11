import React from "react";

const FooterComponents = () => {
  return (
    <div id="footer">
      <div className="row ">
        <div className="col address">
          <img src="/img/logo-TPAG-White1.svg" alt="" className="img-fluid" />
          <p>
            The East Building 23rd Floor, Jl. DR Ide Anak Agung Gde Agung Kav.
            E.3.2 No 1, Kuningan Timur, Setiabudi Jakarta 12950 , Indonesia
          </p>
        </div>
        <div className="col contact">
          <h5>Contact</h5>
          <p>Phone: (+62) 21-5794-4737</p>
          <p>Fax: (+62) 21-5794-4745</p>
          <p>Email: TAP.corsec@tap-agri.com</p>
          <div className="sosmed">
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram "></i>
            </a>
            <a href="">
              <i className="fa-brands fa-facebook "></i>
            </a>
          </div>
        </div>
        <div className="col our-business">
          <h5>Our Business</h5>
          <ul>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Operational</a>
            </li>
            <li>
              <a href="#">Agritech</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
          </ul>
        </div>
        <div className="col investor">
          <h5>Investor</h5>
          <ul>
            <li>
              <a href="#">Corporate Realese</a>
            </li>
            <li>
              <a href="#">Corporate Action</a>
            </li>
            <li>
              <a href="#">Stock Information</a>
            </li>
            <li>
              <a href="#">Financial Highlight</a>
            </li>
            <li>
              <a href="#">Dividend Information</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="line p-3">
        <p className="text-center pb-0 mb-0">
          &copy;Copyright 2023, PT Triputra Agro Persada, Tbk.
        </p>
      </div>
    </div>
  );
};

export default FooterComponents;
