import React from "react";

const FoundersPage = () => {
  return (
    <div id="founder-page">
      <div className="hero">
        <img src="/img/founders/banner-kepemimpinan.png" alt="" />
        <span>
          <div className="line"></div>
          <h1>Founders</h1>
        </span>
      </div>
      <div className="wrapper">
        <div className="card active">
          <a href="">
            <img
              src="/img/founders/img-leader-1.png"
              alt=""
              className="img-fluid"
            />
            <div className="card-footer">
              <h5>DR. Ir. Theodore Permadi Rachmat</h5>
              <p>Founder</p>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="">
            <img
              src="/img/founders/img-leader-2.png"
              alt=""
              className="img-fluid "
            />
            <div className="card-footer">
              <h5>The Late Ir. Subianto</h5>
              <p>Founder</p>
            </div>
          </a>
        </div>
      </div>
      <div className="desc">
        <div className="wrapper">
          <h5 className="name-desc">DR. Ir. Theodore Permadi Rachmat</h5>
          <p className="title-desc">Founder</p>
          <hr />
          <p>
            Indonesian citizen. <br /> Better known as Teddy Rachmat, he
            obtained his Bachelor's degree in Mechanical Engineering in 1968
            from the Bandung Institute of Technology (ITB), Indonesia. His
            career began at PT Astra International Tbk in 1968. After serving
            the senior and executive positions, he was appointed as President
            Director, President Commissioner, and then Commissioner of PT Astra
            International Tbk until the year 2005. <br /> In 1998, he founded PT
            Triputra Investindo Arya ("Triputra"), and currently serves as its
            President Director. PT Triputra Agro Persada Tbk is one of
            Triputra's subsidiaries operating in palm oil plantations. <br />
            Accolades: <br />
            <ol>
              <li>
                Bintang Jasa Utama Award in 2019 from the President of Republic
                Indonesia for his work in the business and social sectors. Read
                the full article on <br />
                <a href="">
                  https://www.setneg.go.id/baca/index/presiden_jokowi_anugerahkan_tanda_kehormatan_bagi_29_tokoh
                </a>
              </li>
              <li>
                Honorary Doctoral Degree from ITB for his achievements and
                service in contributing to the the welfare, prosperity,
                education, and future of Indonesia. Read the full article on{" "}
                <a href=""> https://www.itb.ac.id/honoris-causa</a>
              </li>
            </ol>
          </p>
        </div>
        <div className="wrapper">
          <h5 className="name-desc">The Late Ir. Subianto</h5>
          <p className="title-desc">Founder</p>
          <hr />
          <p>
            Indonesian citizen. <br /> He graduated from the Bandung Institute
            of Technology, Indonesia, in 1969, and was awarded the Bachelor's
            degree in Mechanical Engineering. He served various positions at PT
            Triputra Agro Persada Tbk such as President Director (2005–2008),
            and President Commissioner of PT Triputra Agro Persada Tbk
            (2008–2017), PT Persada Capital Investama, PT Tri Nur Cakrawala, and
            PT Pandu Alam Persada. <br /> Over the course of his career, he has
            worked as the Deputy President Director and Director of PT United
            Tractors Tbk, the President Commissioner of PT Berau Coal Indonesia
            and PT United Tractors Tbk, as well as the Commissioner of PT Adaro
            Energy Tbk, PT Persada Capital Investama, PT Alam Tri Abadi, PT
            Union Sampoerna Triputra Persada, PT Agro Multi Persada, PT Kirana
            Megatara, and PT Astra Agro Lestari Tbk. <br /> He passed away on
            January 4, 2017.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersPage;
