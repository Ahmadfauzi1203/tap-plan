import React from "react";
import TradingComponent from "../components/TradingComponents";
import NewsComponent from "../components/NewsComponent";

const InvestorPage = () => {
  return (
    <div id="investor-page">
      <section id="hero">
        <img src="/investor.jpg" alt="" />
        <div className="title animate__animated animate__fadeInLeft">
          <div className="line"></div>
          <h1>Excellent Plantation For The World</h1>
          <div>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="invest-information">
        <div className="btn-info">
          <a href="#" className="btn">
            Annual Report
          </a>
          <a href="#" className="btn">
            Corporate Release
          </a>
          <a href="#" className="btn">
            Financial Highlight
          </a>
          <a href="#" className="btn">
            Dividen Information
          </a>
        </div>
        <div className="row">
          <div className="stock col-lg-6">
            <h5>Stock information</h5>
            <TradingComponent />
          </div>
          <div className="corp col-lg-6">
            <h5>corporate release</h5>
            <ul>
              <li>
                2023-10-26 - <span>Investor Newsletter Vol 12 2023</span>
              </li>
              <li>
                2023-10-26 - <span>Investor Newsletter Vol 12 2023</span>
              </li>
              <li>
                2023-10-26 - <span>Investor Newsletter Vol 12 2023</span>
              </li>
              <li>
                2023-10-26 - <span>Investor Newsletter Vol 12 2023</span>
              </li>
              <li>
                2023-10-26 - <span>Investor Newsletter Vol 12 2023</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="general-meet">
        <h5>GENERAL MEETING SHAREHOLDER</h5>
        <ul>
          <li>
            2023-10-26 -
            <span>
              Announcement of Summary of AGMS 2021 PT Triputra Agro Persada Tbk
            </span>
          </li>
          <li>
            2023-10-26 -
            <span>
              Announcement of Summary of AGMS 2021 PT Triputra Agro Persada Tbk
            </span>
          </li>
          <li>
            2023-10-26 -
            <span>
              Announcement of Summary of AGMS 2021 PT Triputra Agro Persada Tbk
            </span>
          </li>
          <li>
            2023-10-26 -
            <span>
              Announcement of Summary of AGMS 2021 PT Triputra Agro Persada Tbk
            </span>
          </li>
          <li>
            2023-10-26 -
            <span>
              Announcement of Summary of AGMS 2021 PT Triputra Agro Persada Tbk
            </span>
          </li>
        </ul>
      </section>

      <NewsComponent />
    </div>
  );
};

export default InvestorPage;
