import React from "react";
import BannerComponent from "../components/BannerComponent";

const HomePage = () => {
  return (
    <div>
      <BannerComponent />
      {/* highlight */}
      <section id="highlight" className=" d-flex justify-content-center gap-5">
        <div className="card text-center">
          <span>
            <img src="/sus.png" alt="" />
          </span>
          <h5 className="fw-bold text-uppercase my-2">Sustainability</h5>
          <p>
            TAPG sees the importance of collaboration with other stakeholders to
            achieve shared goals, mainly supporting the achievement.
          </p>
        </div>
        <div className="card text-center">
          <span>
            <img src="/ope.png" alt="" />
          </span>
          <h5 className="fw-bold text-uppercase my-2">Operational</h5>
          <p>
            An overview of the development operational activities can be found
            at Investor Newsletter and for the Financial Report can be found at
            the Financial Highlight.
          </p>
        </div>
        <div className="card text-center">
          <span>
            <img src="/agri.png" alt="" />
          </span>
          <h5 className="fw-bold text-uppercase my-2">Agritech</h5>
          <p>
            An overview of the development operational activities can be found
            at Investor Newsletter and for the Financial Report can be found at
            the Financial Highlight.
          </p>
        </div>
      </section>

      {/* about */}
      <section id="about">
        <div className="row">
          <div className="col-lg-6 img">
            <img src="SEJARAH.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 desc">
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
        <h4>
          INTRODUCTION TO <span>TRIPUTRA AGRO PERSADA</span>
        </h4>
        <iframe
          width="1080"
          height="570"
          src="https://www.youtube.com/embed/mepo8EVZjjY?si=1-IHHrbA1WLr3CFX"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </section>

      {/* Highlight2 */}
      <section id="highlight2">
        <div className="row">
          <div className="col col-lg-6 contribute">
            <h3>CONTRIBUTE TO ECONOMY & SOCIAL ENVIRONMENT</h3>
            <button className="btn btn-contribute">view our Story</button>
          </div>
          <div className="col col-lg-6 delivering">
            <h3>DELIVERING SUSTAINABLE PRINCIPLES</h3>
            <button className="btn btn-delivering">view our Story</button>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news">
        <h4>Latest News</h4>
        <div className="news-content d-flex justify-content-center gap-5">
          <div className="card">
            <img src="/img/news/news1.jpg" alt="" className="card-img-top " />
            <div className="card-body">
              <h5>TRIPUTRA AGRO (TAPG) GELONTORKAN DIVIDEN RP 754 MILIAR</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                fuga assumenda molestiae quos. Officia mollitia, sit totam
                aspernatur non neque architecto illum et alias eius? Laboriosam
                culpa ratione nulla? Ratione.
              </p>
            </div>
            <div className="card-footer">
              <a href="#">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="card">
            <img src="/img/news/news1.jpg" alt="" className="card-img-top " />
            <div className="card-body">
              <h5>TRIPUTRA AGRO (TAPG) GELONTORKAN DIVIDEN RP 754 MILIAR</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                fuga assumenda molestiae quos. Officia mollitia, sit totam
                aspernatur non neque architecto illum et alias eius? Laboriosam
                culpa ratione nulla? Ratione.
              </p>
            </div>
            <div className="card-footer">
              <a href="#">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="card">
            <img src="/img/news/news1.jpg" alt="" className="card-img-top " />
            <div className="card-body">
              <h5>TRIPUTRA AGRO (TAPG) GELONTORKAN DIVIDEN RP 754 MILIAR</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                fuga assumenda molestiae quos. Officia mollitia, sit totam
                aspernatur non neque architecto illum et alias eius? Laboriosam
                culpa ratione nulla? Ratione.
              </p>
            </div>
            <div className="card-footer">
              <a href="#">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* contact us */}
      <section id="contact">
        <div className="row">
          <div className="col-lg-5">
            <div className="mx-auto my-auto">
              <h3>Contact Us</h3>
              <p>We will reach you soon Please Fill This For​​m</p>
            </div>
          </div>
          <div className="col-lg-7 ">
            <form action="#" method="post">
              <div className="d-flex flex-column ">
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
                  rows="10"
                  className="mb-3"
                  placeholder="Messages"
                ></textarea>
                <div>
                  <button
                    type="submit"
                    href="#"
                    className="btn btn-success"
                    name="submit"
                  >
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
