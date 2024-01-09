import React from "react";

const AnnualReportPage = () => {
  return (
    <div id="annual-report-page">
      <h1 className="text-center">Annual Report</h1>
      <div className="wrapper">
        <div className="card">
          <div className="card-body">
            <img
              src="/img/annual-report/AR-2020.jpeg"
              alt=""
              className="img-fluid"
            />
            <span className="badge">
              <p>2020</p>
              Annual Report
            </span>
          </div>
          <div className="card-footer">
            <h5>Annual Report 2020</h5>
          </div>
        </div>
        <div className="card" style={{ width: "600px" }}>
          <div className="card-body">
            <img
              src="/img/annual-report/AR-2021.jpeg"
              alt=""
              className="img-fluid"
            />
            <span className="badge">
              <p>2021</p>
              Annual Report
            </span>
          </div>
          <div className="card-footer">
            <h5>Annual Report 2021</h5>
          </div>
        </div>
        <div className="card" style={{ width: "600px" }}>
          <div className="card-body">
            <img
              src="/img/annual-report/AR-2022.png"
              alt=""
              className="img-fluid"
            />
            <span className="badge">
              <p>2022</p>
              Annual Report
            </span>
          </div>
          <div className="card-footer">
            <h5>Annual Report 2022</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReportPage;
