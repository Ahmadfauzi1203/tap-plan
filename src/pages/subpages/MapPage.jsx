import React from "react";

const MapPage = () => {
  return (
    <div
      id="map-page"
      style={{ width: "100%", background: "#213406", paddingTop: "130px" }}
    >
      <div
        className="wrapper d-flex flex-column justify-content-center"
        style={{
          width: "100%",
          background: "#f2f2f2",
          padding: "5px 30px 30px 30px",
        }}
      >
        <h1
          className="fw-700 text-center"
          style={{
            fontFamily: "Playfair Display",
            color: "#81c42a",
            fontSize: "80px",
          }}
        >
          MAP
        </h1>
        <p className="text-center">
          An overview of the development operational activities can be found at
          Investor Newsletter and for the Financial Report can be found at the
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#81c42a",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            &nbsp;Financial Highlight
          </a>
          .
        </p>
        <p className="text-center">
          The location of 12 Palm Oil Mills of TAPG can be found in
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#81c42a",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            &nbsp;here
          </a>
          .
        </p>
        <img
          src="/img/operational/PETA Juni 2022.png"
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default MapPage;
