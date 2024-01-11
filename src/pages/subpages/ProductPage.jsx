import React from "react";

const ProductPage = () => {
  return (
    <div id="product-page">
      <section className="hero">
        <img src="/img/operational/palm-hero.jpg" alt="" />
        <div className="title">
          <div className="line"></div>
          <h1>Products</h1>
          <h5>
            We are committed to consistently producing high-quality crude palm
            oil and palm kernel products to meet domestic and foreign market
            needs.
          </h5>
        </div>
      </section>

      <section className="content">
        <div className="row row-1">
          <div className="col-lg-6">
            <img
              src="/img/operational/CPO_2.jpeg"
              alt=""
              className="rounded-circle"
            />
          </div>
          <div className="col-lg-6">
            <div className="desc desc-1">
              <h1>Crude Palm Oil / CPO</h1>
              <hr />
              <p>
                Crude palm oil (CPO) is vegetable edible oil extracted from the
                flesh (mesocarp) of oil palm (Elaeis guineensis). CPO is
                currently produced through processing in several palm oil mills
                (POM) owned by the Company.
              </p>
            </div>
          </div>
        </div>
        <div className="row row-2">
          <div className="col-lg-6">
            <div className="desc desc-2">
              <h1>Palm Kernel (PK)</h1>
              <hr />
              <p>
                Palm kernel comprises the seed or the endosperm (protective
                shell of the core) and the embryo (core) containing high quality
                oil.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/img/operational/PK_3.jpeg"
              alt=""
              className="rounded-circle"
            />
          </div>
        </div>
        {/* +++++++++++ */}
        <div className="row row-1">
          <div className="col-lg-6">
            <img
              src="/img/operational/Lateks.jpeg"
              alt=""
              className="rounded-circle"
            />
          </div>
          <div className="col-lg-6">
            <div className="desc desc-1">
              <h1>Slab</h1>
              <hr />
              <p>
                Slab is a lumpy, latex-based rubber material. The material is
                made lumpy through the use of formic acid or other clumping
                agents.
              </p>
            </div>
          </div>
        </div>
        <div className="row row-2">
          <div className="col-lg-6">
            <div className="desc desc-2">
              <h1>Ribbed Smoked Sheet</h1>
              <hr />
              <p>
                Ribbed Smoked Sheet is a latex or rubber tree sap-based product,
                which is processed mechanically and chemically and dried through
                smoking.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/img/operational/RIBBED SMOKE SHEET.jpeg"
              alt=""
              className="rounded-circle"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
