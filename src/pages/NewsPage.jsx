import React from "react";
import NewsComponent from "../components/NewsComponent";

const NewsPage = () => {
  return (
    <div
      id="news-page"
      style={{ width: "100%", background: "#213406", paddingTop: "130px" }}
    >
      <div
        className="wrapper"
        style={{ width: "100%", background: "#f2f2f2", padding: "20px" }}
      >
        <h1
          className="text-center"
          style={{
            fontFamily: "Playfair Display",
            color: "#81c42a",
            fontSize: "80px",
          }}
        >
          News
        </h1>
        <NewsComponent />
      </div>
    </div>
  );
};

export default NewsPage;
