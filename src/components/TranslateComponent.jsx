import React from "react";
import {} from "react-bootstrap";

const TranslateComponent = () => {
  return (
    <div id="container-translate">
      <div className="wrapper animate__animated animate__fadeInUp animate__delay-1s">
        <a href="/investor" className="index">
          <p className="inisial">TAPG</p>
          <p className="value">IDR &minus;10.00 (1.82%)</p>
        </a>
      </div>
      <div className="language d-flex animate__animated animate__fadeInUp animate__delay-1s">
        <a href="#" className="translate">
          <p>
            <span className="id">ID&#xA0;</span>&#124;
            <span className="en">&#xA0;EN</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default TranslateComponent;
