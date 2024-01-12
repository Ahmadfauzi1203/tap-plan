import React from "react";

const VideoPage = () => {
  return (
    <div
      id="video-page"
      style={{ width: "100%", background: "#213406", paddingTop: "130px" }}
    >
      <div
        className="wrapper flex flex-column justify-content-center"
        style={{
          width: "100%",
          background: "#f2f2f2",
          padding: "5px 30px 30px 30px",
        }}
      >
        <h1
          style={{
            fontFamily: "Playfair Display",
            color: "#81c42a",
            fontSize: "80px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Video Gallery
        </h1>
        <div className="content d-flex justify-content-center gap-5">
          <div className="card">
            <img
              src="/img/video/Hutan_Mayong_Merapun_I.jpg"
              alt=""
              className="img-fluid"
            />
            <div className="desc">
              <a href="#">
                <i className="fa-solid fa-circle-play"></i>
              </a>
              <p>8 Agustus 2023</p>
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/video/Hutan_Mayong_Merapun_I.jpg"
              alt=""
              className="img-fluid"
            />
            <div className="desc">
              <a href="#">
                <i className="fa-solid fa-circle-play"></i>
              </a>
              <p>8 Agustus 2023</p>
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/video/Hutan_Mayong_Merapun_I.jpg"
              alt=""
              className="img-fluid"
            />
            <div className="desc">
              <a href="#">
                <i className="fa-solid fa-circle-play"></i>
              </a>
              <p>8 Agustus 2023</p>
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
