import React from "react";

const NewsComponent = () => {
  return (
    <section id="news">
      <h4>Latest News</h4>
      <div className="news-content d-flex justify-content-center gap-5">
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <img src="/img/news/news1.jpg" alt="" className="card-img-top " />
          <div className="card-body" data-aos="zoom-in" data-aos-delay="700">
            <h5>TRIPUTRA AGRO (TAPG) GELONTORKAN DIVIDEN RP 754 MILIAR</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fuga assumenda molestiae quos. Officia mollitia, sit totam
              aspernatur non neque architecto illum et alias eius? Laboriosam
              culpa ratione nulla? Ratione.
            </p>
          </div>
          <div
            className="card-footer"
            // data-aos="fade-left"
            // data-aos-delay="700"
          >
            <a href="#">
              Read More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <img src="/img/news/news2.jpg" alt="" className="card-img-top " />
          <div className="card-body" data-aos="zoom-in" data-aos-delay="900">
            <h5>TRIPUTRA AGRO (TAPG) GELONTORKAN DIVIDEN RP 754 MILIAR</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fuga assumenda molestiae quos. Officia mollitia, sit totam
              aspernatur non neque architecto illum et alias eius? Laboriosam
              culpa ratione nulla? Ratione.
            </p>
          </div>
          <div
            className="card-footer"
            // data-aos="fade-left"
            // data-aos-delay="900"
          >
            <a href="#">
              Read More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <img src="/img/news/news3.jpg" alt="" className="card-img-top " />
          <div className="card-body" data-aos="zoom-in" data-aos-delay="1100">
            <h5>TRIPUTRA AGRO (TAPG) GELONTORKAN DIVIDEN RP 754 MILIAR</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fuga assumenda molestiae quos. Officia mollitia, sit totam
              aspernatur non neque architecto illum et alias eius? Laboriosam
              culpa ratione nulla? Ratione.
            </p>
          </div>
          <div
            className="card-footer"
            // data-aos="fade-left"
            // data-aos-delay="1100"
          >
            <a href="#">
              Read More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsComponent;
