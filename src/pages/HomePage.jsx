import React from "react";
import BannerComponent from "../components/BannerComponent";
import NewsComponent from "../components/NewsComponent";

const HomePage = () => {
  return (
    <div>
      <BannerComponent />
      {/* highlight */}
      <section id="highlight" className="d-flex justify-content-center gap-5 ">
        <div className="wrapper">
          <div
            className="card text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1100"
          >
            <div className="icon">
              <img src="/sus.png" alt="" />
            </div>
            <div className="card-body" data-aos="zoom-in">
              <h5 className="fw-bold text-uppercase my-2">Sustainability</h5>
              <p>
                TAPG sees the importance of collaboration with other
                stakeholders to achieve shared goals, mainly supporting the
                achievement.
              </p>
            </div>
          </div>
          <div
            className="card text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1200"
          >
            <div className="icon">
              <img src="/ope.png" alt="" />
            </div>
            <div className="card-body" data-aos="zoom-in">
              <h5 className="fw-bold text-uppercase my-2">Operational</h5>
              <p>
                An overview of the development operational activities can be
                found at Investor Newsletter and for the Financial Report can be
                found at the Financial Highlight.
              </p>
            </div>
          </div>
          <div
            className="card text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1300"
          >
            <div className="icon">
              <img src="/agri.png" alt="" />
            </div>
            <div className="card-body" data-aos="zoom-in">
              <h5 className="fw-bold text-uppercase my-2">Agritech</h5>
              <p>
                Communication constitutes the most important thing in business
                operation, particularly in the coordination among all
                subsidiaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about">
        <div className="row">
          <div
            className="col-lg-6 img"
            // data-aos="fade-right"
            // data-aos-duration="1000"
          >
            <img src="SEJARAH.jpg" alt="" className="img-fluid" />
          </div>
          <div
            className="col-lg-6 desc"
            // data-aos="fade-left"
            // data-aos-duration="1000"
          >
            <h2 className="text-uppercase">About Us</h2>
            <div></div>
            <h1>Plantations In A Sustainable Manner</h1>
            <p>
              PT Triputra Agro Persada Tbk (TAPG) was first established in 2005.
              To date, the Company has been able to expand its business into
              several provinces in Indonesia, namely Jambi, Central Kalimantan,
              and East Kalimantan.
            </p>
            <p>
              In an effort to increase its business activities, the Company has
              expanded its plantation area by investing in other plantation
              companies. Such an investment was carried out through joint
              ventures and company acquisitions.
            </p>
            <a href="#">
              Read More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction">
        <h4 data-aos="fade-up" data-aos-duration="1000">
          INTRODUCTION TO <span>TRIPUTRA AGRO PERSADA</span>
        </h4>
        <iframe
          width="1080"
          height="570"
          src="https://www.youtube.com/embed/mepo8EVZjjY?si=1-IHHrbA1WLr3CFX"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          data-aos="zoom-in"
          data-aos-duration="1000"
        ></iframe>
      </section>

      {/* Highlight2 */}
      <section id="highlight2">
        <div className="row">
          <div className="col-lg-6 contribute">
            <img src="/contribute.jpg" alt="" />
            <div
              className="title"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3>CONTRIBUTE TO ECONOMY & SOCIAL ENVIRONMENT</h3>
              <div>
                <button className="btn btn-contribute">view our Story</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 delivering">
            <img src="/deliver.jpg" alt="" />
            <div
              className="title"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3>DELIVERING SUSTAINABLE PRINCIPLES</h3>
              <div>
                <button className="btn btn-delivering">view our Story</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <NewsComponent />
      {/* contact us */}
      <section id="contact">
        <div className="row parralax">
          <div className="col-lg-4">
            <div
              className="mx-auto my-auto"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h2>Contact Us</h2>
              <p>
                We will reach you soon <br /> Please Fill This For​​m
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <form action="#" method="post">
              <div
                className="wrapper"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <input
                  type="text"
                  name="name"
                  className="mb-3"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="email"
                  className="mb-3"
                  placeholder="Email"
                />
                <textarea
                  name="messages"
                  id="messages"
                  cols="30"
                  rows="5"
                  className="mb-3"
                  placeholder="Messages"
                ></textarea>
                <div>
                  <button type="submit" href="#" className="btn" name="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
