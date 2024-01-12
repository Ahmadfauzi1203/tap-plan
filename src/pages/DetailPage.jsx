import React from "react";

const DetailPage = () => {
  return (
    <div
      id="detail-page"
      style={{ width: "100%", background: "#213406", paddingTop: "130px" }}
    >
      <div className="row pt-5 bg-light" style={{ width: "100%", margin: "0" }}>
        <div className="col-lg-9">
          <div className="wrapper d-flex flex-column align-items-center">
            <img
              src="/img/news/news2.jpg"
              alt=""
              className="img-fluid mb-3"
              style={{ width: "80%", height: "100%", objectFit: "cover" }}
            />
            <h1
              className="title text-start fw-700 px-5"
              style={{ fontFamily: "Playfair Display" }}
            >
              Triputra Agro (TAPG) Gelontorkan Dividen Rp 754 Miliar
            </h1>
            <p className="time text-start fw-700">05 May 2023</p>
            <p className="reference" style={{ fontWeight: "600" }}>
              JAKARTA, Investor.id
            </p>
          </div>
          <div className="desc" style={{ padding: "0 30px 30px 30px" }}>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              consequuntur qui odio asperiores cupiditate illum odit placeat
              ipsa reiciendis fuga, dolor molestias esse quibusdam voluptas
              obcaecati nisi incidunt perferendis distinctio, voluptates
              accusantium delectus minima itaque, est perspiciatis. Quod odio,
              praesentium dolore quibusdam nisi culpa tenetur veniam suscipit,
              harum unde vero? <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              suscipit quaerat odit, unde vitae nulla commodi possimus voluptate
              architecto dolorum. <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quis debitis ipsam at ipsa quaerat dolore dignissimos dolorum nam,
              laborum animi perferendis incidunt cumque natus? Temporibus
              consectetur rerum, doloremque velit nulla fugit laudantium
              repellendus possimus. Eligendi maiores dolor in labore? Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. <br />
              Dignissimos facilis officiis autem iusto provident! Illum ullam
              aspernatur dolorum harum possimus.
            </p>
          </div>
        </div>
        <div className="col-lg-3" style={{ borderLeft: "1px solid black" }}>
          <h3
            style={{
              fontFamily: "Playfair Display",
              fontWeight: "700",
              color: "#81c42a",
            }}
          >
            Recent News
          </h3>
          <hr />
          <ul>
            <li>
              <a href="#">
                Triputra Agro Persada Patok Harga IPO Rp 200 Per Lembar
              </a>
            </li>
            <li>
              <a href="#">
                Kinerja 2020: Laba Triputra Agro (TAPG) Meroket 375 Persen
              </a>
            </li>
            <li>
              <a href="#">
                Anak Usaha PT Triputra Agro Persada Tbk Memperoleh Perpanjangan
                Kredit Sindikasi Selama Empat Tahun
              </a>
            </li>
            <li>
              <a href="#">
                RUPST 2020 TAPG setujui pembagian dividen Rp 300 miliar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
